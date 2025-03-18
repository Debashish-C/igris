import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=' p-4 bg-amber-000 bg-transparent fixed  top-0 flex justify-center items-center'>
        <div className="flex justify-between items-center max-w-xl sm:w-xl">
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
            {/* Bl */}
        </div>
        </div>
    </nav>
  ) 
}
