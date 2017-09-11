var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello nodejs http\n');
}).listen(8081, '127.0.0.1');
console.log('web 服务器已启动，请打开浏览器访问 http://127.0.0.1:8081/');