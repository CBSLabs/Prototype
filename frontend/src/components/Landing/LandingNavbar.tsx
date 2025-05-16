import React from 'react'

export default function LandingNavbar() {
  return (
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-neutral-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
              Lumora 
            </span>
          </div>
          <div className="flex gap-4">
            <button className="text-neutral-600 hover:text-indigo-600 transition">
              Login
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-sm transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>
  )
}
