import Image from "next/image";
import { Testimonial } from "@/components/Landing/Testimonial";
import { PricingCard } from "@/components/Landing/PricingCard";
import { FeatureCard } from "@/components/Landing/FeatureCard";
import { StepCard } from "@/components/Landing/StepCard";
import { Faq } from "@/components/Landing/FAQ";
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
} from "lucide-react";
import LandingNavbar from "@/components/Landing/LandingNavbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                  Make Viral Reels in Minutes
                </h1>
                <p className="text-lg text-neutral-600 mb-8">
                  Transform your YouTube videos into viral-ready Reels and
                  Shorts with AI-powered editing. No technical skills required.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-3 text-lg font-medium transition">
                    Start Now
                  </button>
                  <button className="bg-white border border-indigo-200 hover:border-indigo-300 text-indigo-600 rounded-full px-8 py-3 text-lg font-medium transition">
                    Try Free
                  </button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-200">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Video preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center transition">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Tired of Slow Editing?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="mx-auto w-16 h-16 mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Hours of Editing</h3>
                <p className="text-neutral-600">
                  Traditional video editing takes hours of your time that could
                  be spent creating.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
                <div className="mx-auto w-16 h-16 mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Video className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Complex Tools</h3>
                <p className="text-neutral-600">
                  Professional editing software has a steep learning curve and
                  is hard to master.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              All-in-One Reels Maker
            </h2>
            <p className="text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
              Everything you need to create, edit, and share professional reels
              in one platform.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Wand2 className="w-6 h-6 text-indigo-600" />}
                title="AI Editing"
                description="Our AI automatically identifies the best clips and creates engaging edits."
              />
              <FeatureCard
                icon={<MessageSquareText className="w-6 h-6 text-indigo-600" />}
                title="Auto Captions"
                description="Get accurate, properly timed captions generated automatically."
              />
              <FeatureCard
                icon={<Share2 className="w-6 h-6 text-indigo-600" />}
                title="Social Uploads"
                description="Directly publish to Instagram Reels, TikTok, and YouTube Shorts."
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-indigo-600" />}
                title="Fast Processing"
                description="Get your edited reels back in minutes, not hours or days."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-6 h-6 text-indigo-600" />}
                title="Secure Storage"
                description="Your videos are securely stored and accessible only to you."
              />
              <FeatureCard
                icon={<CreditCard className="w-6 h-6 text-emerald-600" />}
                title="Secure Payments"
                description="We use industry-standard encryption for all transactions."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              3 Easy Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StepCard
                number={1}
                icon={<UploadIcon className="w-8 h-8 text-white" />}
                title="Upload"
                description="Upload your video or paste a YouTube link."
              />
              <StepCard
                number={2}
                icon={<Wand2 className="w-8 h-8 text-white" />}
                title="AI Edit"
                description="Our AI identifies key moments and creates the perfect reel."
              />
              <StepCard
                number={3}
                icon={<Share className="w-8 h-8 text-white" />}
                title="Share"
                description="Publish directly to Instagram, TikTok, or YouTube."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Plans for Creators
            </h2>
            <p className="text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
              Choose the plan that works for your content creation needs
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for trying out the platform"
                features={[
                  "3 reels per month",
                  "720p output quality",
                  "Basic editing features",
                  "Manual uploads",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$9.99"
                period="/month"
                description="Ideal for active content creators"
                features={[
                  "Unlimited reels",
                  "1080p output quality",
                  "Advanced AI editing",
                  "Auto captions",
                  "Direct social uploading",
                  "Priority processing",
                ]}
                buttonText="Start Pro"
                buttonVariant="primary"
                highlighted={true}
              />
              <PricingCard
                title="Business"
                price="Contact Us"
                description="For teams and agencies"
                features={[
                  "Everything in Pro",
                  "4K output quality",
                  "White-label options",
                  "API access",
                  "Custom branding",
                  "Team management",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Creators Love Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Testimonial
                quote="Lumora  has saved me hours every week. I can focus on creating content while it handles the editing."
                name="Sarah Johnson"
                title="Travel Vlogger"
                avatar="/placeholder.svg?height=80&width=80"
              />
              <Testimonial
                quote="My engagement has gone up 300% since I started using these AI-edited reels. The captions are perfect every time."
                name="Mark Chen"
                title="Fitness Influencer"
                avatar="/placeholder.svg?height=80&width=80"
              />
              <Testimonial
                quote="As a small business, we couldn't afford a full-time editor. Lumora  gives us professional quality at a fraction of the cost."
                name="Jessica Williams"
                title="Boutique Owner"
                avatar="/placeholder.svg?height=80&width=80"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Your Questions Answered
            </h2>
            <p className="text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our platform
            </p>
            <div className="max-w-3xl mx-auto">
              <Faq
                items={[
                  {
                    question: "What video formats can I upload?",
                    answer:
                      "We support all major video formats including MP4, MOV, AVI, and WMV. You can also paste YouTube links directly.",
                  },
                  {
                    question: "How long does the AI editing process take?",
                    answer:
                      "Most videos are processed within 5-15 minutes, depending on length and complexity. Pro users get priority processing for faster results.",
                  },
                  {
                    question: "Can I upload directly to social media?",
                    answer:
                      "Yes! Our Pro and Business plans allow direct uploading to Instagram Reels, TikTok, and YouTube Shorts after you connect your accounts.",
                  },
                  {
                    question: "Is my content secure?",
                    answer:
                      "Absolutely. We use bank-level encryption and secure cloud storage. Your videos are only accessible to you, and we never use your content for any other purposes.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Go Viral Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already saving time and growing
              their audience with Lumora .
            </p>
            <button className="bg-white text-indigo-600 hover:bg-neutral-100 rounded-full px-8 py-3 text-lg font-medium transition">
              Start Creating Reels
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
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
