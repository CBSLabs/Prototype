import type React from "react"

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}

