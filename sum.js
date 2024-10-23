// //Load HTTP module
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;



// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//     //Set the response HTTP header with HTTP status and Content type
//     res.statusCode = 200;
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     function addSum(a, b) {
//         c = a + b;
//         return c
//     }
//     // addSum(5, 6);
//     res.write(JSON.stringify(c));
//     res.end()
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


function sum(a, b) {
    return a + b;
}
module.exports = sum;
// export default sum; 
