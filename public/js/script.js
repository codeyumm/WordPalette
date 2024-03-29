document.addEventListener('DOMContentLoaded', function () {
    const seeMoreSoundButton = document.getElementById('see-more-sound-button');
    const seeMoreAdjectiveButton = document.getElementById('see-more-adjective-button');
    const seeMoreNounButton = document.getElementById('see-more-noun-button');

    seeMoreSoundButton.addEventListener('click', function () {
        const hiddenSoundWords = document.querySelectorAll('.similar-sound-container .word-container.hidden');

        hiddenSoundWords.forEach(function (wordContainer) {
            wordContainer.classList.remove('hidden');
        });

        seeMoreSoundButton.style.display = 'none';
    });

    seeMoreAdjectiveButton.addEventListener('click', function () {
        const hiddenAdjectiveWords = document.querySelectorAll('.similar-adjective-container .word-container.hidden');

        hiddenAdjectiveWords.forEach(function (wordContainer) {
            wordContainer.classList.remove('hidden');
        });

        seeMoreAdjectiveButton.style.display = 'none';
    });

    seeMoreNounButton.addEventListener('click', function () {
        const hiddenNounWords = document.querySelectorAll('.noun-container .word-container.hidden');

        hiddenNounWords.forEach(function (wordContainer) {
            wordContainer.classList.remove('hidden');
        });

        seeMoreNounButton.style.display = 'none';
    });
});
