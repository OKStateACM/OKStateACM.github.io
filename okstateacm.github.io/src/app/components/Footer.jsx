/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========

*/
import Image from "next/image";

export default function Footer() {
  
  return (
    <>

      {/* Footer for mobile */}
      <footer className="bg-black border-t-4 border-orange-500 h-[500px] text-white">
          
        <div className="flex items-center h-full justify-evenly">
          <Image
            className=""
            src="/ACM at OKState Logo.png" //location of logo
            alt="Next.js logo" //alt text of file
            width={180}
            height={180}
            priority
          />

          <div className="grid grid-row-4 gap-y-6">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70"
                aria-hidden
                src="/footer hyperlinks/hyperlink.png"
                alt="Campus Link"
                width={50}
                height={50}
              />
              Campus Link
            </a>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70"
                aria-hidden
                src="/footer hyperlinks/instagram.png"
                alt="Instagram"
                width={50}
                height={50}
              />
              Instagram
            </a>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70"
                aria-hidden
                src="/footer hyperlinks/linktree.png"
                alt="Linktr.ee"
                width={50}
                height={50}
              />
              Linktr.ee
            </a>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70"
                aria-hidden
                src="/officer contacts/rounded/email.png"
                alt="acm.cs@okstate.edu"
                width={50}
                height={50}
              />
              acm.cs@okstate.edu
            </a>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://campuslink.okstate.edu/organization/association-for-computing-machinery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="p-1 bg-white rounded bg-opacity-70"
                aria-hidden
                src="/officer contacts/rounded/linkedin.png"
                alt="Linked.In"
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