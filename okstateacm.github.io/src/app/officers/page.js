import Image from "next/image";


//* AUTHORS: Justin Moua
//*
//*
//*

// This is called from page.js from src\app.
export default function Officers() {
  return (
    <div className="flex flex-col min-h-screen">
          
      <header className="w-full bg-black text-white py-4 px-8 flex items-center">
        <a
          className="rounded-full py-3 px-6 border border-solid bg-black"
          href="/"
          target="_self"
        >
          Home
        </a>
        <a
          className="rounded-full py-3 px-6 border border-solid bg-black"
          href="/"
          target="_self"
        >
          About Us
        </a>
        <a
          className="rounded-full py-3 px-6 border border-solid bg-black"
          href="/calendar"
          target="_self"
        >
          Upcoming Events
        </a>
        
        {/* <h1 className="text-2xl font-bold">ACM Officers</h1> */}
      </header>

      
      <main className="flex-1 overflow-y-auto p-8 ">
        
        <div className="max-w-3xl mx-auto space-y-6">

            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                    {/* Left: Image and text */}
                    <div className="flex items-center gap-4">
                    <img
                        src="/silhouette.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-black text-xl font-semibold">Advisor</h2>
                        <span className="text-black">Dr. Crick (Christopher Crick)</span>
                    </div>
                    </div>
                    {/* Right: LinkedIn icon */}
                    <a
                    href="https://www.linkedin.com/in/ricardo-mulino-2093052b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >

                    {/* <Image
                    aria-hidden
                    src="/linkedin.png" //ADD AN EMAIL ICON HERE
                    alt="File icon"
                    width={80}
                    height={0}
                    /> */}
                    {/* don't need to do the following. */}
                    {/* <img src="/linkedin.png" alt="LinkedIn" className="w-20 h-5" /> */}
                    </a>
                </div>
            </div>
          
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                    {/* Left: Image and text */}
                    <div className="flex items-center gap-4">
                    <img
                        src="/silhouette.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-black text-xl font-semibold">President</h2>
                        <span className="text-black">Ricardo Mulino</span>
                    </div>
                    </div>
                    {/* Right: LinkedIn icon */}
                    <a
                    href="https://www.linkedin.com/in/ricardo-mulino-2093052b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >

                    <Image
                    aria-hidden
                    src="/linkedin.png" //ADD AN EMAIL ICON HERE
                    alt="File icon"
                    width={80}
                    height={0}
                    />
                    {/* don't need to do the following. */}
                    {/* <img src="/linkedin.png" alt="LinkedIn" className="w-20 h-5" /> */}
                    </a>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                    {/* Left: Image and text */}
                    <div className="flex items-center gap-4">
                    <img
                        src="/silhouette.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-black text-xl font-semibold">Vice President</h2>
                        <span className="text-black">Savannah Hamblin</span>
                    </div>
                    </div>
                    {/* Right: LinkedIn icon */}
                    <a
                    href="https://www.linkedin.com/in/savannah-hamblin-70927b237/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >

                    <Image
                    aria-hidden
                    src="/linkedin.png" //ADD AN EMAIL ICON HERE
                    alt="File icon"
                    width={80}
                    height={0}
                    />
                    {/* don't need to do the following. */}
                    {/* <img src="/linkedin.png" alt="LinkedIn" className="w-20 h-5" /> */}
                    </a>
                </div>
            </div>
                  
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                    {/* Left: Image and text */}
                    <div className="flex items-center gap-4">
                    <img
                        src="/silhouette.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-black text-xl font-semibold">Treasurer</h2>
                        <span className="text-black">Ethan Franks</span>
                    </div>
                    </div>
                    {/* Right: LinkedIn icon */}
                    <a
                    href="https://www.linkedin.com/in/ethan-franks-377634272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        
                    <Image
                    aria-hidden
                    src="/linkedin.png" //ADD AN EMAIL ICON HERE
                    alt="File icon"
                    width={80}
                    height={0}
                    />
                    {/* don't need to do the following. */}
                    {/* <img src="/linkedin.png" alt="LinkedIn" className="w-20 h-5" /> */}
                    </a>
                </div>
            </div>
                  
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                    {/* Left: Image and text */}
                    <div className="flex items-center gap-4">
                    <img
                        src="/silhouette.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-black text-xl font-semibold">Secretary</h2>
                        <span className="text-black">Jack Weinheimer</span>
                    </div>
                    </div>
                    {/* Right: LinkedIn icon */}
                    <a
                    href="https://www.linkedin.com/in/jack-weinheimer-96469518a/"
                    target="_blank"
                    rel="noopener noreferrer"
                          >
                    <Image
                    aria-hidden
                    src="/linkedin.png" //ADD AN EMAIL ICON HERE
                    alt="File icon"
                    width={80}
                    height={0}
                    />
                    {/* don't need to do the following. */}
                    {/* <img src="/linkedin.png" alt="LinkedIn" className="w-20 h-5" /> */}
                    </a>
                </div>
            </div>
                  
        </div>
      </main>


      <footer className="w-full bg-black text-white py-4 px-8 flex items-center justify-center">
        <div className="flex gap-10">

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:acm.cs@okstate.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Email Icon"
              width={16}
              height={16}
            />
            acm.cs@okstate.edu
          </a>

        </div>        
      </footer>
    </div>
  );
}