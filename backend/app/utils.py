import whisperx
import os
import subprocess
import time
import json

base_dir = os.path.dirname(os.path.abspath(__file__))
device = "cpu"
audio_path = os.path.join(base_dir, "downloads", "audio", "output.wav")
video_path = os.path.join(base_dir, "downloads", "video", "input.mp4")

# Load models
print("Loading WhisperX model...")
whisperx_model = whisperx.load_model("base", device=device, compute_type="int8")

# Optional: load alignment model
print("Loading alignment model...")
align_model, metadata = whisperx.load_align_model(language_code="en", device=device)


def transcribe_audio():
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
    
    print("Result:", result)
    
    print(f"Transcription + alignment took {time.time() - start_time:.2f} seconds")

    segments = [
        {
            "start": w["start"],
            "end": w["end"],
            "word": w["word"]
        } for w in result.get("word_segments", [])
    ]

    return json.dumps(segments, indent=2)


if __name__ == "__main__":
    res = transcribe_audio()
    print("Transcription Result:\n", res)
