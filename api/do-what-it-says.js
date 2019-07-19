var fs = require("fs");

function doWhatItSays(){
    fs.readFile("./random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
      
        // We will then re-display the content as an array for later use.
        console.log(dataArr);
      
    });
}
