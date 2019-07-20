const keys = require('../keys.js');
const axios = require('axios');
const log = require('../functions/log.js');
var dataLog = "";


function getMovieInfo(title){

    if(title === undefined){
        dataLog += `\nIf you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/`;
        dataLog += "\nIt's on Netflix!";
        title = "Mr. Nobody";
    }
    
    dataLog += `\n\nMOVIE: ${(title.toUpperCase())}`;
    
    var url = `https://www.omdbapi.com/?t=${title}&apikey=${keys.omdb}`;
    
    axios.get(url).then(renderInfo).catch(error);
}

function renderInfo(response){
    movie = response.data;
    
    dataLog += "\n----------------------------------------";
    dataLog += `\nTitle: ${movie.Title}`;
    dataLog += `\nYear: ${movie.Year}`;
    dataLog += `\nIMDB Rating: ${movie.imdbRating}`;
    dataLog += `\nRotten Tomatoes Rating: ${movie.Ratings[1].Value}`;
    dataLog += `\nCountry: ${movie.Country}`;
    dataLog += `\nLanguage: ${movie.Language}`;
    dataLog += `\nPlot: ${movie.Plot}`;
    dataLog += `\nActors: ${movie.Actors}\n`;

    console.log(dataLog);
    log(dataLog);
}

function error(err){
    console.log(err);
}

module.exports = getMovieInfo;