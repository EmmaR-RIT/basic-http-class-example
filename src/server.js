const http = require('http');
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
    console.log(req.url);

    if (req.url === '/page2') {
        responses.getPage2(req, res);
    }
    else {
        responses.getIndex(req, res);
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});