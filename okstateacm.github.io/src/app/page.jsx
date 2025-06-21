/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========
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

import Image from "next/image";
import Header from "./components/Header"; // This is a custom component created located in ./components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page. It is similar to creating a function that you call in your code

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
          <div className="relative top-image-container h-56 sm:h-80 md:h-[28rem] bg-[url('/mscs.png')] bg-cover bg-center">
            {/* Centers and adds backdrop */}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full backdrop-blur-xs saturate-150">
              {/* Adds title  */}
              <div className="px-2 text-3xl text-center text-white sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-xl drop-shadow-black">
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
          <div className="px-4 py-8 bg-white rest-of-main-content sm:py-16 sm:px-0">
            <div className="max-w-2xl mx-auto text-base text-center text-black sm:text-xl md:text-2xl placeholder-text">
              Welcome to Oklahoma State University's Computer Science community!
            </div>
          </div>

      </main>

      <footer>
        {/* Add your footer content here */}
      </footer>
    </>
  );
}