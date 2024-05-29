import React from 'react';
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiGreensock } from "react-icons/si";

interface MySkills {
    Skill: string;
    icon: React.ReactNode;
    percentage: number;
}

const Skills = () => {
    const skills: MySkills[] = [
        {
            Skill: 'HTML5 and CSS3',
            icon: <FaHtml5 />,
            percentage: 95
        },
        {
            Skill: 'JavaScript',
            icon: <IoLogoJavascript />,
            percentage: 88
        },
        {
            Skill: 'React.js',
            icon: <FaReact />,
            percentage: 85
        },
        {
            Skill: 'Tailwind CSS',
            icon: <SiTailwindcss />,
            percentage: 85
        },
        {
            Skill: 'Framer motion',
            icon: <SiFramer />,
            percentage: 85
        },
        {
            Skill: 'GSAP',
            icon: <SiGreensock />,
            percentage: 85
        },
        // Add more skills as needed
    ];

    return (
        <div className='pt-20 pb-24' id='skills'>
            <div className='text-white'>
                <h1 className='heading'>My Advantages</h1>

                <div className='mt-4 w-full md:w-[95%] mx-auto'>                    
                        <p className=' text-justify '>
                            Over the years, I have honed my skills in various technologies that are crucial for modern web development. My proficiency in HTML5 and CSS3 allows me to create robust and visually appealing web pages. JavaScript, the backbone of dynamic web interactions, is another area where I excel. Furthermore, my expertise in React.js enables me to build complex, responsive, and frontend applications.
                        </p>
                                          
                </div>
                <div className='mt-4 w-full md:w-[95%] mx-auto grid grid-cols-3 gap-4 md:gap-6'>
                            {skills.map((skill, index) => (
                                <div key={index} className='flex items-center'>
                                    <div className='text-2xl mr-3 text-indigo-500'>
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <p className='text-[13px] md:text-[15px] font-semibold'>{skill.Skill}</p>
                                        <p>{skill.percentage}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                
            </div>
        </div>
    );
};

export default Skills;
