//this is the entry point and is used to start the server and connect to the database
const app = require('./src/app')
const http = require('http')

const server = http.createServer(app);
//aisa isiliye kia bcz express se aage chalke problem ho sakti hai interact karne m 
//http se jo server create karte hai vo raw form m hota hai so ye bahut sare packages se interact karskta hai 
// for eg socket io http server se interact karleta hai pr express se interact karne m problem hoti h 

server.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
    
})