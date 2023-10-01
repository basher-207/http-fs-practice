const http = require('http');
const url = require('url');
const calcMod = require('./calcModule');
const fsMod = require('./fsModule');


const app = http.createServer(async function (req, res){
    let result;
    let status = 400;
    const contentType = {'Content-Type': 'text/html'};

    const {pathname, query} = url.parse(req.url, true);
    switch (pathname) {
        case '/calc':
            const calcObj = calcMod(query.operation, query.a, query.b);
            result = calcObj.result;
            status = calcObj.status;
            break;
        case '/fs':
            const fsObj = await fsMod(query.operation, query.filename, query.text);
            result = fsObj.result;
            status = fsObj.status;
            break;
        default:
            status = 400;
            result = 'Operation unknown';
            break;
    }
    
    res.writeHead(status, contentType);
    res.write(String(result));
    res.end();
});

module.exports = app;