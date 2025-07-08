/*
AUTHOR(S): Justin Moua

=========
IMPORTANT
=========
  - 6/25/2025 (Justin Moua) Note to self: This "important" section will probably be in the readme.
  - This specific file serves as the page for "current" officers/executive board.
    When your term is over, please create a folder with the name of "x-y-board" where
    x and y are the corresponding academic years of your team. Afterwards, create a "page.jsx"
    inside of that file. Then, copy this entire code into that file.  

=====
Notes
=====
  -  6/21/2025 (Justin Moua) - I've coded this page in such a way that you only ever need to
     edit the list of officers below to update the contents of the officers page.
     Note that you WILL need to add images yourself and link to them.
     If no image is provided or found, then a silhouette image is used as a fallback.
     You can find the code for this in src/components/OfficerCard.jsx!

  - 6/25/2025 (Justin Moua) - I've designed the officer's hyperlinks in such a way that it only
    renders a corresponding image (such as the linked.in icon, email icon, and so on) if a link
    is provided for them.

=========
Resources
=========
- Placeholder Text
*/
import Header from "../components/Header";  // This is a custom component created located in ../components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page.
import Footer from "../components/Footer";
import OfficerCard from "../components/OfficerCard";

// List of officers. 
// ==== 
// NOTE
// ====
//  Images only appear if you provide a link! Very convenient right? 
//  So don't worry about removing images from each person:) - Justin Moua
const officers = [
  { 
    officer_title: "President", 
    officer_name: "Ricardo Mulino", 
    officer_headshot: "",
    officer_linkedin: "https://www.linkedin.com/in/ricardo-mulino-2093052b6/",
    officer_email: "ricardo.mulino@okstate.edu",
    officer_github: "",
    officer_website: ""
  },
  
  { 
    officer_title: "Vice President", 
    officer_name: "Savannah Hamblin", 
    officer_headshot: "/images/officers/2025-2026 exec team/savannah hamblin.png",
    officer_linkedin: "https://www.linkedin.com/in/savannah-hamblin-70927b237/",
    officer_email: "savannah.hamblin@okstate.edu",
    officer_github: "",
    officer_website: ""    
  },
  
  { 
    officer_title: "Treasurer", 
    officer_name: "Ethan Franks", 
    officer_headshot: "/images/officers/2025-2026 exec team/ethan franks.png",
    officer_linkedin: "https://www.linkedin.com/in/ethan-franks-377634272/",
    officer_email: "ethan.franks@okstate.edu",
    officer_github: "",
    officer_website: ""
  },
  
  { 
    officer_title: "Secretary", 
    officer_name: "Jack Weinheimer", 
    officer_headshot: "/images/officers/2025-2026 exec team/jack weinheimer.png",
    officer_linkedin: "https://www.linkedin.com/in/jack-weinheimer-96469518a/",
    officer_email: "jaweinh@okstate.edu",
    officer_github: "",
    officer_website: ""
  },
  
  { 
    officer_title: "Advisor", 
    officer_name: "Christopher Crick", 
    officer_headshot: "",
    officer_linkedin: "",
    officer_email: "",
    officer_github: "",
    officer_website: ""
  },
  
];
//==============================================
//REPLACE ME AFTER ELECTING NEW BOARD MEMBERS!!!
//==============================================


// This is called from page.js from src\app.
export default function Officers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-1">
        {/* =======PAGE TITLE STARTS HERE==========PAGE TITLE STARTS HERE==========PAGE TITLE STARTS HERE========== */}
        {/* (DESKTOP VIEW) Title and Former Exec Board buttons */}
        {/* Has 3 columns */}
        <div className="items-center hidden grid-cols-3 py-8 md:grid">
          {/* apart of the first column. Purposefully meant to be empty unless there is something else added in the future. */}
          <div></div>
          
          {/* Apart of the middle column (this is for the title) */}
          <div className="text-5xl text-center text-black">
            ACM Executive Board
            <br />
            (2025-2026)
          </div>
          
          {/* Apart of the third column (this is to view former executive boards) */}
          <div className="flex justify-center">
            <a
              className="p-2 py-3 text-sm text-center text-black rounded-xl hover:bg-orange-200 shadow-[0_0_20px_8px_rgba(255,165,0,0.6)]"
              href="/officers/previous-boards"
            >
              View Other Executive Boards
            </a>
          </div>
        </div>

        {/* (MOBILE VIEW) Title and Former Exec Board button */}
        {/* Stacked vertically for mobile */}
        <div className="grid grid-cols-1 gap-4 py-8 md:hidden">
          {/* Title */}
          <div className="py-4 text-2xl text-center text-black">
            ACM Executive Board
            <br />
            (2025-2026)
          </div>
          {/* Button centered below title */}
          <div className="flex justify-center">
            <a
              className="p-2 py-3 text-sm text-center text-black rounded-xl hover:bg-orange-200 shadow-[0_0_20px_8px_rgba(255,165,0,0.6)]"
              href="/officers/previous-boards"
            >
              
              View Other Executive Boards
            </a>
          </div>
        </div>
        {/* =======PAGE TITLE ENDS HERE==========PAGE TITLE ENDS HERE==========PAGE TITLE ENDS HERE========== */}

        {/* spacing between the page's title and the content of each officer. */}
        <br />    
        
        {/* Grid of 3 columns. */}
        <div className="hidden grid-cols-3 text-black gap-y-12 md:grid exec-container">
          {officers
            .filter(officer => officer.officer_name)
            .map((officer) => (
              <OfficerCard
                key={officer.officer_title}
                officer_title={officer.officer_title}
                officer_name={officer.officer_name}
                officer_headshot={officer.officer_headshot}
                officer_linkedin={officer.officer_linkedin}
                officer_email={officer.officer_email}
                officer_github={officer.officer_github}
                officer_website={officer.officer_website}
              />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-20 text-black gap-y-12 md:hidden exec-container">
          {officers
            .filter(officer => officer.officer_name)
            .map((officer) => (
              <OfficerCard
                key={officer.officer_title}
                officer_title={officer.officer_title}
                officer_name={officer.officer_name}
                officer_headshot={officer.officer_headshot}
                officer_linkedin={officer.officer_linkedin}
                officer_email={officer.officer_email}
                officer_github={officer.officer_github}
                officer_website={officer.officer_website}
              />
          ))}
        </div>

      </main>
      
      <br/>

      <Footer/>
    </div>
  );
}