import React from 'react';
import CodeCraftr from './codecraftr';
import Socials from './socials';
import Sectioncontainer from './sectioncontainer';
import Topcontainer from './topcontainer';

interface FixedTopSectionProps {
  children: React.ReactNode;
}

const FixedTopSection = ({ children }: FixedTopSectionProps) => {
  return (
    <Sectioncontainer>
      <Topcontainer>
        <CodeCraftr />
        <div className="flex items-center gap-8 h-20 text-black ">
          {children}
        </div>
        <Socials />
      </Topcontainer>
    </Sectioncontainer>
  );
};

export default FixedTopSection;
