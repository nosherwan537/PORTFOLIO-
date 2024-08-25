import React from 'react';

const LiveProjects = () => {
    const projects = [
        {
            name: 'EcosDeEpica',
            image: '/projpic.png', // Replace with your image path
            link: 'https://ecos-de-pica-client.vercel.app/login',
            details: 'A real-time story writing and editing web application made in Next.js and Express. The app features version control and AI mentor support.',
        },
    ];

    return (
        <div className="h-screen overflow-y-auto pb-20">
            <h1 className="text-center text-3xl font-bold text-white my-8">Live Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative group cursor-pointer"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg p-4">
                            <h2 className="text-white text-2xl font-bold mb-4">{project.name}</h2>
                            <p className="text-white text-center">{project.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveProjects;
