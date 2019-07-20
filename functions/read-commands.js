var fs = require("fs");

function doWhatItSays(file){
    var dataArr = [];
    try {
        var content = fs.readFileSync(file, {encoding:'utf8'});
        dataArr = content.split(",");  
            
    } catch (error) {
        console.log(error);
    }
    
    return dataArr;   
}


module.exports = doWhatItSays;