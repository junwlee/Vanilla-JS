document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('rangeInput');
    const startGameButton = document.getElementById('startGameButton');
    const gameSection = document.getElementById('gameSection');
    const rangeDisplay = document.getElementById('rangeDisplay');
    const submitGuessButton = document.getElementById('submitGuess');
    const guessInput = document.getElementById('guessInput');
    const resultDisplay = document.getElementById('result');
    let maxRange = 0;
    let randomNum = 0;

    function updateGameSectionVisibility(visible) {
        gameSection.style.display = visible ? 'block' : 'none';
    }

    function updateRangeDisplay() {
        rangeDisplay.textContent = `범위: 0에서 ${maxRange}까지`;
    }

    function generateRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    startGameButton.addEventListener('click', function() {
        maxRange = parseInt(rangeInput.value, 10);
        if (isNaN(maxRange) || maxRange < 0) {
            alert('유효한 최대 범위를 입력해 주세요. 0 이상의 숫자여야 합니다.');
            return;
        }
        randomNum = generateRandomNumber(maxRange);
        updateRangeDisplay();
        updateGameSectionVisibility(true);
    });

    submitGuessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value, 10);
        if (isNaN(userGuess)) {
            alert('추측할 숫자를 입력해 주세요.');
            return;
        }
        if (userGuess === randomNum) {
            resultDisplay.textContent = '축하합니다! 정답입니다!';
            updateGameSectionVisibility(false);
        } else {
            resultDisplay.textContent = '아쉽지만 틀렸습니다. 다시 시도해보세요!';
            randomNum = generateRandomNumber(maxRange); // 사용자가 다시 시도할 때마다 새로운 숫자를 생성
        }
    });
});