// method to get defination and other detail for specific word from merriam-webster api

async function getDetailsOfWord( word ){

    // link of api
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.MERRIAM_WEBSTER_DICT_API_KEY}`;

    // set header for api request
    let options = {
        method: 'get',
        header: {
            "Content-Type": "application/json"
        }

    }

    let response = await fetch(url, options);

    return response.json();


}

async function getDetailFromThesaurus( word ){
        // link of api
        const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.MERRIAM_WEBSTER_THESAURUS_API_KEY}`;

        // set header for api request
        let options = {
            method: 'get',
            header: {
                "Content-Type": "application/json"
            }
    
        }
    
        let response = await fetch(url, options);
    
        return response.json();
}

module.exports = {
    getDetailsOfWord,
    getDetailFromThesaurus
};