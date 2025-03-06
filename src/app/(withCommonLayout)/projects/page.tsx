
const ProjectsPage = () => {
    return (
        <div className="lg:max-w-[80%] lg:mx-auto my-20">
            <h2 className="text-center text-[30px] font-bold mb-4">All Projects</h2>
        <div className="flex mt-10 gap-5">
            <div className="w-[60%] border">
            <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src="https://picsum.photos/id/118/800/600"
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src="https://i.pravatar.cc/48?img=24"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                A day in the sun
              </h3>
              <p className="text-sm text-slate-400"> By Sue, jun 3 2023</p>
            </div>
          </header>
          <p>
            After a walk through history, there is nothing left to do but admire
            the hypnotizing landscapes that exist in every direction. From vast
            deserts to rainbow mountains, and everything in between.
          </p>
        </div>
      </div>
            </div>
            <div className="w-[40%] border flex items-start justify-end gap-4">
                <button className="text-[#a855f7] font-bold text-xl underline underline-offset-4">Details</button>
                <button className="text-[#a855f7] font-bold text-xl underline underline-offset-4">Live Link</button>
                <button className="text-[#a855f7] font-bold text-xl underline underline-offset-4 ">Live Link</button>
            </div>
        </div>
        </div>
    );
};

export default ProjectsPage;