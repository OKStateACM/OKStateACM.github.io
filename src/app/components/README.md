# About the components folder

This folder stores reusable components. You can think of it like creating functions to be reused throughout a program. Some of these components actually have their own parameters that you can pass into. Below are the available components and any parameters that can have values passed through them (if any). Please update this if you add more components.

Accordion
* Accordion({title, answer})
    * This component takes in a title and answer value. The accordion is used to render new questions and answers in the FAQ page. Just call this component and pass in a title and an answer to render a new question in the FAQ. 

Footer
* Footer()
    * This component renders the footer for the website. You usually will want to call this on every page that is created.

Header
* Header()
    * This component renders the header  for the website. You usually will want to call this on every page that is created.

OfficerCard
* OfficerCard({ officer_title, officer_name, officer_headshot, officer_linkedin, officer_email, officer_github, officer_website})
    * This component takes in multiple values such as an officer's title (President, Vice President, etc.), full name, a filepath to their headshot, linked.in, email, github, and website. This is used to render officer's information in the officers page. Note that this component has been designed to handle missing parameters. For example, if an image is not passed through then a silhouette of a person is used as the officer's headshot. If the officer does not provide any social media handles, email, or website, then those hyperlinks do not appear for the officer.