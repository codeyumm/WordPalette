// get words that sound similar to the given word

async function getSimilarSoundWords( word ){

    // console.log(word);

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



// export all the functions
module.exports = {
    getSimilarSoundWords
}