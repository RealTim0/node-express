const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

 const start = async () => {
  try{
    const first = await readFilePromise('./content/first.txt','utf8') 
  
  await writeFilePromise('./content/promise.txt', `this is the content ${first}`)
  console.log(first)
  }catch (error){
        console.log(error)
  }
}
start()