const myLibrary = []
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const new_book_btn = document.querySelector(".new-book-btn")
const dialog = document.querySelector("dialog")
const add_book_btn = document.querySelector(".add-book-btn")
const book_title = document.querySelector("#title")
const book_author = document.querySelector("#author")
const book_pages = document.querySelector("#pages")
const book_read = document.querySelector("#read")

new_book_btn.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.showModal()
})

add_book_btn.addEventListener("click", (e) => {
    e.preventDefault()
    const newBook = new Book(book_title.value, book_author.value, book_pages.value, book_read.checked)
    /*if (newBook.title == "") newBook.title = "'blank'"
    if (newBook.author == "") newBook.author = "'blank'"
    if (newBook.pages == "") newBook.pages = "'unknown'"
    if (newBook.read == true) newBook.read = "yes"
    if (newBook.read == false) newBook.read = "no"*/
    if (validateValues(newBook) == true) {
        return
    }
    addBookToLibrary(newBook)

    dialog.close()
})


function Book(title, author, pages, read) {
    if (!new.target)  {
        throw Error("Use the 'new' operator")
    }
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}
function validateValues(book) {
    if (book.title == "") {
        alert("Invalid book title") 
        return true
    }
    else if (book.author =="") {
        alert("invalid book author")
        return  true
    }
    else if (book.pages == "" || isNaN(parseInt(book.pages))) {
        alert("Use number for pages")
        return  true
    }
    else return false
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    const tableRow = document.createElement("tr")
    const tableData = document.createElement("td")
    tableData.textContent = `Book ${myLibrary.length}`
    tableRow.appendChild(tableData)
    for (let key in book) {
        if (book[key] === book.id) continue /*Skips showing the id key*/
        const tableData = document.createElement("td")
        tableData.textContent = book[key]
        tableRow.appendChild(tableData)
    }
    tbody.appendChild(tableRow) 
}

