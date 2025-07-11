/*
AUTHOR(S): Justin Moua

=====
Notes
=====
  - Placeholder text
=========
Resources
=========
  - Placeholder text
*/
"use client";
import { useState } from "react"; // Refer to https://www.geeksforgeeks.org/reactjs/what-is-usestate-in-react/ for more information on use states.

export default function Header() {
  // This is called a "use state" that controls the accordion open/close state. 
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      {/*Header for desktops. This is hidden on smaller screens. Flex occurs on md and greater.*/}
      <header className="hidden py-5 bg-white border-b-4 border-orange-500 md:block">
        <div className="flex items-center justify-between w-full text-stone-700">
          <div className="text-3xl pl-50 gap-15">
            <a className="rounded-sm px-15  [text-decoration-color:#f97316] hover:bg-orange-300" href="/">
              ACM@OKState {/* This is also clickable. It takes the user home. */}
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-7 pr-40 sm:flex-row text-lg">
            <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/">
              Home
            </a>
            <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/officers">
              Officers
            </a>
            <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/calendar">
              Events
            </a>
            {/* <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/about">
              About
            </a> */}
            <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/faq">
              FAQ
            </a>
            <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/hackathons">
              Hackathons
            </a>
          </div>
          
        </div>
      </header>

      {/* Header for mobile with block on small screen. Anything greater than md has this hidden.*/}
      <header className="block py-5 bg-white border-b-4 border-orange-500 md:hidden">
        <div className="flex items-center justify-between w-full text-stone-800">
          <div className="pl-6 text-2xl">
            <a className="hover:bg-orange-100" href="/">
              ACM@OkState {/* This is also clickable. It takes the user home. */}
            </a>
          </div>

          {/* Hamburger dropdown menu*/}
          <div>
            <button
              className="p-2 rounded hover:bg-orange-200"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {/* Hamburger icon */}
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Dropdown Menu */}
        <div className="text-stone-700">
          <nav
            className={`
              flex flex-col items-start gap-2 px-6 pt-4 pb-2 bg-white rounded-b shadow-md
              overflow-hidden transition-all duration-300
              ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
                // ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} is like saying
                //  if menuOpen is true, then use the classes before the colon. Otherwise, use the one afterwards.
                //  Also, $s{``} is used to enable mixing code with strings. This is a template literal.
                //    More on JS template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            style={{ pointerEvents: menuOpen ? "auto" : "none" }}
            // More on JS pointer events: https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
          >
            <a className="w-full px-4 py-2 rounded underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-100" href="/">Home</a>
            <a className="w-full px-4 py-2 rounded underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-100" href="/officers">Officers</a>
            <a className="w-full px-4 py-2 rounded underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-100" href="/calendar">Events</a>
            {/* <a className="w-full px-4 py-2 rounded underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-100" href="/about">About</a> */}
            <a className="w-full px-4 py-2 rounded underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-100" href="/faq">FAQ</a>
            <a className="w-full px-4 py-2 rounded underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-100" href="/hackathons">Hackathons</a>
          </nav>
        </div>

      </header>
    </>
  );
}