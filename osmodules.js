const os = require('os')
const userInfo = os.userInfo()

console.log(userInfo)


console.log(`The systems uptime is ${os.uptime()} seconds`)

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs)