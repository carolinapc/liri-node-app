var fs = require("fs");

function doWhatItSays(file){
    var content = fs.readFileSync(file, {encoding:'utf8'});
    var dataArr = content.split(",");  
    
    return dataArr;       
}

module.exports = doWhatItSays;