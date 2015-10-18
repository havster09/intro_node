
var Resource = require('./resource');
var r = new Resource(7);

r.on('start',function(){
    console.log(" status: started");
});

r.on('data',function(d){
    console.log(" data: "+d);
});

r.on('end',function(){
    console.log(" status: finished");
});