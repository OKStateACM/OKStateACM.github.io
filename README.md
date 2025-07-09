# 👋 Welcome
Welcome! This is the GitHub repository for Oklahoma State University's (OSU) Association for Computing Machinery (ACM) chapter's website.

<br/>
<br/>
<br/>

# 💼 Project Overview

## ❓ What is this project?
This is a web-application that contains information about OSU's ACM chapter. It uses the Next.js React framework.

## ❓ Who is this for?
This website is intended for prospective and current OSU students, alumni, and employers looking for information about OSU’s ACM chapter.


<br/>
<br/>
<br/>

# 🔨 Setup Instructions
At the time of writing, the setup instruction are targeted towards Windows 10, Windows 11, and the Ubuntu-based Linux distributons.


## 📦 Dependencies/Pre-Requisites
### Git and GitHub  
This project will require you to use Git and GitHub. If you do not have Git installed: 
1. Install Git for from the official [Git website][Git Download Link].

#### Connecting Git to GitHub  
You will need to connect Git to your GitHub account in order to utilize Git. This is done by setting your username and email in git. Your username would be the username of your GitHub account. Your email would be the email associated with your GitHub account. To set your git username and email: 
1. Go to the [GitHub documentation][Connecting Git to GitHub] to set your git username.
2. Go to the [GitHub documentation][Connecting Email to GitHub] to set your email.

### Node.js
This project runs on **Node.js version 18.18** or later. Make sure you have the correct version installed before proceeding. To install Node.js 18.18 or a newer version:
1. Go to the official [Node.js website][Node.js Download Link] and download Node.js 18.18 or later.

<br/>

## ⚙️ Configuring Project
To get the project on your computer and set it up:
1. Clone this repository. You can find instructions on how to clone a repository from the [GitHub documentation][How to clone a repo]. 
2. Open your terminal.
3. Navigate to the ```OKStateACM.github.io``` directory. Do this by typing ```cd ./OKStateACM.github.io/``` in your terminal followed by pressing the ```enter``` key.
4. Type ```npm install nextjs``` into the terminal.

<br/>

## 💻 Running the Project (Locally)
To run your project and see changes you make: 
1. Open your terminal.
2. Navigate to the ```OKStateACM.github.io``` directory. Do this by typing ```cd ./OKStateACM.github.io/``` in your terminal followed by pressing the ```enter``` key.
3. Start the development server by typing ```npm run dev``` followed by pressing the ```enter``` key.
4.  After running the command, you’ll see a local and network URL (e.g., ```http://localhost:3000```). Open one of them in your browser to view the site.

<br/>

## 📱 Running on a Mobile Device (Optional)
To view the site from your mobile device:
1. Follow the steps in the “How to Run the Project” section above.
2. Ensure the device running the development server and your mobile device are on the same Wi-Fi/network.
3. On your mobile browser, enter the IP address and port shown in the terminal after running npm run dev.
    - Example: 
        - If your terminal shows the following:

                Local:   http://localhost:3000  
                Network: http://123.456.789.012:3000
        - Then type this into your phone's browser:
                
                123.456.789.012:3000
⚠️ Note: If you are having difficulties with connecting, you may need to adjust some firewall and port settings.
    
<br/>
<br/>
<br/>

# 📁 Key Files & Directories (Work in Progress)
Below are a list of files and explanations of what they are.

<pre lang="md">
OKStateACM.github.io
|----📁.github
|       |----📄nextjs.yml (This file is used to deploy this project to Github.io/GitHub pages.)
|
|----📁custom-images (This folder consists of images that are worked on in Photoshop/GIMP. 
|                     It is not meant to be used as a folder to refer to in code. The "public" 
|                     folder serves that purpose.)
|
|----📁public (This folder has images stored in it.)
|
|----📁src
|       |----📁about
|       |       |----📄page.jsx (This is the file used to render the about page.)
|       |
|       |----📁calendar
|       |       |----📄page.jsx (This is the file used to render the calendar page.)
|       |
|       |----📁components
|       |       |----📄Accordion.jsx (This file was created as a reuasable component to render an accordion in the FAQ page.)
|       |       |----📄Footer.jsx (This file was created as a reuasable component to render the website's foter.)
|       |       |----📄Header.jsx (This file was created as a reusable component to render the website's header.)
|       |       |----📄OfficerCard.jsx (This was created as a reusable component to render "cards" of each officer for the officer page.)
|       |       |----📄UnderConstruction.jsx (This was created as a reuasable component that can be placed when a page or section 
|       |       |                             of a page is under construction.)
|       |       |----📚README.md (This README file consists of useful information about the components including parameters they take in.)
|       |
|       |----📁faq
|       |       |----📄page.jsx (This is the file used to render the FAQ page)
|       |
|       |----📁hackathons
|       |       |
|       |       |----📁acm-hackathons
|       |       |       |----📄page.jsx (This is the file used to render the page that consists of the ACM's annual Spring hackathon.)
|       |       |       
|       |       |----📄page.jsx (This is the file used to render the page that consists of hackathons the ACM 
|       |                        is involved with such as our annual Spring hackathon and Hack OKState.)
|       |       
|       |----📁officers
|       |       |----📁2022-2023 board
|       |       |       |----📄page.jsx (This page renders a former executive board.)
|       |       |       |
|       |       |----📁2023-2024 board
|       |       |       |----📄page.jsx (This page renders a former executive board.)
|       |       |       |
|       |       |----📁2024-2025 board
|       |       |       |----📄page.jsx (This page renders a former executive board.)
|       |       |       |
|       |       |----📁previous-boards 
|       |       |       |----📄page.jsx (This page renders information about the FORMER executive boards.)
|       |       |
|       |       |----📄page.jsx (This is the file that renders the page of information about the CURRENT executive board.)
|       |       |----📚README.md (This README consists of a description of what the officers page is about and how it is structured.)
|       |
|       |----📄globals.css (This is a global css file that you can edit to make universal changes throughout the website.)
|       |----📄page.jsx (This is where the MAIN HOMEPAGE is located.)
|
|----📄next.config.mjs (This is a file that contains custom configuration settings for next.js.)
</pre>

# Deploying to Github.io/GitHub Pages
This project was deployed to Github.io by going to the settings of this repository, going to the "Code and automation" section and clicking on "Pages." The "Source" was set to "GitHub Actions" where a nextjs.yml file was suggested by Github to use. Deploying webapps will differ as time goes on given that the foundation of a webapp may change. 

<br/>
<br/>
<br/>



# 📚 Useful Resources
* [How to clone a GitHub repository][How to clone a repo]
* [Git Branching - Basic Branching and Merging][Git Branching Link]
* [Next.JS course][NextJS course]
* [Tailwind cheatsheet][Tailwind cheatsheet]
* [Static vs Dynamic websites][Static vs Dynamic]
* [How to test a local website on your phone][Testing on phone]
* [What is Tailwind?][What is tailwind]

[Node.js Download Link]: https://nodejs.org/en/download
[Git Download Link]: https://git-scm.com/downloads
[Connecting Git to GitHub]: https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git
[Connecting Email to GitHub]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address
[How to clone a repo]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[NextJS course]: https://nextjs.org/learn
[Tailwind cheatsheet]:https://nerdcave.com/tailwind-cheat-sheet
[Static vs Dynamic]:https://www.geeksforgeeks.org/websites-apps/static-vs-dynamic-website/
[Git Branching Link]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
[Testing on phone]: https://youtu.be/uRYHX4EwYYA?si=tfUiiabqzuqVflxs
[What is tailwind]: https://tailwindcss.com/docs/styling-with-utility-classes
