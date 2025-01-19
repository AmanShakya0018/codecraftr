import React from 'react'

interface CodesnippetProps {
  children: React.ReactNode;
}

const Codesnippet = ({ children }: CodesnippetProps) => {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2 mt-1 absolute left-3 top-2 z-10">
        <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
        <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
        <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
      </div>
      {children}
    </div>
  )
}

export default Codesnippet