/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========

React.JS
  - Hiding and showing components using the useState Hook
    - Link: https://dev.to/adetutu/how-to-use-usestate-hook-with-conditional-rendering-in-react-showing-and-hiding-components-3pj5
    - Note: This is used to show and hide the "Get Involved!" button and the pop up when clicked.

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

  // This is a React hook that allows us to use state in functional components.
  // The useState hook returns an array with two elements: the current state and a function
  // Please read https://react.dev/reference/react/useState for more information.

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

          <div className=" h-[400px] bg-white px-4 py-20 sm:py-40 sm:px-0">
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
        
          {/* Below is the rest of the content for the home page. */}
          <div className="grid bg-white sm:py-15 place-items-center gap-100">

            {/* 
              Section for students getting involved and companies contact the ACM. 
              Grid for two columns.
            */}
            <div className="grid grid-cols-3 text-4xl sm:gap-50 ">
              {/*Students Button */}
              <div className="grid grid-cols-1 gap-5">
                <div className = "flex justify-center">
                  <Image
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36"
                    src="/images/homepage-images/students.png" //location of logo
                    alt="Next.js logo" //alt text of file
                    width={180}
                    height={180}
                    priority
                  />
                </div>
                <p className="flex justify-center text-xl sm:text-4xl">
                  Students
                </p>
                <a 
                  className="flex justify-center py-1 text-xl text-white sm:py-2 sm:text-4xl rounded-xl bg-orange-600/100 hover:bg-orange-800/100" 
                  href="https://linktr.ee/okstate.acm"
                  target="_blank" //This is here to open the link in a new tab.
                >
                  Join Us!
                </a>
              </div>

              {/* Hackathons Button */}
              <div className="grid grid-cols-1 gap-5 transform translate-y-50">
                <div className = "flex justify-center">
                  <Image
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36"
                    src="/images/homepage-images/hackathons.png"
                    alt="Next.js logo"
                    width={180}
                    height={180}
                    priority
                  />
                </div>

                <p className="flex justify-center text-xl sm:text-2xl sm:text-4xl">
                  Hackathons
                </p>
                <a 
                  className="flex justify-center p-1 py-2 text-xl text-white sm:text-2xl sm:text-4xl rounded-xl bg-orange-600/100 hover:bg-orange-800/100" 
                  href="/hackathons"
                  >
                  Learn More!
                </a>
              </div>        

              {/*Employers Button */}
              <div className="grid grid-cols-1 gap-5">
                <div className = "flex justify-center">
                  <Image
                    
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36"
                    src="/images/homepage-images/employers.png" //location of logo
                    alt="Next.js logo" //alt text of file
                    width={180}
                    height={180}
                    priority
                  />
                </div>
                <p className="flex justify-center text-xl sm:text-2xl sm:text-4xl">
                  Employers
                </p>
                <a 
                  className="flex justify-center py-2 text-xl text-white sm:text-2xl sm:text-4xl rounded-xl bg-orange-600/100 hover:bg-orange-800/100" 
                  href="mailto:acm.cs@okstate.edu"
                  >
                  Contact Us!
                </a>
              </div>
            </div>

            {/* GRID for sections with black bars*/}
            <div className="grid grid-cols-1 gap-100">
              
            {/* GROW section */}
            <div className="flex grid grid-cols-1 gap-25"> {/*This div is used to remove the gap-100 between the image and the content for the mobile view*/}
              
              {/* DIAMOND SHAPE FRAME FOR MOBILE */}
              <div className="relative w-64 h-64 mx-auto sm:hidden">
                  {/* rotates the shape and adds orange glow */}
                  <div className="absolute inset-0 rotate-45 rounded-[20%] overflow-hidden border border-orange-500 border-4 bg-white">
                      {/* Rotates image (since the shape -45deg was rotated 45deg) and zooms in on image*/}
                      <Image
                          src={"/images/homepage-images/iso-republic-colorful-programming-code.jpg"}
                          alt="Next.js logo"
                          width={200}
                          height={200}
                          priority
                          className="object-cover w-full h-full -rotate-45 bg-white scale-126"
                      />
                  </div>
              </div>
              
              <div className="flex items-center justify-center md:h-300"> {/*This is used to add spacing between the buttns for Students, Hackathons, and Employers in the desktop view. */}
                <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120"> {/*Creates the black bars with orange borders.*/}
                  <div className="grid sm:grid-cols-2"> {/* This is used to create a grid with two columns for desktop view*/}

                    {/* DIAMOND SHAPE FRAME FOR DESKTOP*/}
                    <div className="justify-end hidden sm:flex">
                      <div className="hidden md:relative md:block sm:w-150 sm:h-150 sm:flex sm:justify-end">
                          {/* rotates the shape and adds orange glow */}
                          <div className="absolute inset-0 rotate-45 rounded-[20%] overflow-hidden border border-orange-500 border-4 bg-white">
                              {/* Rotates image (since the shape -45deg was rotated 45deg) and zooms in on image*/}
                              <Image
                                  src={"/images/homepage-images/iso-republic-colorful-programming-code.jpg"}
                                  alt="Next.js logo"
                                  width={500}
                                  height={500}
                                  priority
                                  className="object-cover w-full h-full -rotate-45 bg-white scale-126"
                              />
                          </div>
                      </div>
                    </div>
                    {/* GROW DESCRIPTION */}
                    <div >
                      <i className="flex justify-center py-5 font-bold text-white sm:py-25 text-8xl">
                        Grow
                      </i>
                      <p className="px-10 text-lg text-center text-white sm:text-2xl">
                      Whether you are an undergraduate, graduate, faculty, or a professional,
                      <br />
                      the ACM is here to help you grow. Coding experience is not a requirement
                      <br />
                      to join and we highly encourage you to join us! Participate in workshops,
                      <br />
                      competitions, company networking events, projects, game nights, 
                      <br />
                      and more!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONNECT section */}
            <div className="flex grid grid-cols-1 gap-25">

              {/* IMAGE FRAME FOR MOBILE */}
              <div className="relative w-64 h-64 mx-auto sm:hidden">
                <Image 
                  className="object-cover object-center w-full h-full bg-white border-4 border-orange-500 drop-shadow-xl drop-shadow-black rounded-4xl"
                  src="/images/homepage-images/acm-nasa-suits-fall-2023.jpg"
                  alt="Next.js logo"
                  width={500}
                  height={500}
                  priority
                />
              </div>

              <div className="flex items-center justify-center ">
                <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                  {/* grid */}
                  <div className="grid grid-cols-[1fr_auto]">
                    {/* Positions the "Connect" a title lower. */}
                    <div className="py-25">
                      {/* Title */}
                      <i className="flex font-bold text-white justify-center-safe text-8xl">
                        Connect
                      </i>
                      {/* Description */}
                      <p className="px-10 py-5 text-center text-white sm:py-25 ">
                        Come surround yourself with like-minded individuals who share your
                        <br />
                        passion for computer science and technology. Discover new friendships, 
                        <br />
                        collaborations, and opportunities to connect with fellow students,
                        <br />
                        faculty, and industry professionals.
                      </p>
                    </div>
                    {/* IMAGE FRAME FOR DESKTOP */}
                    <Image 
                      className="hidden sm:block sm:object-cover sm:object-center sm:bg-white sm:border-4 sm:border-orange-500 sm:drop-shadow-xl sm:drop-shadow-black sm:w-250 sm:h-146 sm:rounded-4xl"
                      src="/images/homepage-images/acm-nasa-suits-fall-2023.jpg"
                      alt="Next.js logo"
                      width={500}
                      height={500}
                      priority
                    />
                  </div>

                </div>
              </div>
            </div>

          {/* IMPACT section */}
          <div className="flex grid grid-cols-1 gap-25">

            {/* IMAGE FRAME FOR MOBILE */}
            <div className="relative w-64 h-64 mx-auto sm:hidden">
              <Image 
                className="object-cover object-center w-full h-full bg-white border-4 border-orange-500 drop-shadow-xl drop-shadow-black rounded-4xl"
                src="/images/homepage-images/acm-impact-2.jpg"
                alt="Next.js logo"
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="flex items-center justify-center md:h-195">
              <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                {/* grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-25">
                  {/* IMAGE FRAME FOR DESKTOP */}
                  <Image 
                    className="hidden sm:block sm:object-cover sm:object-center sm:bg-white sm:border-4 sm:border-orange-500 sm:drop-shadow-xl sm:drop-shadow-black sm:w-165 sm:h-165 sm:rounded-4xl"
                    src="/images/homepage-images/acm-impact-2.jpg"
                    alt="Next.js logo"
                    width={500}
                    height={500}
                    priority
                  />
                  <div>
                    <i className="flex justify-center py-5 font-bold text-white sm:py-25 text-8xl">
                      Impact
                    </i>
                    <p className="px-10 text-center text-white">
                      Join us to make an difference in the world of Computer Science. Whether it's
                      <br/>
                      through community outreach, mentorship, programs, organizing competitions,
                      <br/>
                      contributing to projects, or simply sharing your knowledge, you'll make a
                      <br/>
                      positive impact on the community and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HAVE FUN section */}
          <div className="flex grid grid-cols-1 gap-25">

            {/* IMAGE FRAME FOR MOBILE */}
            <div className="relative w-64 h-64 mx-auto sm:hidden">
              <Image 
                className="object-cover object-center bg-white border-4 border-orange-500 rounded-full w-65 h-65 drop-shadow-xl drop-shadow-black"
                src="/images/homepage-images/acm-have-fun-2.jpg"
                alt="Next.js logo"
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="flex items-center justify-center md:h-195">
              <div className="shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] flex items-center justify-center w-screen bg-black border-t-4 border-b-4 border-orange-500 h-120">
                {/* grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-25">
                  <div>
                    <i className="flex justify-center py-5 font-bold text-white sm:py-25 text-8xl">
                      Have Fun
                    </i>
                    <p className="px-10 text-center text-white">
                      The ACM is not just about work; it's about having fun too! Join us for game 
                      <br/>
                      nights, social events, team-building activities, food, and beverages. Meet
                      <br/>
                      new friends, relax after a long day of classes, or study together before
                      <br/>
                      that big exam! ACM is a place where you can enjoy your time while
                      <br/>
                      pursuing your passion for computer science.
                    </p>
                  </div>
                  {/* IMAGE FRAME FOR DESKTOP */}
                  <Image 
                    className="hidden sm:block sm:object-cover sm:object-center sm:bg-white sm:border-4 sm:border-orange-500 sm:drop-shadow-xl sm:drop-shadow-black sm:w-165 sm:h-165 sm:rounded-full"
                    src="/images/homepage-images/acm-have-fun-2.jpg"
                    alt="Next.js logo"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

            </div>
          </div>

      </main>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Footer/>
    </>
  );
}