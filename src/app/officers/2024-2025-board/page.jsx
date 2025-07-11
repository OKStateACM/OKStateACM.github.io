/*
AUTHOR(S): Justin Moua

Notes:
  - Placeholder Text
Resources:
  - Placeholder Text
*/
import Header from "../../components/Header";  // This is a custom component created located in ../../components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page.
import Footer from "../../components/Footer";  // This is another custom component.
import OfficerCard from "../../components/OfficerCard"; //This is another custom component.

// List of officers that gets passed to the OfficerCard component. The component is called in the main function below.
const officers = [
  { 
    officer_title: "President", 
    officer_name: "Justin Moua",
    officer_headshot: "/images/officers/2024-2025 exec team/justin moua.jpg",
    officer_linkedin: "https://www.linkedin.com/in/justin-moua/",
    officer_email: "hmuas11037@gmail.com",
    officer_github: "https://github.com/JustinMoua",
    officer_website: "https://JustinMoua.github.io/"
  },
  
  { 
    officer_title: "Vice President", 
    officer_name: "Ashton Cecil",
    officer_headshot: "/images/officers/2024-2025 exec team/ashton cecil.png",
    officer_linkedin: "https://www.linkedin.com/in/ashton-cecil-a3155b235/",
    officer_email: "ashtoncec@gmail.com",
    officer_github: "https://github.com/ashtoncec",
    officer_website: ""
  },
  
  { 
    officer_title: "Treasurer", 
    officer_name: "Ethan Franks", 
    officer_headshot: "/images/officers/2024-2025 exec team/ethan franks.png",
    officer_linkedin: "https://www.linkedin.com/in/ethan-franks-377634272/",
    officer_email: "ethan.franks@okstate.edu",
    officer_github: "",
    officer_website: ""
  },
  
  { 
    officer_title: "Secretary", 
    officer_name: "Savannah Hamblin", 
    officer_headshot: "/images/officers/2024-2025 exec team/savannah hamblin.png",
    officer_linkedin: "https://www.linkedin.com/in/savannah-hamblin-70927b237/",
    officer_email: "savannah.hamblin@okstate.edu",
    officer_github: "",
    officer_website: ""    
  },
  
  { 
    officer_title: "OSU Tulsa & Online Liaison", 
    officer_name: "Ryeleigh Avila",
    officer_headshot: "/images/officers/2024-2025 exec team/ryeleigh avila.png",
    officer_linkedin: "https://www.linkedin.com/in/avila03/",
    officer_email: "ryeleigh.avila@okstate.edu",
    officer_github: "https://github.com/RyeleighAvila",
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

// This is called from page.js from src\app\officers\page.jsx.
export default function Officers2024to2025() {
  return (
    <>
      <Header/>

      <main>
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
            (2024-2025)
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
            (2024-2025)
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
    </>
  );
}