"use client"

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
             </div>
            </div>
        </div>
    );
};

export default Skills;