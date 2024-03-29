document.addEventListener('DOMContentLoaded', function () {
    const seeMoreSoundButton = document.getElementById('see-more-sound-button');
    const seeMoreAdjectiveButton = document.getElementById('see-more-adjective-button');
    const seeMoreNounButton = document.getElementById('see-more-noun-button');

    seeMoreSoundButton.addEventListener('click', function () {
        console.log("See more sound button clicked");
        const hiddenSoundWords = document.querySelectorAll('.similar-sound-container .word-container.hidden');
        console.log(hiddenSoundWords.length + " hidden sound words found");

        hiddenSoundWords.forEach(function (wordContainer) {
            console.log("Removing hidden class from word container");
            wordContainer.classList.remove('hidden');
        });

        seeMoreSoundButton.style.display = 'none';
    });

    seeMoreAdjectiveButton.addEventListener('click', function () {
        console.log("See more adjective button clicked");
        const hiddenAdjectiveWords = document.querySelectorAll('.similar-adjective-container .word-container.hidden');
        console.log(hiddenAdjectiveWords.length + " hidden adjective words found");

        hiddenAdjectiveWords.forEach(function (wordContainer) {
            console.log("Removing hidden class from word container");
            wordContainer.classList.remove('hidden');
        });

        seeMoreAdjectiveButton.style.display = 'none';
    });

    seeMoreNounButton.addEventListener('click', function () {
        console.log("See more noun button clicked");
        const hiddenNounWords = document.querySelectorAll('.noun-container .word-container.hidden');
        console.log(hiddenNounWords.length + " hidden noun words found");

        hiddenNounWords.forEach(function (wordContainer) {
            console.log("Removing hidden class from word container");
            wordContainer.classList.remove('hidden');
        });

        seeMoreNounButton.style.display = 'none';
    });
});
