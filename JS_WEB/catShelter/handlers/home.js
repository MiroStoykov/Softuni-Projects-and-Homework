const url = require(`url`);
const fs = require(`fs`);
const path = require(`path`);
const cats = require(`../data/cats`);
const breeds = require(`../data/breeds`);


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    let filePath = path.normalize(
        path.join(__dirname, `../views/home/index.html`)
    )
    if (pathname == `/` || pathname == `index.html` && req.method == `GET`) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, ["Content-Type", "text/plain"]);
                res.write(`404 NOT FOUND`)
                res.end();
                return;
            }

            res.writeHead(200, ["Content-Type", "text/HTML"]);
            res.write(data);
            res.end();
        });

    } else {
        return true;
    }
}