const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const style = fs.readFileSync(`${__dirname}/../client/style.css`);

const serveFile = (req, res, content, mime) => {
    res.writeHead(200, { 'Content-Type': mime });
    res.write(content);
    res.end();
};

const sendPage = (req, res, page) => { serveFile(req, res, page, 'text/html'); };

const getMessage = (req, res) => { serveFile(req, res, 'Hello, World!', 'text/plain'); };

const getIndex = (req, res) => { sendPage(req, res, index); };

const getPage2 = (req, res) => { sendPage(req, res, page2); };

const getCSS = (req, res) => { serveFile(req, res, style, 'text/css'); };

module.exports = { getIndex, getPage2, getMessage, getCSS };