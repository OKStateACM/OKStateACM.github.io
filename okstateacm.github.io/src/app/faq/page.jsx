/*
AUTHOR(S): Justin Moua

=====
Notes
=====
  - This page conists of frequently asked questions (FAQ) about the ACM chapter at Oklahoma State University.
    It uses the following YouTube tutorial as a reference for creating the Accordion component.
      - https://youtu.be/oOXExNA8A48?si=N6MM4L4VjxiIC2sE
=========
Resources
=========
  - Placeholder Text
*/
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";


export default function Faq() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full text-center text-5xl text-black py-9">
        Frequently Asked Questions
      </div>
      <main className="flex flex-col text-black justify-center flex-1 p-8">
      {/* <div className="flex justify-center items-center grid grid-cols-1 border border-black">
      </div> */}

        <div className="p-4 bg-gray-200 rounded-lg">
          <Accordion 
            title='How do I contact the ACM chapter at Oklahoma State University?' 
            answer={
              <>
                You can contact us at {' '}
                <a
                  href="mailto:acm.cs@okstate.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  acm.cs@okstate.edu
                </a>
                {' '} or through our Discord server that can be found on our {''}
                <a
                  href="https://linktr.ee/okstate.acm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800">
                   linktr.ee
                  </a>
                  .
              </>
            }
          />
          <Accordion 
            title='Do I need to be a Computer Science major to join and participate in events?' 
            answer='No. Although our participants primarily consist of Computer Science majors, any major is welcome!'
          />
          <Accordion 
            title="How can I join, participate, or stay updated on ACM events?" 
            answer={
              <>
                You can do so by going to our{' '}
                <a
                  href="https://linktr.ee/okstate.acm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  linktr.ee
                </a>
                . There you can follow our social media accounts, join our Discord server, and check our Campus Link page to stay up to date.
              </>
            }
          />
          <Accordion 
            title='Can I attend ACM meetings even if I am not a member?' 
            answer='Yes. Participants are not required to be members to attend meetings.'
          />
          <Accordion 
            title='Are there opportunities for networking through the ACM?' 
            answer='Yes. The ACM provides numerous networking opportunities with professionals in the field through events, workshops, and guest speaker sessions.'
          />
          <Accordion 
            title='Does the ACM collaborate with other student organizations?' 
            answer='Yes. The ACM often collaborates with other student organizations to host joint events, workshops, and hackathons, 
                    fostering a sense of community and collaboration among students.'
          />
          <Accordion 
            title='Is there a fee to join the ACM?' 
            answer='No. Membership in the ACM is free for all students at Oklahoma State University.'
          />
          <Accordion 
            title='Do I need to know how to code to participate?' 
            answer='No. While coding skills are beneficial, they are not required to participate in ACM events.
                    The ACM welcomes and encourages students of all skill levels, including those who are new to coding.'
          />
          <Accordion 
            title='How can I join the ACM executive team?' 
            answer='Elections are held during Spring. However, spots may open up throughout the semester. 
                    If you are interested in running for a position, 
                    please reach out to the current executive team for more information.'
          />
          <Accordion 
            title='What campus is the ACM chapter located?' 
            answer='We are located at Oklahoma State University in Stillwater, Oklahoma.'
          />
          <Accordion 
            title='Can I be involved with the ACM despite being a Tulsa/Online student?' 
            answer='Yes. The ACM welcomes all students, regardless of their campus location.'
          />
        </div>

      </main>
      <Footer />
    </div>
  );
}