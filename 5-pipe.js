var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

//var s = request('http://www.rtshaven.com').pipe(fs.createWriteStream('test.html'));
request('http://www.rtshaven.com')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('test.gzip'));

