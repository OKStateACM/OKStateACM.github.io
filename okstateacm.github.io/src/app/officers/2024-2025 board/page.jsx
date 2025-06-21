/*
AUTHOR(S): Justin Moua

Notes:
  -   - Placeholder Text
Resources:
  - Placeholder Text
*/
import Header from "../components/Header";  // This is a custom component created located in ../components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page.
import OfficerCard from "../components/OfficerCard";

// List of officers
const officers = [
  { officer_title: "President", officer_name: "Ricardo Mulino", officer_headshot: "" },
  { officer_title: "Vice President", officer_name: "Savannah Hamblin", officer_headshot: "" },
  { officer_title: "Treasurer", officer_name: "Ethan Franks", officer_headshot: "/officers/2025-2026 exec team/ethan franks.png" },
  { officer_title: "Secretary", officer_name: "Jack Weinheimer", officer_headshot: "" },
  { officer_title: "Advisor", officer_name: "Christopher Crick", officer_headshot: "" },
];

// This is called from page.js from src\app.
export default function Officers() {
  return (
    <>
      <Header/>

      <main>
        <div className="py-8 text-3xl text-center text-black">
          ACM Executive Board
        </div>
        <div className="hidden grid-cols-3 text-black gap-y-12 md:grid exec-container">
          
          {officers.map((officer) => (
            <OfficerCard
              key={officer.officer_title}
              officer_title={officer.officer_title}
              officer_name={officer.officer_name}
              officer_headshot={officer.officer_headshot}
            />
          ))}

        </div>

        <div className="grid grid-cols-1 gap-20 text-black gap-y-12 md:hidden exec-container">

          {officers.map((officer) => (
            <OfficerCard
              key={officer.officer_title}
              officer_title={officer.officer_title}
              officer_name={officer.officer_name}
              officer_headshot={officer.officer_headshot}
            />
          ))}

        </div>

      </main>

      <footer>

      </footer>
    </>
  );
}