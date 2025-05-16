import type React from "react"

export function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}

