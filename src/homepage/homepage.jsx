import React from 'react';
import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
   <div>
    <div className="flex justify-center items-center h-screen text-white fade-in">
      <div className="text-center">
        <section>
        <h1 className="text-4xl font-bold shadow-md text-slate-500">Hi there! Welcome to my portfolio</h1>
        <p className="text-lg shadow-sm text-gray-400"> I am Nosherwan Tahir</p>
        <div></div>
        <p className="text-lg shadow-sm text-gray-400">Full Stack Web Developer | AI Enthusiast | Software Engineer</p>
        </section>
      </div>
    </div>
   </div>
  );
};

export default Homepage;
