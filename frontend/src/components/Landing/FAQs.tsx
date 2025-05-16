"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b">
      <div className="flex">
        <h2 className="text-2xl md:text-3xl font-bold text-center border-r">
          Frequently asked questions.
        </h2>
        <div className="w-full">
          {[
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
          ].map((item, index) => (
            <div key={index} className={`w-full p-7 ${index !== 3 ? "border-b" : ""} overflow-hidden`} >
              <div className="flex items-center ">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => toggleItem(index)}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => toggleItem(index)}
                    />
                  )}
                </div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-5 text-muted-foreground">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
