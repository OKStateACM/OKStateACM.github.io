/*
AUTHOR(S): Justin Moua

=====
Notes
=====
    - This component is used to create an accordion that can be used in the FAQ page.
        It uses the following YouTube tutorial.
      - https://youtu.be/oOXExNA8A48?si=N6MM4L4VjxiIC2sE

=========
Resources
=========
    - Placeholder Text
*/
'use client';
import React, {useState} from 'react';
export default function Accordion({title, answer}) {
  // This is called a "use state" that controls the accordion open/close state. 
  // Refer to https://www.geeksforgeeks.org/reactjs/what-is-usestate-in-react/ for more information on use states.
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
        <div className="py-2">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">

                {/* Renders the title/question of the accordion. */}
                <span className="flex-1 text-left text-md sm:text-xl">{title}</span>
                {/* Renders the + and - icon on the far-right of the accordion when opening and closing it. */}
                <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                        }`}
                    />
                </svg>

            </button>

            {/* This is the answer that is shown when the accordion is open. */}
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm md:text-lg ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    {answer}
                </div>
            </div>
        </div>
    </>
    
  )
}
