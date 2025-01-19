import React from "react";

interface MainCodeProps {
  id: string;
  checkBackgroundVisibility: boolean;
  gradient: string;
  children: React.ReactNode;
}

function MainCode({
  id,
  checkBackgroundVisibility,
  gradient,
  children,
}: MainCodeProps) {
  return (
    <div
      id={id}
      className={`w-fit min-w-[44vw] rounded-xl py-8 px-10 sm:px-4 max-sm:p-2 shadow-lg ${checkBackgroundVisibility ? "!bg-transparent shadow-none border-none" : ""
        }`}
      style={{ background: gradient }}
    >
      {children}
    </div>
  );
}

export default MainCode;
