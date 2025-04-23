const os = require('os')
 const  user = os.userInfo()
 console.log(user)

 // method return system upturn in sec
 console.log(`The system uptime time is ${os.uptime()} sec`)
 const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

 }
 console.log(currentOs);
