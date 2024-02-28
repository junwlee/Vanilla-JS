const link = document.querySelector("a");

function handleLink(event) {
    event.preventDefault();
}

link.addEventListener("click", handleLink);