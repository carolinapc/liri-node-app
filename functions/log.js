var fs = require("fs");

function log(data){

    fs.appendFile("log.txt", data, function(err) {

        if (err) {
            return console.log(err);
        }
    });    

}

module.exports = log;