import React from 'react';
import LinkedInButton from '@/components/ui/buttonnew';
import GitHubButton from '@/components/ui/buttonnew2';
import FiverrButton from '@/components/ui/buttonfiverr';
import UpworkButton from '@/components/ui/buttonupwork';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white text-center absolute bottom-0 w-full">
      {/* Content container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright text */}
        <div className="text-xs mb-2 md:mb-0 md:text-sm">&copy; 2024 Nosherwan Tahir. All rights reserved.</div>

        {/* Follow buttons */}
        <div className="flex justify-center md:justify-end space-x-2">
          <p className="hidden md:block mr-2 mt-1 md:mt-4">Follow on</p> {/* Adjusted margin on small screens */}
          <LinkedInButton />
          <GitHubButton />
          <FiverrButton />
          <UpworkButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
