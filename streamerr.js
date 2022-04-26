let http = require('http');
let fs = require('fs');
let path = require('path');

let handleRequest = (req, res) => {
    if(req.url == '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./page.html', null, function (error, data) {
            if (error) {
                print404(res)
            } else {
                res.write(data);
            }
            res.end();
        });
    // } else if(req.url.match("\.css$")){
    //     var cssPath = path.join(__dirname, 'style', req.url);
    //     var fileStream = fs.createReadStream(cssPath, "UTF-8");
    //     res.writeHead(200, {"Content-Type": "text/css"});
    //     fileStream.pipe(res);
    //
    // } else if(req.url.match("\.js")){
    //     var jsPath = path.join(__dirname, 'js', req.url);
    //     var fileStream = fs.createReadStream(jsPath, "UTF-8");
    //     res.writeHead(200, {"Content-Type": "text/js"});
    //     fileStream.pipe(res);

    } else {
        console.log('404 Resource not found')
        print404(req.url, res)
    }
};

function print404(url, res){
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>File "'+url+'" not found</p></body></html>');
    res.end();
}

http.createServer(handleRequest).listen(8000);

console.log('Node.js web server at port 8000 is running..')



// var http = require('http'); // Import Node.js core module
// var server = http.createServer(function (req, res) {   //create web server
//     if (req.url == '/') { //check the URL of the current request
//
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//
//         // set response content
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
//
//     }
//     else if (req.url == "/student") {
//     }
//     else
//         res.end('Invalid Request!');
// });
//
// server.listen(5000); //6 - listen for any incoming requests
