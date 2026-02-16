import React from 'react'

const Hero = () => {
  return (
    <section className='bg-white py-20 px-6'>
        <div className='max-w-7xl mx-auto flex flex-col items-center text-center'>
            <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 mb-6'>
                Building Data-Driven 
                <span className='text-blue-600 px-4'>
                    Solutions
                </span>
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus enim suscipit temporibus aperiam similique.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg'>
                    View My Projects
                </button>
                <button className='border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition'>
                    Download Resume
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero