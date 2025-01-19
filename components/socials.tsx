import React from 'react'
import { Themetoggle } from './ThemeToggle'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className="flex items-center space-x-4">
      <Themetoggle />
      <Link href="https://twitter.com/AmanShakya0018" target="_blank">
        <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">Twitter</p>
      </Link>
      <Link href="https://www.linkedin.com/in/amanshakya0018/" target="_blank">
        <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">LinkedIn</p>
      </Link>
    </div>
  )
}

export default Socials