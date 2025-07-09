/*
AUTHOR(S): Justin Moua

Notes:
  - Placeholder Text
Resources:
  - Placeholder Text
*/
import Header from "../../components/Header";  // This is a custom component created located in ../../components/Header.jsx. This is so we don't have to copy and paste the code for the header in every page.
import Footer from "../../components/Footer";
// This is called from page.js from src\app\officers\page.jsx.
export default function PreviousBoards() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex items-center justify-center flex-1">
        <div className="flex flex-col items-center">
          <div className="mb-6 text-5xl font-bold text-center text-black">
            Former Executive Boards
          </div>
          <div className="grid grid-rows-4 text-black gap-y-3 md:gap-y-6">
            <a className="hover:bg-orange-300 rounded-sm p-1 "href="/officers">2025-2026 Executive Board</a>
            <a className="hover:bg-orange-300 rounded-sm p-1 "href="/officers/2024-2025-board">2024-2025 Executive Board</a>
            <a className="hover:bg-orange-300 rounded-sm p-1 "href="/officers/2023-2024-board">2023-2024 Executive Board</a>
            <a className="hover:bg-orange-300 rounded-sm p-1 "href="/officers/2022-2023-board">2022-2023 Executive Board</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}