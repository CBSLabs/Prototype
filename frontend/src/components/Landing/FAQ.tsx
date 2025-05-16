"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-neutral-200 rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left font-medium text-neutral-900 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-indigo-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
