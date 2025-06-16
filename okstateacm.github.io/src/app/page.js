import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full bg-black text-white py-4 px-8 gap-5 flex items-center">
        Placeholder Header
      </header>

      <main className="flex items-center justify-center flex-1 flex-col gap-[32px] row-start-2 items-center ">
        <div className="inline-block px-6 py-2 rounded-lg backdrop-blur-xl bg-gray-500/50 border border-white/50">
        {/* <div className="inline-block px-6 py-2 rounded-lg backdrop-blur-xl bg-gray-500/50"> */}
          <h1 className="text-white text-stroke text-5xl text-center">
            Association <br/>for<br/>Computing Machinery
          </h1>
        </div>
        <Image
          className="" 
          src="/ACM Logo (Transparent).png" //location of logo
          alt="Next.js logo" //alt text of file
          width={180}
          height={38}
          priority
        />
        <div className="inline-block px-6 py-2 rounded-lg backdrop-blur-xl bg-gray-500/50 border border-white/50">
          <h1 className="text-white text-stroke2 text-3xl text-center">Welcome to Oklahoma State University's<br/>Computer Science community!</h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full py-3 px-6 border border-solid bg-black"
            href="officers" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            Officers
          </a>

          <a
            className="rounded-full py-3 px-6 border border-solid bg-black"
            href="/calendar" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            Events
          </a>
          <a
            className="rounded-full py-3 px-6 border border-solid bg-black"
            href="" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            About Us
          </a>

        </div>
      </main>


      <footer className="flex items-center justify-center w-full bg-black text-white py-4 px-8 ">
        <div className="flex gap-10">

          {/* These are all hyperlinks to our verious contacts and social media. Feel free to 
              change this as you want!
              - Justin moua 6/15/2025
          */}
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
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

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://www.instagram.com/okstate.acm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Insgagram Icon"
              width={16}
              height={16}
            />
            Instagram
          </a>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Campus Link"
              width={16}
              height={16}
            />
            CampusLink
          </a>
          
          
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://linktr.ee/okstate.acm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Linktr.ee icon"
              width={16}
              height={16}
            />
            Linktr.ee
          </a>

        </div>        
      </footer>
    </div>
  );
}