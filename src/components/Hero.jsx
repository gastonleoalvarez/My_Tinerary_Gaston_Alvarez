import React from 'react'

const Hero = () => {
  return (
    <div className="relative">

      <img src="/banner.jpg" className="h-15 w-50"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-50 -translate-y-1/2 text-center pb-80 ml-40">
        <h1 className="text-4xl font-bold pb-4">My Tinerary</h1>
        <p className="text-2xl">Find your perfect trip designed by insiders who know and love their clients</p>
      </div>

    </div>
  )
}

export default Hero