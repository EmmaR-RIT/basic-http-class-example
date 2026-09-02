const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const sendPage = (req, res, page) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
}

const getMessage = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, World!');
    res.end();
}

const getIndex = (req, res) => {
    sendPage(req, res, index);
};

const getPage2 = (req, res) => {
    sendPage(req, res, page2);
}

module.exports = { getIndex, getPage2, getMessage };