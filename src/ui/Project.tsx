import React from 'react'
import Image from 'next/image'

type ChildComponentProps = { image: string; name: string ; title : string};

export default function Project({image , name , title } : ChildComponentProps) {
  return (
    <div className='p-2   rounded-2xl text-center'>
      <Image src = {image} alt= "Image Project" width={550} height={150} className='p-2 rounded-2xl' />
      <h1 className='text-xl'>{name}</h1>
      <p>{title}</p>
    </div>
  )
}
