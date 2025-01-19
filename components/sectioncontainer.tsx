import React from 'react'

type SectioncontainerProps = {
  children: React.ReactNode
}

const Sectioncontainer = ({ children }: SectioncontainerProps) => {
  return (
    <section className="z-20 fixed top-0 w-full max-sm:overflow-x-auto flex justify-center px-4 backdrop-blur-lg bg-white/20 dark:bg-black/20">
      {children}
    </section>
  )
}

export default Sectioncontainer