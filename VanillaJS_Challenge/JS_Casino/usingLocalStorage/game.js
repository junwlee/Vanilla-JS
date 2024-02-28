const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");
const guessInput = document.getElementById("guessInput");

// localStorage에서 최대 숫자 값을 로드하고 입력 필드에 설정합니다.
const savedMaxNumber = localStorage.getItem("maxNumber");
if (savedMaxNumber) {
    maxNumber.value = savedMaxNumber;
    guessInput.setAttribute("max", savedMaxNumber);
}

function handleGuessSubmit(e) {
    e.preventDefault();

    if (guessInput.value === "") return;

    const max = parseInt(maxNumber.value, 10);
    if (max < 0) return; // 음수는 허용하지 않습니다.

    localStorage.setItem("maxNumber", max); // 최대 숫자를 localStorage에 저장합니다.
    guessInput.setAttribute("max", max); // 입력 최대값을 업데이트합니다.

    const random = Math.floor(Math.random() * (max + 1));
    const userGuess = parseInt(guessInput.value, 10);
    const resultSpan = result.querySelector("span");
    resultSpan.innerHTML = `
    당신이 선택한 숫자: ${userGuess},
    기계가 선택한 숫자: ${random}.<br />
    <strong>${userGuess === random ? "당신이 이겼습니다!" : "당신이 졌습니다!"}</strong>
    `;
}

guessForm.addEventListener("submit", handleGuessSubmit);

maxNumber.addEventListener("input", () => {
    const max = parseInt(maxNumber.value, 10);
    if (!isNaN(max)) {
        localStorage.setItem("maxNumber", max); // 입력할 때마다 최대 숫자를 localStorage에 저장합니다.
        guessInput.setAttribute("max", max); // 입력 최대값을 실시간으로 업데이트합니다.
    }
});