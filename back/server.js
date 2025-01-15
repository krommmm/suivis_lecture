require("dotenv").config();
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(val)) return val;
    if (val >= 0) return port;
}

const port = normalizePort(process.env.PORT);

app.set("port",port);


server.on('listening', () => {
    console.log(`Server is listening on ${server.address().server===undefined ? "localhost" : server.address().server}:${server.address().port}`);
});

server.on('error', (err) => {
    if (err.syscall !== "listen") {
        throw err;
    }
    switch (err.code) {
        case 'EACCES':
            console.log("Port requiers elevated privileges");
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.log("Port is already in use");
            process.exit(1);
            break;

        default: throw err;
    }
});

server.listen(port);