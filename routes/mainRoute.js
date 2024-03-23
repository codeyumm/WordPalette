const express = require('express');

// create route object
let router = express.Router();

// functions for search
const dataMuse = require('../modules/datamuse/api');

// functions for word defination and details
const merriamWebster = require('../modules/merriam-webster/api');

// for - localhost:8888
router.route('/').get( async(request, response) => {

  

    // get user input from request
    const word = request.query.searchInput;

    var similarSoundWords = [];
    var similarSpelledWords = [];

      // check if the request is coming from search bar or not
    if( word != null ){

       

        // get similar words from function
        similarSoundWords = await dataMuse.getSimilarlySoundWords( word );

        // get similar spelled words from function
        similarSpelledWords = await dataMuse.getSimilarlySpelledWords( word );

        // get related adjectives from function
        relatedAdjectives = await dataMuse.getRelatedAdjectives( word );


    } 

    // await searchFunctions.handleSearch();

    response.status(200).render("index", { similarSoundWords: similarSoundWords, similarSpelledWords: similarSpelledWords, relatedAdjectives: relatedAdjectives, userInput: word });

});

// for - /details
router.route('/details').get( async(request, response) => {

    const word = request.query.word;

    wordDetails = await merriamWebster.getDetailsOfWord( word );

    // array to store all possible meaning of word
    // const definations = [];
    let defination = wordDetails[0].shortdef;

    // wordDetails.forEach(defination => {
    //   definations.push(defination.shortdef)
    // });


    if( defination == null){
      defination = "No defination found for this word."
    }

    response.status(200).render('word-defination', { word: word, defination: defination });
})


module.exports = router;