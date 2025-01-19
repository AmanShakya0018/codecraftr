import React from 'react'

type TopcontainerProps = {
  children: React.ReactNode
}

const Topcontainer = ({ children }: TopcontainerProps) => {
  return (
    <div className="flex px-10 gap-x-32 justify-center  max-sm:w-full max-sm:justify-start bg-opacity-10 w-fit min-w-[40vw] max-sm:min-w-full">
      {children}
    </div>
  )
}

export default Topcontainer