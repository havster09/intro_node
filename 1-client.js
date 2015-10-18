var http = require('http');

var options = {
    host:"www.havenramos.com",
    port:80,
    path:"/",
    method:"GET"
};

console.log("Going to make req");

var req = http.request(options,function(res){
   console.log(res.statusCode);
    res.pipe(process.stdout);
});

req.end();