/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========

Typewriter Effect
  - Link: https://www.npmjs.com/package/typewriter-effect?activeTab=readme

Information below are resources used to learn about Tailwind CSS.

  -  BREAKPOINTS: What are sm:, md:, lg:, xl:, 2xl, ... in this code? 
    - Link: https://tailwindcss.com/docs/responsive-design
    - Note: These are called breakpoints. They are used to make your website responsive. Breakpoints 
            When using breakpoints, "all you need to do is prefix the utility with the breakpoint name,
            followed by the : character."
            
            Example:
            - sm:bg-red-500 only applies the bg-red-500 class when the screen is at least 640px wide.
              md:bg-blue-500 only applies the bg-blue-500 class when the screen is at least 768px wide.
              - You can customize sm:, md:, and more in the globals.css folder. 
                - You CAN NOT access the tailwind.config.js file in this project because this project runs on Tailwind 4.0+
                  - More information on that here: 
                    - https://www.reddit.com/r/tailwindcss/comments/1i9e7k2/solution_tailwind_v4_missing_tailwindconfigjs/
                    - https://stackoverflow.com/questions/73474335/tailwind-config-js-file-not-being-generated

  - Headwind VSC Extension
    - Link: https://marketplace.visualstudio.com/items?itemName=heybourn.headwind
      - Last Accessed: 6/19/2025
    - Note: This is an opinionated Tailwind CSS class sorter If you are developing 
            on Visual Studio Code, you might like to use this extension. This is 
            what is what was used for this program. 

  - CSS Flexbox
    - Link #1: https://www.w3schools.com/css/css3_flexbox.asp
      - Last Accessed: 6/19/2025
    - Link #2: https://www.geeksforgeeks.org/css/css-flex-property/
      - Last Accessed: 6/19/2025
    - Note: You might see some sources have the word "flex." It falls under a CSS Flexbox. Note however that the ones used
            in this program are from Tailwind (a utility-first CSS framework). Please see the other Flex links below.
  
  - Tailwind CSS Flex
    - Link: https://www.geeksforgeeks.org/css/tailwind-css-flex/
      - Last Accessed: 6/19/2025
    - Note: w3schols article on what flex is in Tailwind CSS. (This is an alternative of the CSS flex)

  - CSS properties Cheat Sheet
    - Link: https://www.w3schools.com/CSSref/index.php
      - Last Accessed: 6/19/2025
    - Note: Used for knowing what CSS properties exist.

  - Tailwind CSS Cheat Sheet
    - Link: https://nerdcave.com/tailwind-cheat-sheet
      - Last Accessed: 6/19/2025
    - Note: I mainly used this to know what tailwind properties exist.
*/
'use client'

import Typewriter from 'typewriter-effect';
import Image from "next/image";
import Header from "./components/Header"; // This is a custom component created located in ./components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page. It is similar to creating a function that you call in your code
import Footer from "./components/Footer";

export default function Home() { //This is a functional component. It's called Home.
  return (
    <> 
    
    {/* 
        The <> above is called a JSX element. (If this was a .html file then this would be a html element).
        More specifically, this element is called a fragment because it is an empty tag.
        It allows us to group things without leaving traces in the browser HTML tree.
    */}
        
      <Header/> 
      {/* 
          NOTE that you need import Header from "./components/Header"; at the top of this file for this too work.

          This Header component is a custom component created located in ./components/Header.jsx. 
          This is so we don't have to copy and paste the code for the header in every page.
          It is similar to creting a function that you call in your code.

          You can tell that it is different from the built-in header because it is capitalized.
      */}

      <main className="text-black">

        {/* 
          Banner/Title component:
            - Displays a banner image with a responsive height that adjusts based on the device resolution (mobile, tablet, desktop).
            - Uses Tailwind classes: h-56 for base height, sm:h-80 for small screens, md:h-[28rem] for medium and above.
            - Background image is set using Tailwind
            - Inner divs add backdrop and title
          
          Note:
            - Looking into "responsive web design with Tailwind CSS" might help you understand how breakpoints and utilities work together.
              You can read about responsive web designs outside of Tailwind CSS too.
        */}
          {/* Should change the heights to rem when. */}
          <div className="relative top-image-container h-56 sm:h-80 md:h-100 bg-[url('/mscs.png')] bg-cover bg-center">
            {/* Centers and adds backdrop */}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full backdrop-blur-xs saturate-150">
              {/* Adds title  */}
              <div className="px-2 text-4xl text-center text-white sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-xl drop-shadow-black">
                Association for<br/>Computing Machinery
              </div>
            </div>
          </div>

          {/* Responsive logo placement */}
          <div className="relative z-10 flex justify-center -mt-12 sm:-mt-16 md:-mt-24">
            <Image
              className="object-contain bg-white rounded-full drop-shadow-lg drop-shadow-orange-400 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
              src="/ACM at OKState Logo.png" //location of logo
              alt="Next.js logo" //alt text of file
              width={180}
              height={180}
              priority
            />
          </div>

          {/* Responsive main content */}
          <div className=" h-[400px] bg-white px-4 py-8 sm:py-20 sm:px-0">
            <div className="text-4xl text-center text-black md:text-5xl placeholder-text">
              {/* 
                Typewriter effect: https://www.npmjs.com/package/typewriter-effect?activeTab=readme
              */}
              <Typewriter
                options={{
                  strings: [
                    "Welcome to Oklahoma State University's\n<br/>Computer Science community!",
                    "Go Pokes!"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 35, // Lower num = faster. Higher num = slower.
                  deleteSpeed: 20, // Lower num = faster. Higher num = slower.
                  pauseFor: 3000,
                }}
              />
            </div>
          </div>
          
          {/* <div className="grid text-white bg-white place-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-50">
              <div className="transition-discrete w-[250px] h-[300px] md:w-185 md:h-195 bg-black rounded-md border border-red-500 flex items-center justify-center">
                Placeholder Text
              </div>
              <div className="transition-discrete w-[250px] h-[300px] md:w-185 md:h-195 bg-black rounded-md border border-red-500 flex items-center justify-center">
                Placeholder Text
              </div>
              <div className="transition-discrete w-[250px] h-[300px] md:w-185 md:h-195 bg-black rounded-md border border-red-500 flex items-center justify-center">
                Placeholder Text
              </div>
              <div className="transition-discrete w-[250px] h-[300px] md:w-185 md:h-195 bg-black rounded-md border border-red-500 flex items-center justify-center">
                Placeholder Text
              </div>
            </div>
          </div> */}

          <div className="grid bg-white place-items-center">
            <div className="grid grid-cols-1 gap-50">
              
              {/* flex, items-center, and justify-center are for the orange bars. */}
              <div className="flex items-center justify-center md:h-195">
                <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                  {/* grid */}
                  <div className="grid items-center grid-cols-2">
                    <div className="drop-shadow-xl drop-shadow-black text-black transition-discrete w-[250px] h-[300px] md:w-165 md:h-165 bg-white rounded-4xl border-4 border-orange-500 flex items-center justify-center">
                      Placeholder Text (Maybe Image Here?)
                    </div>
                    <div className="flex items-center justify-center text-white md:h-195">
                      Placeholder Text
                    </div>                        
                  </div>
                </div>
              </div>
              
              {/* flex, items-center, and justify-center are for the orange bars. */}
              <div className="flex items-center justify-center md:h-195">
                <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                  {/* grid */}
                  <div className="grid items-center grid-cols-2">
                    <div className="flex items-center justify-center text-white md:h-195">
                      Placeholder Text
                    </div>         
                    <div className="drop-shadow-xl drop-shadow-black text-black transition-discrete w-[250px] h-[300px] md:w-165 md:h-165 bg-white rounded-4xl border-4 border-orange-500 flex items-center justify-center">
                      Placeholder Text (Maybe Image Here?)
                    </div>               
                  </div>
                </div>
              </div>

              {/* flex, items-center, and justify-center are for the orange bars. */}
              <div className="flex items-center justify-center md:h-195">
                <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                  {/* grid */}
                  <div className="grid items-center grid-cols-2">
                    <div className="drop-shadow-xl drop-shadow-black text-black transition-discrete w-[250px] h-[300px] md:w-165 md:h-165 bg-white rounded-4xl border-4 border-orange-500 flex items-center justify-center">
                      Placeholder Text (Maybe Image Here?)
                    </div>
                    <div className="flex items-center justify-center text-white md:h-195">
                      Placeholder Text
                    </div>                        
                  </div>
                </div>
              </div>
          
              {/* flex, items-center, and justify-center are for the orange bars. */}
              <div className="flex items-center justify-center md:h-195">
                <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                  {/* grid */}
                  <div className="grid items-center grid-cols-2">
                    <div className="flex items-center justify-center text-white md:h-195">
                      Placeholder Text
                    </div>         
                    <div className="drop-shadow-xl drop-shadow-black text-black transition-discrete w-[250px] h-[300px] md:w-165 md:h-165 bg-white rounded-4xl border-4 border-orange-500 flex items-center justify-center">
                      Placeholder Text (Maybe Image Here?)
                    </div>               
                  </div>
                </div>
              </div>

            </div>
          </div>

      </main>

      <br/>
      <Footer/>
    </>
  );
}