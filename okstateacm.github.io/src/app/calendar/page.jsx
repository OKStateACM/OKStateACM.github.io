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
=========
Resources
=========
  - Placeholder Text
*/
import Image from "next/image";

// This is called from page.js from src\app.
export default function Calendar() {
  return (
    //in-line text utilizes tailwind. Please search up the following in-line commands with respect to the tailwind documentation.
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center w-full gap-5 px-8 py-4 text-white bg-black">
        <a
          className="px-6 py-3 bg-black border border-solid rounded-full"
          href="/"
          target="_self"
        >
          Home
        </a>
        <a
          className="px-6 py-3 bg-black border border-solid rounded-full"
          href="/officers"
          target="_self"
        >
          Officers
        </a>
        <a
          className="px-6 py-3 bg-black border border-solid rounded-full"
          href="/calendar"
          target="_self"
        >
          Events
        </a>
        <a
          className="px-6 py-3 bg-black border border-solid rounded-full"
          href="/"
          target="_self"
        >
          About Us
        </a>

        {/* <h1 className="text-2xl font-bold">ACM Officers</h1> */}
      </header>

      <main className="flex flex-col justify-center flex-1 p-8">
        {/* Use an iframe to show the shared calendar. */}
        <iframe 
          className="w-full h-[70vh] rounded-md border"
          src="https://outlook.office365.com/owa/calendar/e28ac9a07dd04bb38253af01e2a9692e@okstate.edu/9be922f1620d49a0a01ffdccd22b176913404027681472246621/calendar.html"
          style={{ background: "white" }}
          title="Oklahoma State ACM Calendar"
        />
      </main>
      
      <footer className="flex items-center justify-center w-full px-8 py-4 text-white bg-black ">
        <div className="flex gap-10">

          {/* These are all hyperlinks to our verious contacts and social media. Feel free to 
              change this as you want!
              - Justin moua 6/15/2025
          */}
          <a
            className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
            href="mailto:acm.cs@okstate.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Email Icon"
              width={16}
              height={16}
            />
            acm.cs@okstate.edu
          </a>

          <a
            className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
            href="https://www.instagram.com/okstate.acm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Insgagram Icon"
              width={16}
              height={16}
            />
            Instagram
          </a>

          <a
            className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
            href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Campus Link"
              width={16}
              height={16}
            />
            CampusLink
          </a>
          
          
          <a
            className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
            href="https://linktr.ee/okstate.acm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/missing_textures2.png" //ADD AN EMAIL ICON HERE
              alt="Linktr.ee icon"
              width={16}
              height={16}
            />
            Linktr.ee
          </a>

        </div>        
      </footer>

    </div>
  );
}