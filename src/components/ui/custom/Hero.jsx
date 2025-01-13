import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router'

function Hero() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/landing.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-white flex flex-col items-center gap-6 px-10 animate-fade-in">
        <h1 className="font-extrabold text-5xl md:text-6xl leading-tight tracking-wide">
          Discover Your Next Adventure with <span className="text-[#f56551]">AI</span>  
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>

        <Link to={'/create-trip'}>
  <Button className="btn-glow">
    Get Started, It's Free
  </Button>
</Link>

      </div>

    </div>
  )
}

export default Hero
