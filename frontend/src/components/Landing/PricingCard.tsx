import { Check } from "lucide-react"

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant = "primary",
  highlighted = false,
}: {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: "primary" | "outline"
  highlighted?: boolean
}) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden ${
        highlighted ? "shadow-xl border-2 border-indigo-500 relative -mt-4 mb-4" : "shadow-sm border border-neutral-100"
      }`}
    >
      {highlighted && <div className="bg-indigo-500 text-white text-center py-1 text-sm font-medium">MOST POPULAR</div>}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-neutral-500 ml-1">{period}</span>}
        </div>
        <p className="text-neutral-600 mb-6">{description}</p>
        <button
          className={`w-full py-3 rounded-lg font-medium mb-6 ${
            buttonVariant === "primary"
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "border border-indigo-200 hover:border-indigo-300 text-indigo-600"
          } transition`}
        >
          {buttonText}
        </button>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
