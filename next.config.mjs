/*
AUTHOR(S): Justin Moua

Notes:
  - 6/21/2025 Justin Moua — This file has been modified from the default code because Next.JS will be implementing an update in the future regarding the following
      " ⚠ Blocked cross-origin request from 000.000.000.000 (I didn't want to include my IP address so I added a fake one there) 
        to /_next/* resource. To allow this, configure "allowedDevOrigins" in next.config
        Read more: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins"

Resources:
  - Placeholder Text
*/

import os from 'os';
// Returns an object containing network interfaces that have been assigned a network address.

/** Get local IP addresses (e.g., for LAN/dev tunnels */
function getLocalIPs() {
  const interfaces = os.networkInterfaces();
  const ips = [];


  //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
  //  Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  //
  //Object.keys(interfaces) returns ["Wi-Fi", "Loopback Pseudo-Interface 1", "vEthernet (Default Switch)"]
  //  - Each of these have their own information within it. interfaces["wi-fi"] for example showcases 
  for (const name of Object.keys(interfaces)) {
    
    //Remove the two comments below to see how this for loop works!
    // console.log("Current name: " + name);
    // console.log("interfaces[\"" + name + "\"] is: ", interfaces[name]);

    for (const iface of interfaces[name] || []) {
      if (
        iface.family === 'IPv4' &&
        !iface.internal &&
        iface.address !== '127.0.0.1' //Skip loopback. It's not an external usable ip.
      ) {
        ips.push(iface.address);
      }
    }
  }

  return ips;
}

const localIPs = getLocalIPs();

/** @type {import('next').NextConfig} */
const nextConfig = { // Justin Moua 6/21/2025 Note
                     // This is here because I got the following when testing this program/site on my phone.
                     // " ⚠ Blocked cross-origin request from 000.000.000.000 (I didn't want to include my IP address so I added a fake one there) 
                     //   to /_next/* resource. To allow this, configure "allowedDevOrigins" in next.config
                     //   Read more: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins"
                     //   It states that Next.Js will "block cross-origin requests during development ... by default in a future major version of Next.js.
                     //   So, this was added here because of that.
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    ...localIPs, //adds the local IP addresses for local dev tests. NO NEED TO HARDCODE YOUR IP. Please do not do that for security purposes!
    '*.local-origin.dev',
    'local-origin.dev',
  ],
};

export default nextConfig;



