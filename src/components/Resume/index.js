import React from 'react';
import WorkHistory from '../WorkHistory';
import Languages from '../Languages';
import { MdFileDownload } from 'react-icons/md';

const Resume = () => {
    return (
        <section id="resume">
            <h2 className="title">Resume</h2>

            <article className="resumeSection">
                <p>Client summary statement/elevator pitch</p>
            </article>

            <a id="resumeDownload" download>
                <MdFileDownload />
                Download Resume as a PDF
            </a>

            <article className="Languages">
                <h3 className="sectionTitles">Programming Languages</h3>

                <div id="languageIcons">
                    <Languages name="c"
                    imageLink="../images/c.png"
                    />
                    
                    <Languages name="cpp"
                    imageLink="../images/cpp.png"
                    />

                    <Languages name="csharp"
                    imageLink="../images/csharp.png"
                    />

                    <Languages name="javascript"
                    imageLink="../images/javascript.png"
                    />

                    <Languages name="python"
                    imageLink="../images/javascript.png"
                    />
                </div>
            </article>

            <article className="resumeSection">
                <h3 className="sectionTitles">Work Experience</h3>

                <WorkHistory jobtitle="Food Delivery Service Driver"
                employer="Doordash"
                timeframe="January 2021 to Present"
                description="Self-dedicated employment involving quality service customer abilities, care with product, communication with multiple businesses for orders, and importance in punctual timing to deliver a product."
                />

                <WorkHistory jobtitle="Soccer Shots Coach"
                employer="Soccer League"
                timeframe="September 2021 to Present"
                description="Using leadership, organizational skills, and communication skills to develop basic soccer skills in children ready to take the first step towards a career in sports. A good showcase of quick thinking as well as patience when working with both children and parents."
                />
            </article>

            <article className="resumeSection">
                <h3 className="sectionTitles">Community Service</h3>

                <WorkHistory jobtitle="Creator and Lead Event Organizer of Annual Food Center Fundraiser"
                description="Creator of Flagstaff Walks Together community service project involving a walk around Buffalo Park to raise money for the Family Food Center."
                />
            </article>

            <article className="resumeSection">
                <h3 className="sectionTitles">Education</h3>
            </article>
        </section>
    );
}

export default Resume;