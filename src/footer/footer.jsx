// src/components/Footer.jsx
import React from 'react';
import LinkedInButton from '@/components/ui/buttonnew';
import GitHubButton from '@/components/ui/buttonnew2';
import FiverrButton from '@/components/ui/buttonfiverr';
import UpworkButton from '@/components/ui/buttonupwork';
const Footer = () => {
  return (
    <footer className="bg-slate-700 flex text-white text-center p-2 absolute  bottom-0 h-14 items-center w-full justify-between rounded-lg">
      <p>&copy; 2024 Nosherwan Tahir. All rights reserved.</p>
      <div className='flex gap-2 relative top-[3px] h-12'>
        <p className='relative flex items-center justify-center'>Follow on</p>
        <LinkedInButton />
        <GitHubButton/>
        <FiverrButton/>
        <UpworkButton/>
      </div>
    </footer>
  );
};

export default Footer;
