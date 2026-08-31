const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`)

const onRequest = (req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(index);
    res.end();
};

http.createServer(onRequest).listen(port, ()=>{
    console.log(`Listening on 127.0.0.1:${port}`);
});
