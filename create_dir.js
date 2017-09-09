var fs = require("fs");

// create a new dir
// 
console.log("Creating '/tmp/test1'")
fs.mkdir('/tmp/test1', function(err){
    if(err){
        return console.error(err);
    }
    console.log("Dir '/tmp/test1 created successfully");
});





