import React from "react";
import PlusIcon from "./PlusIcon";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center border-b h-[calc(100vh-10rem)]">
      <div className="absolute -bottom-4 -right-4">
        <PlusIcon />
      </div>
      <div className="absolute -top-4 -left-4">
        <PlusIcon />
      </div>
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
  );
}
