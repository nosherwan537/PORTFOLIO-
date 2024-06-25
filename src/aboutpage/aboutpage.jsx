import React from "react";
import { Button } from "@/components/ui/button";
import dpImage from "../assets/dp.jpeg";

const AboutPage = () => {
    return (
        <div className="flex text-white justify-between overflow-y-auto h-screen fade-in">
            <div className="relative top-2 left-2 backdrop-blur-sm bg-white/30 p-2 rounded-lg">
                <section>
                    <h1 className="text-xl text-hover text-glow">NAME:</h1>
                    <p>Nosherwan Tahir</p>
                </section>
                <br />
                <section>
                    <h1 className="text-xl text-hover text-glow">AGE:</h1>
                    <p>19</p>
                </section>
                <br />
                <section>
                    <h1 className="text-xl text-hover text-glow">EMAIL:</h1>
                    <p>
                        <a href="mailto:tahirnosherwan@gmail.com">tahirnosherwan@gmail.com</a>
                    </p>
                </section>
                <br />
                <section>
                    <h1 className="text-xl text-hover text-glow">PHONE:</h1>
                    <p>03336359748</p>
                </section>
                <br />
        
                <section>
                    <h1 className="text-xl text-hover text-glow">ABOUT:</h1>
                    <p>I am Nosherwan Tahir , a passionate BE Software Engineering student at National University of Science and Technology,<br/>Islamabad. I am a full stack web developer and have made several projects using latest tools like React.js , Next.js and Node.js. <br/>Alongwith this I have proficiency in languages like C++,Java and Javascript. Due to my great interest in AI , currently I am <br/> doing some Machine Learning courses and looking forward to make some exciting projects.<br/> My main aim is always to follow and do what I like so instead of being only focused on one domain , I like to study and explore <br/>various concepts in diverse field of Computer Science. </p>
                </section>
                <br />
            </div>
            <div className="relative top-2 right-2">
                <img className="h-40 rounded-3xl" src={dpImage} alt="DP" />
            </div>
        </div>
    );
};

export default AboutPage;
