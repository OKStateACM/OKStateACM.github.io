/*
AUTHOR(S): Justin Moua

=====
Notes
=====
    Justin Moua (5/28/2025) - the calendar is currently linked to a calendar I created for the 2024-2025 ACM executive team under my OSU account.
                              A new one will need to be created. Preferably, one should be made through the OSU email. However, I am not sure if
                              this would work. When I created the link for my the 2024-2025 ACM calendar, it only allowed me to show times when
                              I was busy instead of showing the actual title of the events. I think this meant that the events I had in place on the
                              calendar itself were displayed only as "busy." Do note that the link may no longer work in the future (which means you do not)
                              see a calendar and instead are met with an error. You should be able to use any calendar for this page
                              so long as you have created a shareable link.
                              In my case, shared the link for the 2024-2025 ACM calendar (particularly the HTML version)
    
    Justin Moua (7/7/2025) - The calendar link is currently linked to my personal Outlook calendar. I went ahead and commented out the code that
                              displays the calendar. I did this because I do not want to share my personal calendar with the public.
                              Please create one for the ACM chapter and place the link in the calendarSrc variable.
=========
Resources
=========
  - Placeholder Text
*/
import Header from "../components/Header"; // This is a custom component created located in ./components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page. It is similar to creating a function that you call in your code
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction";
// This is called from page.js from src\app.
export default function Calendar() {
  // Calendar link goes here. Otherwise, page displays a "under construction" if left empty.
  const calendarSrc = "";
  // Empty example: const calendarSrc = "";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex items-center justify-center text-5xl text-black py-9">
        Upcoming Events
      </div>

      <main className="flex flex-col justify-center flex-1 p-8">
        {/* Use an iframe to show the shared calendar. If no link, show under construction message. */}

        {/* 
          ============
          REPLACE ME!!
          ============
          THIS CODE HAS BEEN COMMENTED OUT BECAUSE IT IS CURRENTLY LINKED TO JUSTIN'S OUTLOOK CALENDAR. - Justin Moua (7/7/2025)
         */}
        {/*calendarSrc ? (
          <iframe
            className="w-full h-[70vh] rounded-md border"
            src={calendarSrc}
            style={{ background: "white" }}
            title="Oklahoma State ACM Calendar"
          />
        ) : (
          <div className="flex flex-col text-center items-center justify-center h-[70vh] bg-white rounded-md border text-black text-2xl font-semibold">
            Calendar is under construction. Please check back later <br/>or contact acm.cs@okstate.edu
          </div>
        )*/}

        {/* 
        
        This version does not let us use links.
        <UnderConstruction extraText='You can keep up to date with events by joining our Discord or following our social media accounts on linktr.ee'/> 
        
        */}
        <UnderConstruction
          extraText={
            <>
              You can keep up to date with events by joining our Discord or following our social media accounts on{' '}
              <a
                href="https://linktr.ee/okstate.acm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                linktr.ee
              </a>
              .
            </>
          }
        />
      </main>

      <Footer />
    </div>
  );
}