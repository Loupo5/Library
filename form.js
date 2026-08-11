const form = document.querySelector("form")

const titleInput = document.getElementById("title")
const authorInput = document.getElementById("author")
const pagesInput = document.getElementById("pages")
const readInput = document.getElementById("read")
function formValidation() {
    form.addEventListener("submit", (e) => {
        title = titleInput.value 
        if (title.length < 4) {
            titleInput.setCustomValidity("Title has to be at least 4 characters long")
        }
    })
}