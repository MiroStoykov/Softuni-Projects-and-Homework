const http = require(`http`);
const handlers = require(`./handlers`);
const port = 3000;

console.log(handlers);

http.createServer((req, res) => {
    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(port);
