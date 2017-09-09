var fs = require("fs");


fs.writeFile('./test.txt', 'Writing this text now', function (err){
    if (err){
        return console.error(err);
    }

    console.log("Sucessful write")
});

fs.readFile('./test.txt', function(err, data){
    if (err){
        return console.error(err)
    }
    console.log('Write');
    console.log(data.toString());
})



fs.appendFile('./test.txt','\nHa ha:)', function(err){
    if (err){
        return console.error(err);
    }
    console.log("Completed append operation");
});

fs.readFile('./test.txt', function(err, data2){
    if (err){
        return console.error(err)
    }
    console.log('Append');
    console.log(data2.toString());
})