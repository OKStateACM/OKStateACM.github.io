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

export default function OfficerCard({ officer_title, officer_name, officer_headshot }) {
    return (
        // for centering
        <div className="flex flex-col items-center justify-center ">
            {/* Officer's Title */}
            <div className="text-center">
                {officer_title}
            </div>

            {/* Spacing put between officer title and officer headshot image */}
            <br />
            <br />
            
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
                {/* rotates the shape and adds orange glow */}
                <div className="absolute inset-0 rotate-45 rounded-[20%] overflow-hidden shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] bg-white">
                    {/* Rotates image (since the shape -45deg was rotated 45deg) and zooms in on image*/}
                    <Image
                        src={officer_headshot || "/officers/silhouette.png"}
                        alt="Next.js logo"
                        width={200}
                        height={200}
                        priority
                        className="object-cover w-full h-full scale-125 -rotate-45 bg-white"
                    />
                </div>
            </div>
            <br />
            <br />
            
            {/* Officer's Name */}
            <div className="">
                {officer_name}
            </div>
            <br />
            
            {/* Officer's Socials */}
            <div className="flex items-center justify-between grid-cols-4 gap-5 text-black">
                <a
                    className="flex items-center gap-2hover:underline hover:underline-offset-4"
                    // href="https://linktr.ee/okstate.acm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/officer contacts/rounded/linkedin.png" 
                        alt="Linktr.ee icon"
                        width={50}
                        height={50}
                    />
                </a>
                
                <a
                    className="flex items-center gap-2hover:underline hover:underline-offset-4"
                    // href="https://linktr.ee/okstate.acm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/officer contacts/rounded/email.png"
                        alt="Linktr.ee icon"
                        width={50}
                        height={50}
                    />
                </a>

                <a
                    className="flex items-center gap-2hover:underline hover:underline-offset-4"
                    // href="https://linktr.ee/okstate.acm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/officer contacts/rounded/github.png"
                        alt="Linktr.ee icon"
                        width={50}
                        height={50}
                    />
                </a>
            </div>
        </div>
    );
}