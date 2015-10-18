var maxTime = 1000;

var evenDoubler = function(v,callback){
    var time = Math.round(Math.random()*maxTime);
    setTimeout(function(){
        if(v % 2 == 0){
            var results = v *2;
            callback(undefined,results,time);
        }
        else{
            callback("Not even",undefined,time);
        }
    },Math.random()*maxTime);

};

var handleResults = function(err,results,time){
    if(err){
        console.log("ERROR:"+err.message);
    }
    else{
        console.log("The results are:"+results+"("+time+"ms)");
    }
};

evenDoubler(2,handleResults);
evenDoubler(3,handleResults);
evenDoubler(10,handleResults);

console.log("-------");