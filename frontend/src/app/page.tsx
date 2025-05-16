import Image from "next/image";
import { PricingSection } from "@/components/Landing/PricingCard";
import { FaqSection } from "@/components/Landing/FAQs";
import {
  Clock,
  Video,
  Upload,
  Share2,
  Zap,
  MessageSquareText,
  UploadIcon,
  Wand2,
  Share,
  ShieldCheck,
  CreditCard,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Check,
  ArrowBigDown,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col border">
      <section className="relative overflow-hidden flex items-center justify-center border-b h-[calc(100vh-10rem)]">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-none">
            Turn Your Videos into Viral Reels & Shorts in Minutes!
          </h1>
          <p className="text-xl text-muted-foreground my-8 text-center">
            Transform YouTube videos or uploads into engaging, AI-edited reels
            with captions, cropping, and direct uploads to YouTube Shorts or
            Instagram Reels.
          </p>
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <button className="border px-7 py-3 rounded-full transition-colors font-semibold bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Start Creating Now
            </button>
            <button className="border px-7 py-3 rounded-full transition-colors font-semibold hover:bg-secondary cursor-pointer">
              Try for Free
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="h-[calc(100vh-10rem)] border-b flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Struggling to Create Viral Content?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hours of Editing</h3>
              <p className="text-neutral-600">
                Traditional video editing takes hours of your time that could be
                spent creating.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <Video className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Complex Tools</h3>
              <p className="text-neutral-600">
                Professional editing software has a steep learning curve and is
                hard to master.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Manual Uploads</h3>
              <p className="text-neutral-600">
                Converting and uploading to multiple platforms manually is
                tedious and error-prone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-[calc(100vh-10rem)] border-b">
        <div className="w-full border-b">
          <div className="py-24 max-w-xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
              Everything You Need to Create Viral Reels & Shorts
            </h2>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-8 h-full">
            <div className="border-r h-full p-10">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5" />
                <span className=" ">AI Editing</span>
              </p>
              <p className="font-semibold text-2xl leading-none mt-4">
                Our AI automatically identifies the best clips and creates
                engaging edits.
              </p>
            </div>
            <div className="h-full p-10">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MessageSquareText className="w-5 h-5" />
                <span className="">Auto Captions</span>
              </p>
              <p className="font-semibold text-2xl leading-none mt-4">
                Generate accurate captions in seconds, making your content
                accessible to everyone.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 h-full border-t">
            <div className="border-r h-full p-10">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5" />
                <span className=" ">One-Click Social Uploads</span>
              </p>
              <p className="font-semibold text-2xl leading-none mt-4">
                Upload directly to YouTube Shorts or Instagram Reels without
                leaving the app. TODO: ICONS
              </p>
            </div>
            <div className="h-full p-10">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MessageSquareText className="w-5 h-5" />
                <span className="">Fast & Scalable</span>
              </p>
              <p className="font-semibold text-2xl leading-none mt-4">
                Process videos in minutes with our cloud-based, high-speed
                pipeline. [Cloud Icon]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="text-white">How it works?</span>{" "}
              <span className="text-gray-300">
                Let AI do the heavy lifting.
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Just <span className="text-blue-400 font-medium">upload</span> a
              video, let our{" "}
              <span className="text-purple-400 font-medium">AI edit</span> it,
              and <span className="text-green-400 font-medium">share</span> your
              perfect reel.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                Get Started
              </button>
              <button className="bg-zinc-900 text-white px-6 py-3 rounded-full border border-zinc-800 hover:bg-zinc-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      <FaqSection />

      <footer className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Reels AI Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl font-bold text-white">Lumora </span>
              </div>
              <p className="mb-4">
                AI-powered video editing that turns your content into viral
                reels.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    AI Editing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Auto Captions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Social Uploads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} Lumora . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
