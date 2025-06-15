import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 gap-16 sm:p-20 font-Arial">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="inline-block px-6 py-2 rounded-lg backdrop-blur-xl bg-gray-500/50 border border-orange-500">
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
        <div className="inline-block px-6 py-2 rounded-lg backdrop-blur-xl bg-gray-500/50 border border-orange-500">
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
            href="" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            About Us
          </a>
          <a
            className="rounded-full py-3 px-6 border border-solid bg-black"
            href="/calendar" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            Upcoming Events
          </a>
          <a
            className="rounded-full py-3 px-6 border border-solid bg-black"
            href="" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            Our History
          </a>

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-color:orange">
        <div className="flex gap-4 px-6 py-1 rounded-lg backdrop-blur-xl bg-gray-500/50 border border-orange-500">

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.instagram.com/okstate.acm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg" 
              alt="Window icon"
              width={16}
              height={16}
            />
            ACM Instagram
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            PLACEHOLDER FOOTER
          </a>
        </div>
      </footer>
    </div>
  );
}