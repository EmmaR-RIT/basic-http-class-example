const http = require('http');
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
    console.log(req.url);

    switch (req.url) {
        case '/page2':
            responses.getPage2(req, res);
            break;
        case '/message':
            responses.getMessage(req, res);
            break;
        case '/style.css':
            responses.getCSS(req,res);
            break;
        default:
            responses.getIndex(req, res);
            break;
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});