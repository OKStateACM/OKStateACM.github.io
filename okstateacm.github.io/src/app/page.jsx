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

export default function Home() { //This is a functional component. It's called Home.
  return (
    <> 
    {/*The <> above is called a JSX element. (If this was a .html file then this would be a html element).
        More specifically, this element is called a fragment because it is an empty tag.
        It allows us to group things without leaving traces in the browser HTML tree.*/}
      <header className="bg-white py-5 border-b-4 border-orange-500">

        {/* justify-between helps us add space between the two div elements. w-full sets to full. */}
        <div className="flex items-center justify-between w-full text-gray-500">

          <div className="pl-50 text-3xl gap-15">
            ACM@OkState
          </div>

          <div className="flex gap-15 items-center flex-col sm:flex-row pr-60">
            <a
              className="rounded-sm py-2 px-6  underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300"
              href="" //Link to somewhere.
              target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
            >
              Home
            </a>

            <a
              className="rounded-sm py-2 px-6  underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300"
              href="officers" //Link to somewhere.
              target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
            >
              Officers
            </a>

            <a
              className="rounded-sm py-2 px-6  underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300"
              href="/calendar" //Link to somewhere.
              target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
            >
              Events
            </a>
            <a
              className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300"
              href="" //Link to somewhere.
              target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
            >
              About Us
            </a>
          </div>
        </div>

      </header>
      

      <main className="text-black">

        <>
          <div className="relative top-image-container max-h-50 py-50 bg-[url('/mscs2.png')] bg-cover bg-center">
            
            <div className="absolute inset-0 w-full h-full backdrop-blur-xs saturate-150 flex items-center justify-center">
              <div className="placeholder-text text-white text-8xl text-stroke text-center">
                Association for<br/>Computing Machinery
              </div>
            </div>

          </div>
          <Image
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full drop-shadow-lg drop-shadow-orange-400" 
            src="/ACM Logo (Transparent).png" //location of logo
            alt="Next.js logo" //alt text of file
            width={180}
            height={38}
            priority
          />

          <div className="rest-of-main-content bg-white py-50">
            <div className="placeholder-text text-black text-center">
              Welcome to Oklahoma State University's Computer Science community!
            </div>
          </div>
        
        </>


      </main>

      <footer>

      </footer>
    </>
  );
}