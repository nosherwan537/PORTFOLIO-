import React from 'react';
import { Button } from "@/components/ui/button";

const SkillsPage = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://github.com/nosherwan537';
    }

    return (
        <div className='h-screen overflow-y-auto pb-20'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between gap-4 text-white'>
                <div className='relative top-3 md:left-10 space-y-4'>
                    <section className='backdrop-blur-sm bg-white/30 rounded-lg p-3 fade-in '>
                        <h1 className='text-xl text-hover text-glow'>LANGUAGES</h1>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>SQL</li>
                        </ul>
                    </section>
                    <section className='backdrop-blur-sm bg-white/30 rounded-lg p-3 fade-in '>
                        <h1 className='text-xl text-hover text-glow'>FRAMEWORKS</h1>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Flask</li>
                        </ul>
                    </section>
                    <section className='backdrop-blur-sm bg-white/30 rounded-lg p-3 fade-in '>
                        <h1 className='text-xl text-hover text-glow'>VERSION CONTROL</h1>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </section>
                </div>
                <div className='relative top-3 md:right-10 space-y-4'>
                    <section className='backdrop-blur-sm bg-white/30 rounded-lg p-3 fade-in '>
                        <h1 className='text-xl text-hover text-glow'>FREELANCING</h1>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                            <li>Upwork</li>
                            <li>Fiverr</li>
                        </ul>
                    </section>
                    <section className='backdrop-blur-sm bg-white/30 rounded-lg p-3 fade-in '>
                        <h1 className='text-xl text-hover text-glow'>PROBLEM SOLVING</h1>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                            <li>LeetCode</li>
                        </ul>
                    </section>
                    <section className='backdrop-blur-sm bg-white/30 rounded-lg p-3 fade-in'>
                        <h1 className='text-xl text-hover text-glow '>PROJECTS</h1>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                            <li>Portfolio</li>
                            <li>TWITTER CLONE</li>
                            <li>SPOTIFY CLONE</li>
                            <li>CHAT APP</li>
                            <li>AI CHATBOT TRAINED ON LOGISTIC REGRESSION</li>
                            <li>UNIVERSITY TRANSPORT APP</li>
                            <li>SFML C++ 2D GAME</li>
                        </ul>
                        <br />
                        <p>
                            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleButtonClick}>
                                View Projects
                            </Button>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage;
