const h1 = document.querySelector("div.content:first-child h1");

function TitleClick() {
    // const currentClass = "clicked";

    // if (h1.className === "") {
    //     h1.classList.add(currentClass);
    // } else {
    //     h1.classList.remove(currentClass);
    // }

    const wasAdded = h1.classList.toggle("clicked");

    if(wasAdded) {
        console.log("'clicked' 클래스가 추가되었습니다.");
    } else {
        console.log("'clicked' 클래스가 제거되었습니다.");
    }
    
}

h1.addEventListener("click", TitleClick);