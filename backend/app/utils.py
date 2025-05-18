"""
    Steps:
        -- Authenticate user
        -- Get YouTube URL from user ✅
        -- Validate Video whether it is a podcast or noramal video if podcast then do podcast processing else normal    video processing [ gets the video type from client ]
        -- Download video from YouTube URL [api call] ✅
        -- Save video to local storage /app/downloads/video/input.mp4 ✅
        -- Convert video to audio using ffmpeg ✅
        -- Transcribe audio using WhisperX ✅
        -- Align transcription using WhisperX aligner ✅
        -- Return transcription result as JSON ✅
        Example:
            {
                "segments": [
                    {
                        "start": 0.0,
                        "end": 5.0,
                        "word": "Hello"
                    },
                    {
                        "start": 5.0,
                        "end": 10.0,
                        "word": "world"
                    }
                ]
            }
        -- Identify viral moments in the video [LLM Gemini call] ✅
        -- Return identified moments as JSON ✅
        -- Process Clip moments
"""

llm_system_prompt =  """
    This is a podcast video transcript consisting of word, along with each words's start and end time. I am looking to create clips between a minimum of 30 and maximum of 60 seconds long. The clip should never exceed 60 seconds.

        Your task is to find and extract stories, or question and their corresponding answers from the transcript.
        Each clip should begin with the question and conclude with the answer.
        It is acceptable for the clip to include a few additional sentences before a question if it aids in contextualizing the question.

        Please adhere to the following rules:
        - Ensure that clips do not overlap with one another.
        - Start and end timestamps of the clips should align perfectly with the sentence boundaries in the transcript.
        - Only use the start and end timestamps provided in the input. modifying timestamps is not allowed.
        - Format the output as a list of JSON objects, each representing a clip with 'start' and 'end' timestamps: [{"start": seconds, "end": seconds}, ...clip2, clip3]. The output should always be readable by the python json.loads function.
        - Aim to generate longer clips between 40-60 seconds, and ensure to include as much content from the context as viable.

        Avoid including:
        - Moments of greeting, thanking, or saying goodbye.
        - Non-question and answer interactions.

        If there are no valid clips to extract, the output should be an empty list [], in JSON format. Also readable by json.loads() in Python.

        The transcript is as follows:\n\n
    """

from pytubefix import YouTube
from pytubefix.cli import on_progress
from dotenv import load_dotenv
from google import genai
import subprocess
import whisperx
import time
import json
import os


load_dotenv()
geminiApiKey = os.environ["GEMINI_API_KEY"]
if not geminiApiKey:
    raise ValueError("GEMINI_API_KEY environment variable is not set.")
geminiClient = genai.Client(api_key= geminiApiKey)



base_dir = os.path.dirname(os.path.abspath(__file__))
device = "cpu"
audio_path = os.path.join(base_dir, "downloads", "audio", "output.wav")
video_path = os.path.join(base_dir, "downloads", "video", "input.mp4")

def load_model():
    print("Loading WhisperX model...")
    whisperx_model = whisperx.load_model("base", device=device, compute_type="int8")

    print("Loading alignment model...")
    align_model, metadata = whisperx.load_align_model(language_code="en", device=device)

    return whisperx_model, align_model, metadata

def transcribe_audio():
    print("Loading models...")
    whisperx_model, align_model, metadata = load_model()
    print("Video Path: ", video_path)
    print("Audio Output Path: ", audio_path)

    print("Converting video to audio...")
    subprocess.run(
        f'ffmpeg -i "{video_path}" -vn -acodec pcm_s16le -ar 16000 -ac 1 "{audio_path}"',
        shell=True,
        check=True
    )

    print("Transcribing audio...")
    start_time = time.time()
    audio = whisperx.load_audio(str(audio_path))
    result = whisperx_model.transcribe(audio, batch_size=16)

    print("Aligning transcription...")
    result = whisperx.align(
        result["segments"], align_model, metadata, audio, device
    )
    
    # print("Result:", result)
    
    print(f"Transcription + alignment took {time.time() - start_time:.2f} seconds")

    segments = [
        {
            "start": w["start"],
            "end": w["end"],
            "word": w["word"]
        } for w in result.get("word_segments", [])
    ]

    return json.dumps(segments, indent=2)

def download_youtube_video(videoURL: str):
    try:
        yt = YouTube(videoURL, on_progress_callback=on_progress)
        ys = yt.streams.filter(progressive=True, file_extension='mp4').get_highest_resolution()
        currentWorkingDirectory = os.getcwd()
        print("currentWorkingDirectory: ", currentWorkingDirectory)
        output_path = os.path.join(currentWorkingDirectory, "app", "downloads", "video")
        if not os.path.exists(output_path):
            os.makedirs(output_path)
        ys.download(output_path=output_path, filename="input.mp4")
        print(f"Video downloaded successfully: {yt.title}")
    except Exception as e:
        raise ValueError(f"Error downloading video: {e}")

def identify_viral_moments(transcription_result):
    response = geminiClient.models.generate_content(
        model = "gemini-2.0-flash",
        contents = llm_system_prompt + transcription_result,
    )
    
    print(f"Identified moments response: ${response.text}")
    cleaned_response = response.text.strip()
    if cleaned_response.startswith('```json'):
        cleaned_response = cleaned_response[len('```json'):].strip()
    if cleaned_response.endswith('```'):
        cleaned_response = cleaned_response[len('```')].strip()
    
    clip_momemts = json.loads(cleaned_response)
    return clip_momemts


if __name__ == "__main__":
    res = transcribe_audio()
    print("Transcription Result:\n", res)
    viral_moment = identify_viral_moments(res)
