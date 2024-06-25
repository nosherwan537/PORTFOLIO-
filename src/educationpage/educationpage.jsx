import React from "react";

const EducationPage = () => {
    return (
        <div className="text-white relative top-2 left-2 overflow-y-auto pb-20">
            <section className="fade-in">
                <h1 className="text-xl text-hover text-glow mb-8">SCHOOL:</h1>
                <p>
                    OPF BOYS COLLEGE H-8/4 ISLAMABAD
                </p>
            </section>
            <br />
            <section className="fade-in">
                <h1 className="text-xl text-hover text-glow">COLLEGE:</h1>
                <p>
                    FSC from OPF BOYS COLLEGE H-8/4 ISLAMABAD
                </p>
            </section>
            <br />
            <section className="fade-in">
                <h1 className="text-xl text-hover text-glow">UNIVERSITY:</h1>
                <p>
                    Bachelors in Software Engineering from NATIONAL UNIVERSITY OF SCIENCES AND TECHNOLOGY
                </p>
            </section>
            <br />
            <section className="fade-in">
                <h1 className="text-xl text-hover text-glow">CERTIFICATIONS AND ACHIEVEMENTS:</h1>
                <p>
                <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>Second Position in Engineering in College</li>
                    <li>Supervised Learning: Regression and Classification by Andrew Ng</li>
                    <li>Java course by Krish Valley (Udemy)</li>
                    <li>Javascript course by YouAccel Training</li>
                </ul>
                </p>
            </section>
            <br />
            <section className="fade-in">
                <h1 className="text-xl text-hover text-glow">GRADES:</h1>
                <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>Matriculation: 97.5%</li>
                    <li>Intermediate: 91.81%</li>
                    <li>Bachelors: 3.55 CGPA</li>
                </ul>
            </section>
        </div>
    );
};

export default EducationPage;
