import React from "react";
import dpImage from "../assets/dp.jpeg";

const AboutPage = () => {
    return (
        <div className="flex flex-col md:flex-row text-white justify-between overflow-hidden fade-in">
            {/* Right column for image */}
            <div className="relative left-2 top-3 md:right-2 md:flex md:justify-center md:w-1/2 overflow-hidden">
                <img className="h-32 rounded-3xl mb-4 md:mb-0" src={dpImage} alt="DP" />
            </div>
            
            {/* Left column for text content */}
            <div className="relative left-2 md:top-2 md:left-2 md:backdrop-blur-sm md:bg-white/30 md:p-4 md:rounded-lg md:h-auto md:w-full overflow-y-auto max-h-[450px]">
                <section className="mb-4">
                    <h1 className="text-xl text-hover text-glow">NAME:</h1>
                    <p>Nosherwan Tahir</p>
                </section>
                <section className="mb-4">
                    <h1 className="text-xl text-hover text-glow">AGE:</h1>
                    <p>19</p>
                </section>
                <section className="mb-4">
                    <h1 className="text-xl text-hover text-glow">EMAIL:</h1>
                    <p>
                        <a href="mailto:tahirnosherwan@gmail.com">tahirnosherwan@gmail.com</a>
                    </p>
                </section>
                <section className="mb-12">
                    <h1 className="text-xl text-hover text-glow">ABOUT:</h1>
                    <p>
                        I am Nosherwan Tahir, a passionate BE Software Engineering student at National University of Science and Technology, Islamabad. I am a full stack web developer and have made several projects using latest tools like React.js, Next.js, and Node.js. Along with this, I have proficiency in languages like C++, Java, and Javascript. Due to my great interest in AI, I took some Machine Learning courses and looking forward to making some exciting projects. My main aim is always to follow and do what I like so instead of being only focused on one domain, I like to study and explore various concepts in diverse fields of Computer Science.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
