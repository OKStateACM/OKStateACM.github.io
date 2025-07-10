/*
AUTHOR(S): Justin Moua

=====
Notes
=====
  - Placeholder text
=========
Resources
=========
  - Placeholder text
*/
import Image from "next/image";

export default function Footer() {
  
  return (
    <>

      <footer className="bg-black border-t-4 border-orange-500 h-[250px] md:h-[500px] text-white">
          
        {/* ACM LOGO FOR FOOTER */}
        <div className="flex items-center h-full justify-evenly">
          <Image
            className="w-24 h-24 sm:w-100 sm:h-100"
            src="/images/logos/ACM at OKState Logo.png" //location of logo
            alt="The ACM at Oklahoma State University Logo" 
            width={400}
            height={400}
            priority
          />

          {/* CAMPUS LINK HYPERLINK */}
          <div className="grid grid-row-4 gap-y-3 md:gap-y-6">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70 w-8 h-8 md:w-[50px] md:h-[50px]"
                aria-hidden
                src="/footer hyperlinks/hyperlink.png"
                alt="The campus link logo"
                width={50}
                height={50}
              />
              Campus Link
            </a>

            {/* INSTAGRAM HYPERLINK */}
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/okstate.acm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70 w-8 h-8 md:w-[50px] md:h-[50px]"
                aria-hidden
                src="/footer hyperlinks/instagram.png"
                alt="The Instagram logo"
                width={50}
                height={50}
              />
              Instagram
            </a>

            {/* LINKTR.EE HYPERLINK */}
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://linktr.ee/okstate.acm?fbclid=PAZXh0bgNhZW0CMTEAAafi_S69r0crNEs8kHcc09PTqCjJ9BoSodFCcUp69B1sO3YOJfcf_3vWXXVUkA_aem_2JWC0f2c85g8lwTgjDKTQg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70 w-8 h-8 md:w-[50px] md:h-[50px]"
                aria-hidden
                src="/footer hyperlinks/linktree.png"
                alt="The Linktr.ee logo"
                width={50}
                height={50}
              />
              Linktr.ee
            </a>

            {/* ACM EMAIL */}
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="mailto:acm.cs@okstate.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70 w-8 h-8 md:w-[50px] md:h-[50px]"
                aria-hidden
                src="/officer contacts/rounded/email.png"
                alt="The acm.cs@okstate.edu logo"
                width={50}
                height={50}
              />
              acm.cs@okstate.edu
            </a>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/company/okstate-acm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70 w-8 h-8 md:w-[50px] md:h-[50px]"
                aria-hidden
                src="/officer contacts/rounded/linkedin.png"
                alt="The Linked.In logo"
                width={50}
                height={50}
              />
              Linked.In
            </a>
          </div>
            
        </div>

      </footer>

    </>
  );
}