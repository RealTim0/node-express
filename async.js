const {readFile, writeFile} = require('fs')

readFile('./content/first.txt',"utf8",(err, result)  => {
    if(err){
        console.log("Ooops!! Aan error occured")
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) =>{
        if(err){
            console.log("Ooops!! Aan error occured")
            return;
        } 
        const second = result;
         writeFile('./content/async.txt',`Here is the result ${first}, ${second}`,(err, result) =>{
            if(err){
                console.log(err)
            }
            console.log(result)
         })
    } )
})