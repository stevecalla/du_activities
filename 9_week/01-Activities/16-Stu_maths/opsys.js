const os = require('os');
 
const local = {  
  'OS Type': os.type(),
  'OS Arch': os.arch(),
  'OS Network': os.networkInterfaces(),
  'OS Host Name': os.hostname(),
  'OS Uptime': os.uptime(),
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}

console.log(local)