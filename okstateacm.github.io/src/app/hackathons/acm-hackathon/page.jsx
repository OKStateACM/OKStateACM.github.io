/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========
  - Placeholder Text
*/
import Header from "../../components/Header"; // This is a custom component created located in ./components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page. It is similar to creating a function that you call in your code
import Footer from "../../components/Footer";
import UnderConstruction from "../../components/UnderConstruction"; // This is a custom component created located in ./components/UnderConstruction.jsx. This is so we don't have to copy and paste the code for the under construction page in every page. It is similar to creating a function that you call in your code
// This is called from page.js from src\app.
export default function AcmHackathon() {
  // Calendar link goes here. Otherwise, page displays a "under construction" if left empty.
  const calendarSrc = "https://outlook.office365.com/owa/calendar/e28ac9a07dd04bb38253af01e2a9692e@okstate.edu/9be922f1620d49a0a01ffdccd22b176913404027681472246621/calendar.html";
  // Empty example: const calendarSrc = "";

  return (
    <div className="flex flex-col min-h-screen">
<UnderConstruction />
    </div>
  );
}