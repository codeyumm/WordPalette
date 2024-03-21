const express = require('express');

// create route object
let router = express.Router();

// functions for search
const dataMuse = require('../modules/datamuse/api');

// for - localhost:8888
router.route('/').get( async(request, response) => {

    // check if the request is coming from search bar or not

    if( request.query.searchInput != null ){

        // get user input from request
        const word = request.query.searchInput

        // get similar words from function
        var similarSoundWords = await dataMuse.getSimilarSoundWords( word );

       
    } 

    // await searchFunctions.handleSearch();

    response.status(200).render("index");

});

module.exports = router;