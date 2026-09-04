const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const style = fs.readFileSync(`${__dirname}/../client/styles.css`);

const serveFile = (req, res, content, mime) => {
    res.writeHead(200, { 'Content-Type': mime });
    res.write(content);
    res.end();
};

const getMessage = (req, res) => serveFile(req, res, 'Hello, World!', 'text/plain');

const getIndex = (req, res) => serveFile(req, res, index, 'text/html');

const getPage2 = (req, res) => serveFile(req, res, page2, 'text/html');

const getCSS = (req, res) => serveFile(req, res, style, 'text/css');

module.exports = { getIndex, getPage2, getMessage, getCSS };