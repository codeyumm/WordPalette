document.addEventListener('DOMContentLoaded', function () {
    const seeMoreSoundButton = document.getElementById('see-more-sound-button');
    const seeMoreSpellingButton = document.getElementById('see-more-spelling-button');

    seeMoreSoundButton.addEventListener('click', function () {
        const hiddenSoundWords = document.querySelectorAll('.similar-sound-container .word-container.hidden');

        hiddenSoundWords.forEach(function (wordContainer) {
            wordContainer.classList.remove('hidden');
        });

        seeMoreSoundButton.style.display = 'none';
    });

    seeMoreSpellingButton.addEventListener('click', function () {
        const hiddenSpellingWords = document.querySelectorAll('.similar-spelling-container .word-container.hidden');

        hiddenSpellingWords.forEach(function (wordContainer) {
            wordContainer.classList.remove('hidden');
        });

        
        seeMoreSpellingButton.style.display = 'none';
    });
});
