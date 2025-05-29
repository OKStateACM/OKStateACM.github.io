//* AUTHORS: Justin Moua
//*
//*
//*
//* NOTES:
//*     Justin Moua (5/28/2025) - the calendar is currently linked to a calendar I created for the 2024-2025 ACM executive team under my OSU account.
//*                               A new one will need to be created. Preferably, one should be made through the OSU email. However, I am not sure if
//*                               this would work. When I created the link for my the 2024-2025 ACM calendar, it only allowed me to show times when
//*                               I was busy instead of showing the actual title of the events. I think this meant that the events I had in place on the
//*                               calendar itself were displayed only as "busy." Do note that the link may no longer work in the future (which means you do not)
//*                               see a calendar and instead are met with an error. You should be able to use any calendar for this page
//*                               so long as you have created a shareable link.
//*                               In my case, shared the link for the 2024-2025 ACM calendar (particularly the HTML version)
//*
//*
//*

// This is called from page.js from src\app.
export default function Calendar() {
  return (
    //in-line text utilizes tailwind. Please search up the following in-line commands with respect to the tailwind documentation.
    <div className="flex flex-col h-screen p-8 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <a
          className="rounded-full py-3 px-6 border border-solid bg-black"
          href="/"
          target="_self"
        >
          Go Back (Placeholder for now. Will later consist of other home menu buttons)
        </a>
      </header>
      <main className="flex flex-1 justify-center items-center w-full">
        {/* Use an iframe to show the shared calendar. */}
        <iframe 
          className="w-full h-full rounded-md border"
          src="https://outlook.office365.com/owa/calendar/e28ac9a07dd04bb38253af01e2a9692e@okstate.edu/9be922f1620d49a0a01ffdccd22b176913404027681472246621/calendar.html"
          style={{ background: "white" }}
          title="Oklahoma State ACM Calendar"
        />
      </main>
    </div>
  );
}