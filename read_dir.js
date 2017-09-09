var fs = require("fs");


console.log("Reading all file/folders in a dir /tmp");
fs.readdir('/tmp', function(err, files){
    if (err){
        return console.error(err);
    }
    files.forEach(function (file){
        console.log(file);
    });
});