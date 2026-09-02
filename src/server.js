const http = require('http');
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
    console.log(req.url);
    responses.getIndex(req, res);
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});