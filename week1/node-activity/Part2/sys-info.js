// Import the built-in 'os' module
const os = require("os");

// a. Print the hostname
console.log("Hostname:", os.hostname());

// b. Display the OS platform
console.log("Operating System Platform:", os.platform());

// c. Determine available CPU cores
const cpus = os.cpus();

console.log("Number of CPU cores:", cpus.length);
console.log("CPU details:", cpus);
