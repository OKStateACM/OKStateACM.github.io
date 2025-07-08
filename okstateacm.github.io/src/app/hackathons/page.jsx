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
import UnderConstruction from "../components/UnderConstruction"; // This is a custom component created located in ./components/UnderConstruction.jsx. This is so we don't have to copy and paste the code for the under construction page in every page. It is similar to creating a function that you call in your code
import Image from "next/image";
// This is called from page.js from src\app.
export default function Hackathons() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />


      <main>
        {/* Title */}
        <div className="flex items-center justify-center text-5xl text-black py-9">
          Hackathons
        </div>

        {/* Main content */}
        {/* Outer div used to center everything  */}
        <div className="flex flex-col justify-center flex-1 p-8">
          {/* This div is used to make a grid with 1 column. */}
          <div className="grid grid-cols-1 gap-40">
            {/* ROW 1 */}
            <div className="text-lg text-black text-center mx-auto max-w-2xl">
              At Oklahoma State University, the ACM provides opportunities for others to grow.
              Competitions are a great way to fine-tune skills, network with peers, professionals or prospective
              employees, and showcase what you got! 
            </div>

            {/* ROW 2 */}
            {/* This div is a section that displays hackathons with a grid of two columns.*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-50 text-black">
              {/* ACM Section */}
              <div className="flex justify-center items-center">
                {/* column created to seperate image from title, description, and button. */}
                <div className="flex flex-col items-center gap-5">
                  <Image 
                    src="/images/logos/ACM at OKState Logo.png"
                    alt="ACM Logo"
                    width={400}
                    height={400}
                    priority
                  />
                  <div className="text-center text-4xl">
                    ACM Hackathons
                  </div>
                  <div className="text-center mx-auto text-xl max-w-md">
                    The ACM Appathon is OSU’s Computer Science’s 
                    annual Spring hackathon—a 48 hour software focused marathon.
                  </div>
                  <a 
                    className="flex justify-center py-1 p-5 text-xl text-white sm:py-2 sm:text-4xl rounded-xl bg-orange-600/100 hover:bg-orange-800/100" 
                    href="/hackathons/acm-hackathon"
                  >
                    Learn More!
                  </a>
                </div>
              </div>
              
              {/* Hack OKState Section */}
              <div className="flex justify-center items-center">
                {/* column created to seperate image from title, description, and button. */}
                <div className="flex flex-col items-center gap-5">
                  <Image 
                    src="/images/logos/ACM at OKState Logo.png"
                    alt="Hack OKState Logo"
                    width={400}
                    height={400}
                    priority
                  />
                  <div className="text-center text-4xl">
                    Hack OKState
                  </div>
                  <div className="text-center mx-auto text-xl max-w-md">
                    Check out our sister Hackathon: Hack OKState! It is OSU’s official collegiate hackathon—an annual 24 hour technology innovation marathon.
                  </div>
                  <a 
                    className="flex justify-center py-1 p-5 text-xl text-white sm:py-2 sm:text-4xl rounded-xl bg-orange-600/100 hover:bg-orange-800/100" 
                    href="http://hackokstate.com/"
                    target="_blank" //This is here to open the link in a new tab.
                  >
                    Learn More!
                  </a>
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