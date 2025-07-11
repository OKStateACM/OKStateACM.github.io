/*
AUTHOR(S): Justin Moua

=====
Notes
=====
    - This component is used to create an officer card that can be used in the Officers page.
      It displays the officer's name, title, headshot, and social media links.
      Code has been created to account for parameters that are not passed. 
      You'll want to call this component in the Officers page and pass the parameters to it.

=========
Resources
=========
    - Placeholder text
*/
import Image from "next/image";

export default function OfficerCard({ officer_title, officer_name, officer_headshot, officer_linkedin, officer_email, officer_github, officer_website}) {
    return (
        // Centers the officer card and makes it a flex column
        <div className="flex flex-col items-center justify-center ">

            {/* Officer's Title */}
            <div className="text-center">
                {officer_title}
            </div>

            {/* Spacing put between officer title and officer headshot image */}
            <br />
            <br />
            
            {/* Officer's Headshot */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
                {/* rotates the shape and adds orange glow */}
                <div className="absolute inset-0 rotate-45 rounded-[20%] overflow-hidden shadow-[0_0_20px_8px_rgba(255,165,0,0.6)] bg-white">
                    {/* 
                        Rotates image (since the shape -45deg was rotated 45deg) and zooms in on image
                        Officer's headshot gets passed here. If none is provided, it defaults to a silhouette image.
                    */}
                    <Image
                        src={officer_headshot || "/images/officers/silhouette.png"}
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
                {/* LINKEDIN HYPERLINK */}
                {officer_linkedin && (
                    <a
                        className="flex items-center gap-2hover:underline hover:underline-offset-4"
                        href={officer_linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/images/officers/officer contacts/rounded/linkedin.png" 
                            alt="LinkedIn icon"
                            width={50}
                            height={50}
                        />
                    </a>
                )}

                {/* EMAIL HYPERLINK */}
                {officer_email && (
                    <a
                        className="flex items-center gap-2hover:underline hover:underline-offset-4"
                        href={"mailto:" + officer_email}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/images/officers/officer contacts/rounded/email.png"
                            alt="Email icon"
                            width={50}
                            height={50}
                        />
                    </a>
                )}

                {/* GITHUB HYPERLINK */}
                {officer_github && (
                    <a
                        className="flex items-center gap-2hover:underline hover:underline-offset-4"
                        href={officer_github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/images/officers/officer contacts/rounded/github.png"
                            alt="GitHub icon"
                            width={50}
                            height={50}
                        />
                    </a>
                )}

                {/* WEBSITE HYPERLINK */}
                {officer_website && (
                    <a
                        className="flex items-center gap-2hover:underline hover:underline-offset-4"
                        href={officer_website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/images/officers/officer contacts/rounded/website.png"
                            alt="Website icon"
                            width={50}
                            height={50}
                        />
                    </a>
                )}
            </div>
        </div>
    );
}