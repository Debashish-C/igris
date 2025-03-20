import Project from '@/ui/Project'
import Link from 'next/link'
import React from 'react'

export default function layout() {
  return (
    <div>
      <Link href="/work/linkbee">
          <Project image = "" name ="" title="" />
      </Link>
      <h1 className='font-bold'>Old Works</h1>
      <Link href="/work/linkbee">
      <Project image="/linkbee.png" name="linkbee" title="A social media gethering platform"/>
      </Link>
    </div>
  )
}
