import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full p-4 bg-amber-000 bg-transparent fixed  top-0 flex justify-between '>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/" className='font-bold'>Debashish Sahu</Link>
            <Link href="/work">
                Work
            </Link>
            <li>
                <a href="">
                    Source
                    </a>
                    </li>
        </ul>
        <div className="">
            Bl
        </div>
    </nav>
  ) 
}
