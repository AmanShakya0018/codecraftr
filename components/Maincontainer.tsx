import React from 'react'

interface MaincontainerProps {
  children: React.ReactNode;
}

const Maincontainer = ({ children }: MaincontainerProps) => {
  return (
    <div className="flex flex-col gap-6 min-h-[80vh] items-center pb-4 max-sm:px-2 mt-24">
      {children}
    </div>
  )
}

export default Maincontainer