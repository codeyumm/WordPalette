const express = require('express');

// create route object
let router = express.Router();

// functions for search
const dataMuse = require('../modules/datamuse/api');

// for - localhost:8888
router.route('/').get( async(request, response) => {

  

    // get user input from request
    const word = request.query.searchInput;

      // check if the request is coming from search bar or not
    if( word != null ){



        // get similar words from function
        var similarSoundWords = await dataMuse.getSimilarlySoundWords( word );

        // get similar spelled words from function
        var similarSpelledWords = await dataMuse.getSimilarlySpelledWords( word );

        

    } 

    // await searchFunctions.handleSearch();

    response.status(200).render("index", { similarSoundWords: similarSoundWords, similarSpelledWords: similarSpelledWords, userInput: word });

});

module.exports = router;