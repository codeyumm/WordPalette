// get words that sound similar to the given word

async function getSimilarlySoundWords( word ){

    // console.log(word);

    // url for API
    url = `https://api.datamuse.com/words?sl=${word}`;

    let options = {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
    };

    let response = await fetch(
        url,
        options
    )

   return response.json();

} 

// get words that spelled similary to the given word with API
async function getSimilarlySpelledWords( word ){

    // url for API
    url = `https://api.datamuse.com/words?sp=${word}`;

    let options = {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let response = await fetch(
        url,
        options
    )

    return response.json();
}

// get words which are related adjectives to the given word with API
async function getRelatedAdjectives( word ){

    // url for API
    url = `https://api.datamuse.com/words?rel_jjb=${word}`;

    let options = {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let response = await fetch(
        url,
        options
    )

    return response.json();
}

// export all the functions
module.exports = {
    getSimilarlySoundWords,
    getSimilarlySpelledWords,
    getRelatedAdjectives
}