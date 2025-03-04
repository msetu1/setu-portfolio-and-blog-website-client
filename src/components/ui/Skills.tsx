"use client"
import { TbBrandTypescript } from "react-icons/tb";
const Skills = () => {
    return (
        <div className='flex lg:max-w-[80%] lg:mx-auto my-20 '>
            <div className="w-[50%] border">
                <h2 className='text-[30px] font-bold'>Front-End Web Developer.</h2>
                <div className="flex gap-5 mt-10">
                <div className="stat">
                    <h2 className='mb-2 text-4xl font-bold text-[#15803d]'>18 +</h2>
                    <p>Finished Projects</p>
                </div>
                <div className="stat">
                    <h2 className='mb-2 text-4xl font-bold text-[#15803d]'>2 + </h2>
                    <p>Happy Clients</p>
                </div>
                <div className="stat">
                    <h2 className='mb-2 text-4xl font-bold text-[#15803d]'>1 +</h2>
                    <p>Experience</p>
                </div>
    </div>
            </div>
            <div className="w-[50%] border">
            <h2 className='text-[30px] font-bold mb-5 underline'>Skills </h2>
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                <div className="flex gap-2 border border-[#15803d]">
<TbBrandTypescript className="text-3xl text-[#15803d]"/>
                TypeScript
                </div>
             </div>
            </div>
        </div>
    );
};

export default Skills;