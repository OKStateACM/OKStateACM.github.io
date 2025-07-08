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
import Header from "../components/Header"; // This is a custom component created located in ./components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page. It is similar to creating a function that you call in your code
import Footer from "../components/Footer";

// This is called from page.js from src\app.
export default function About() {
  // Calendar link goes here. Otherwise, page displays a "under construction" if left empty.
  const calendarSrc = "https://outlook.office365.com/owa/calendar/e28ac9a07dd04bb38253af01e2a9692e@okstate.edu/9be922f1620d49a0a01ffdccd22b176913404027681472246621/calendar.html";
  // Empty example: const calendarSrc = "";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex items-center justify-center text-5xl text-black py-9">
        About
      </div>

      <main className="flex flex-col justify-center flex-1 p-8">
          <div className="flex flex-col text-center items-center justify-center h-[70vh] bg-white rounded-md border text-black text-2xl font-semibold">
            This page is under construction. Please check back later <br/>or contact acm.cs@okstate.edu
          </div>
      </main>

      <Footer />
    </div>
  );
}