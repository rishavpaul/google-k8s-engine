const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = 8080;

const handler = function (request, response) {
    if (request.url === '/favicon.ico') {
        // Serve the favicon.ico file
        const iconPath = path.join(__dirname, 'favicon.ico');
        fs.readFile(iconPath, (err, data) => {
            if (err) {
                response.writeHead(500);
                response.end("Error loading favicon.ico");
                return;
            }
            response.writeHead(200, { 'Content-Type': 'image/x-icon' });
            response.end(data);
        });
        return;
    }

    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You've hit " + os.hostname() + "\n");
};

const svr = http.createServer(handler);
svr.listen(PORT);

console.log("Server starting on port " + PORT);
