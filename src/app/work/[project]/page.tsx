import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div>
      <h1 className='font-bold'>Name</h1>
      <p>description</p>
      <div className="">
        <h1>WEBSITE <a href=""className='text-cyan-400 hover:underline'>link of the project</a></h1>
        <h1>STACK React,Nodejs,Postgre,express,prisma</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-2 m-2">

        <Image src="/linkbee.png" width={450} height={200} alt='project Image' className='rounded-xl'/>
      </div>
    </div>
  )
}
