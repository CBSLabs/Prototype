import { Check } from "lucide-react";
import React from "react";

export function PricingSection() {
  const plans = [
    {
      title: "Hobbyist",
      price: "Free Forever",
      description: "Perfect for trying out the platform",
      features: [
        "3 reels per month",
        "720p output quality",
        "Basic editing features",
        "Manual uploads",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      title: "Pro",
      price: "$20/month + add'l usage.",
      description: "Ideal for active content creators",
      features: [
        "Unlimited reels",
        "1080p output quality",
        "Advanced AI editing",
        "Auto captions",
        "Direct social uploading",
        "Priority processing",
      ],
      buttonText: "Start Pro",
      buttonVariant: "primary",
    },
    {
      title: "Business",
      price: "Contact Us",
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "4K output quality",
        "White-label options",
        "API access",
        "Custom branding",
        "Team management",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <section className="border-b">
      <div className="border-b">
        <div className="h-20 grid grid-cols-10 w-full">
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-r border-b"></div>
          <div className="border-b"></div>
        </div>
        <div className="py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Affordable Plans for Every Creator
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
            Choose the plan that works for your content creation needs
          </p>
        </div>
        <div className="h-20 grid grid-cols-10 w-full">
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-r border-t"></div>
          <div className="border-t"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index === plans.length - 1 ? "" : "border-r"
            } py-14 px-6`}
          >
            <div className="">
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <p className="text-muted-foreground mt-2 mb-6">
                {plan.description}{" "}
                <span className="text-primary font-semibold">{plan.price}</span>
              </p>
            </div>
            <div className="">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
