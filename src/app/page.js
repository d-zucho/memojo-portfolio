import Image from 'next/image'
import Hero from './components/Hero'
;('react-type-animation')

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col mx-auto bg-[#121212]'>
      <div className='container mx-auto px-4 md:px-12 py-8'>
        <Hero />
      </div>
    </main>
  )
}
