import Footer from '@/ui/Footer'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
  return (
    <div className="flex flex-col justify-center items-center ">
    <div className='flex flex-col max-w-xl justify items p-8 scroll-auto'>
        <h3 className='mt-80  p-4 bg-neutral-800 rounded-md'>Hello, I am a App Developer currently pursuing MCA from NIT-B </h3>
      <section>
        <div className="flex sm:flex-row  flex-col justify-between p-2 pt-8">
            <div className='flex-col'>
            <h1 className='font-bold text-3xl text-start'>Debashish Sahu</h1>
            <p className='p-1 pb-3'>Developer( Web / App / Native )</p>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/profile.jpeg" width={100} height={100} className='border-2 border-white rounded-full' alt='profileImage' />
            </div>
        </div>
      </section>
      <section className='p-2'>
        <h1 className=' font-bold text-xl border-b-0 underline border-cyan-000'>Work</h1>
        <p className='pt-2'> Debashish is a freelance and a full-stack developer based in Odisha with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code.</p>
      </section>
      <section className='flex justify-center items-center'>

        <Link href="/work">
      <button className='bg-cyan-400 text-black w-44 pl-3 pr-3 p-2 m-4 rounded-lg'>
        
        My Portfolio </button>
        </Link>
      </section>
      <section className='mt-2 p-2'>
        <h1 className=' font-bold text-xl border-b-0 underline border-cyan-400 pb-2'>Bio</h1>
        <div className="flex flex-col gap-2">
        <p> <strong>2003</strong> Born In Odisha</p>
        <p><strong>2023</strong> Graduation from Samalpur University</p>
        <p><strong>2024 to present</strong> Pursuing Masters From NIT Bhopal</p>
        </div>
      </section>
      <section className='p-2'>
        <h1 className='font-bold text-xl border-b-0 underline border-cyan-400 pb-4'>Contact</h1>
        <div className="flex flex-col gap-2 pl-4 pt-2">
        <a href="" className='text-cyan-400'>@Debashish-C</a>
        <a href="" className='text-cyan-400'>@Debashish Sahu</a>
        <a href="" className='text-cyan-400'>8260770087</a>
        <a href="" className='text-cyan-400'>@debashish.sahu.official@gmail.com</a>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  )
}
