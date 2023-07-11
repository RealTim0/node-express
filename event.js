const  event = require('events')

const customEvent = new event()

customEvent.on('response',() => {
    console.log("gdhswjsju")
})

customEvent.emit('response') 