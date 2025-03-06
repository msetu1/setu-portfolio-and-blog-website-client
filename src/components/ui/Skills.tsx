"use client"

const Skills = () => {
    return (
        <div className='flex lg:max-w-[80%] lg:mx-auto my-20 gap-8'>
            <div className="w-[50%] ">
                <h2 className='text-[30px] font-bold mb-4'>Front-End Web Developer.</h2>
                <p>✨ Bringing Ideas to Life Through Engaging Digital Experiences ✨

Passionate web developer with a creative mindset and a sharp eye for detail. I blend the art of design with the science of coding to craft seamless, intuitive, and user-focused websites. Proficient in cutting-edge technologies and frameworks, I thrive on solving complex challenges and pushing the boundaries of innovation.</p>
                <div className="flex gap-5 mt-8">
                <div className="stat border border-[#15803d] py-2 px-4 rounded-md">
                    <h2 className='mb-2 text-4xl font-bold text-[#15803d]'>18 +</h2>
                    <p>Finished Projects</p>
                </div>
                <div className="stat border border-[#15803d] py-2 px-4 rounded-md">
                    <h2 className='mb-2 text-4xl font-bold text-[#15803d]'>2 + </h2>
                    <p>Happy Clients</p>
                </div>
                <div className="stat border border-[#15803d] py-2 px-4 rounded-md">
                    <h2 className='mb-2 text-4xl font-bold text-[#15803d]'>1 +</h2>
                    <p>Experience</p>
                </div>
    </div>
            </div>
            <div className="w-[50%] ">
            <h2 className='text-[30px] font-bold mb-5 underline text-center'>Skills </h2>
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                TypeScript
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                JavaScript
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Node.js
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Express.js
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                MongoDB
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Mongoose
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                DBMS
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                SQL
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                React.js
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Redux
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Next.js
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                TailwindCSS
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Material UI
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Ant Design
                </button>
                <button className="gap-2 border-2 border-[#15803d] rounded-full px-4 py-2">
                Shadcn
                </button>
             </div>
            </div>
        </div>
    );
};

export default Skills;