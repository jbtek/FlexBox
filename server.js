let http = require('http');
let url = require('url');
let fs  =  require('fs');
let path = require('path');

let mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer((request, response)=>{
    console.log('reqest::', request);
    var pathname = url.parse(request.url).pathname;
    console.log('pathname::', pathname)
let filename;
if(pathname === "/"){
    filename = "index.html";
}
else{
    filename = path.join(process.cwd(), pathname);
}
console.log('filename::', filename);
try{
    fs.accessSync(filename, fs.F_OK);
    let fileStream = fs.createReadStream(filename);
    let mimeType = mimeTypes[path.extname(filename).split(".")[1]];
    response.writeHead(200, {'Content-Type':mimeType});
    fileStream.pipe(response);
}
catch(e) {
    console.log('File not exists: ' + filename);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not Found\n');
    response.end();
    return;
}
return;
}).listen(5000);