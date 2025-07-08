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
import Image from "next/image";
// This is called from page.js from src\app.
export default function AcmHackathon() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />


      <main>
        {/* Title */}
        <div className="flex items-center justify-center text-5xl text-black py-9">
          ACM Hackathons
        </div>

        {/* Main content */}
        {/* Outer div used to center everything  */}
        <div className="flex flex-col justify-center flex-1 p-8">
          {/* This div is used to make a grid with 1 column. */}
          <div className="grid grid-cols-1 gap-10">
            {/* ROW 1 */}
            <div className="text-lg text-black text-center mx-auto max-w-2xl">
              The ACM Appathon is OSU’s Computer Science’s annual Spring hackathon—a 
              48 hour software focused  marathon. Participants can expect to win prizes, 
              opportunities to network, partaking in workshops, and gaining new skills. 
              No coding experience is required to partake in our hackathons. 

              Reach out to us if you have any questions!
            </div>

            {/* Contact Us Button */}
            <div className="flex justify-center">
              <a 
                className="inline-flex items-center px-6 py-2 text-xl text-white sm:text-2xl sm:text-4xl rounded-xl bg-orange-600/100 hover:bg-orange-800/100 transition-colors duration-200"
                href="mailto:acm.cs@okstate.edu"
              >
                Contact Us!
              </a>
            </div>

            {/* ROW 2 */}
            {/* This div is a section that displays hackathons with a grid of two columns.*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-50 text-black">
              {/* ACM Section */}
              <div className="flex justify-center items-center">
                {/* column created to seperate image from the title.*/}
                <div className="flex flex-col items-center gap-5">
                  <div className="text-center text-4xl">
                    ACM Spring 2024 Appathon
                  </div>
                  <Image 
                    src="/images/hackathons/acm-hackathons/ACM_Appathon_Spring_2025.png"
                    alt="ACM Logo"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </div>
              
              {/* Hack OKState Section */}
              <div className="flex justify-center items-center">
                {/* column created to seperate image from the title.*/}
                <div className="flex flex-col items-center gap-5">
                  <div className="text-center text-4xl">
                    ACM Spring 2024 Hackathon
                  </div>
                  <Image 
                    src="/images/hackathons/acm-hackathons/ACM_Hackathon_Spring_2024.png"
                    alt="Hack OKState Logo"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}