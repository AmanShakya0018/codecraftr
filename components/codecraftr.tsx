import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const CodeCraftr = () => {
  return (
    <div className='flex items-center space-x-12'>
      <Link href="/" className="flex items-center space-x-1">
        <Image src="/logo.png" width={20} height={20} priority={false} alt="Logo" unoptimized={true} className="rounded-xl" />
        <span className="text-lg font-semibold">CodeCraftr</span>
      </Link>
    </div>
  )
}

export default CodeCraftr