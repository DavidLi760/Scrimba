const buttonEl = document.querySelectorAll(".btn")

buttonEl.forEach(buttonEl =>{
    buttonEl.addEventListener("click", function() {
        window.open ("https://www.google.com", "_blank");
    })
})