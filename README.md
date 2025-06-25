Welcome! This is the GitHub repository for Oklahoma State University's Association for Computing Machinery chapter's website. 
</br>
This was last edited by Justin Moua on 6/21/2025.

# Pre-Requisites (Work in Progress)
This project uses the Next.js React framework. You will want to ensure you have [Node.js 18.18][Node.js Link] or later.

Once you have cloned the repository:
1. Open up your device's terminal.
2. Go to the \okstateacm.github.io folder within this repository.
3. Type ```npm install next``` into the terminal.


# How do I run this project?
1. Open up your device's terminal.
2. Go to the \okstateacm.github.io folder within this repository.
3. Type ```npm run dev``` into the terminal. You should see a localhost and network http link. Click on one of them, copy and paste or type one of them into a browser.

# How do I run this on my mobile device?
1. Follow the steps for "How do I run this project?" located above.
2. Ensure the device the project is running on AND your mobile device are conencted onto the same network.
3. Open a webbrowser on your mobile device.
4. In the webbrowser, type in the the IP address followed by a colon and the port number you see after running the ```npm run dev``` command.
    - Example: 
        - Say our IP Address is 123.456.789.012
        - Say the port is 3000 or 5500.
        - We would type in 123.456.789.012:3000 or 123.456.789.012:5500.

# What Files Do I Mainly Work on?
Below are a list of files and explanations of what they are.

<pre lang="md">
okstateacm.github.io
|----📁Public (This folder has images stored in it.)
|       |----📁officer contacts (This folder has images related to social contacts.)
|       |----📁officers (This folder contains images of ACM@OkState board members.)
|
|----📁src
|       |----📁calendar
|       |       |----📄page.jsx (This is the file used to render the calendar page.)
|       |
|       |----📁components
|       |       |----📄Header.jsx (This is file was created as a reusable component to render the website's header. 
|       |       |                   Instead of copy and pasting the same header code into multiple pages.)
|       |       |----📄OfficerCard.jsx (This was created as a reusable component to render "cards" of each officer for the officer page.)
|       |
|       |----📁officers
|       |       |📄----2024-2025 board (This is a folder that consists of files that renders information about the FORMER executive boards.)
|       |       |📄----page.jsx (This is the file that renders the page of information about the CURRENT executive board.)
|       |
|       |----📄globals.css (This is a global css file that you can edit to make universal changes throughout the website.)
|       |----📄page.jsx (This is where the MAIN HOMEPAGE is located.)
|
|----📄next.config.mjs (This is a file that contains custom configuration settings for next.js.)
</pre>

# Some Useful Resources on Git
* [Git Branching - Basic Branching and Merging][Git Branching Link]

[Node.js Link]: https://nodejs.org/en
[Git Branching Link]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging