import React from 'react'

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#f5f5f7] text-center font-sans">
  
  <h1 className="text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
    Welcome to the blog app
  </h1>

  <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
    A simple, powerful place to write, share, and discover stories that matter.
  </p>

  <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition">
    Get Started
  </button>

</div>
  )
}

export default Home