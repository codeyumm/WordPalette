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

    wordDetailFromThesaurus = await merriamWebster.getDetailFromThesaurus( word );

    // array to store all possible meaning of word
    // const definations = [];
    let defination = wordDetails[0].shortdef;

    // wordDetails.forEach(defination => {
    //   definations.push(defination.shortdef)
    // });

    var synonyms = [];
    var antonyms = [];

    if( defination == null){
      defination = "No defination found for this word."
      
    } else {


    if( wordDetailFromThesaurus[0].meta != undefined  ){
            // synonyms
        
            if( wordDetailFromThesaurus[0].meta.syns.length != 0 ){

              synonyms = [...(wordDetailFromThesaurus[0].meta.syns)[0]];

              // check for second element in syns if exist push to array otherwise push empty string
              if (wordDetailFromThesaurus[0].meta.syns[1]) {

                  synonyms.push(...wordDetailFromThesaurus[0].meta.syns[1]);

              } else {

                  synonyms.push("");

              }
            }



          
            if( wordDetailFromThesaurus[0].meta.ants.length != 0 ){
              antonyms = [...(wordDetailFromThesaurus[0].meta.ants)[0]];

              // check for second element in syns if exist push to array otherwise push empty string
              if (wordDetailFromThesaurus[0].meta.ants[1]) {

                antonyms.push(...wordDetailFromThesaurus[0].meta.ants[1]);

              } else {

                antonyms.push("");

              }
            }

  } else {
    synonyms = ["No synonyms found"];
    antonyms = ["No antonyms found"];
  }

}

   


    response.status(200).render('word-defination', { word: word, defination: defination, synonyms: synonyms, antonyms: antonyms });
})


module.exports = router;