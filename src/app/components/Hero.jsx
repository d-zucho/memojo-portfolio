import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 mx-auto'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            Hello, I&apos;m Marik
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-4 mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            totam? Dolores, aperiam.
          </p>
          <button className='w-full mb-4 antialiased  sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transition-all text-white hover:bg-slate-200lg:text-base font-semibold'>
            Hire Me
          </button>
          <button className='w-full sm:w-fit px-6 py-3 rounded-full bg-transparent transition-all hover:bg-slate-800 text-white border border-white mb-4 text-sm font-semibold'>
            Download CV
          </button>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
            <Image
              src='/avatar-img.png'
              alt='hero-image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
