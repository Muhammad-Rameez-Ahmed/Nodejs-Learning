const os =require("os");


console.log(os.arch());

console.log(os.hostname())
console.log(os.platform())
console.log(os.type())
console.log(os.version());


const freememory=os.freemem()
console.log(`${freememory / 1024 / 1024 / 1024 }`);

const totalmemory=os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024 }`);


console.log(os.cpus());
console.log(os.homedir());
console.log(os.networkInterfaces())
