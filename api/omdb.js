const keys = require('../keys.js');
const axios = require('axios');


function getMovieInfo(title){
    
    if(title === undefined){
        console.log(`If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/`);
        console.log("It's on Netflix!");
        title = "Mr. Nobody";
    }
    
    console.log("================================================================");        
    console.log(`MOVIE: ${(title.toUpperCase())}:`);
    
    var url = `https://www.omdbapi.com/?t=${title}&apikey=${keys.omdb}`;
    
    axios.get(url).then(renderInfo).catch(error);
}

function renderInfo(response){
    movie = response.data;
    console.log("----------------------------------------------------------------");
    console.log(`Title: ${movie.Title}`);
    console.log(`Year: ${movie.Year}`);
    console.log(`IMDB Rating: ${movie.imdbRating}`);
    console.log(`Rotten Tomatoes Rating: ${movie.Ratings[1].Value}`);
    console.log(`Country: ${movie.Country}`);
    console.log(`Language: ${movie.Language}`);
    console.log(`Plot: ${movie.Plot}`);
    console.log(`Actors: ${movie.Actors}`);
    console.log("----------------------------------------------------------------");
}

function error(err){
    console.log(err);
}

module.exports = getMovieInfo;