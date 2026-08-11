const myLibrary = []
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const new_book_btn = document.querySelector(".new-book-btn")
const dialog = document.querySelector("dialog")
const add_book_btn = document.querySelector(".add-book-btn")
const close_book_btn = document.querySelector(".close-book-btn")
const book_title = document.querySelector("#title")
const book_author = document.querySelector("#author")
const book_pages = document.querySelector("#pages")
const book_read = document.querySelector("#read")
const form = document.querySelector("form")

new_book_btn.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.show()
})
book_title.addEventListener("input", () => {
    if (book_title.value.length < 4) {
        book_title.setCustomValidity("At least 4 characters long")
        book_title.className = "error"
        return
    } else book_title.setCustomValidity("")
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const newBook = new Book(book_title.value, book_author.value, book_pages.value, book_read.checked)
    
    if (newBook.read == true) newBook.read = "yes"
    if (newBook.read == false) newBook.read = "no"

    /*if (validateValues(newBook) == true) {
        return
    }*/
    addBookToLibrary(newBook)

})
close_book_btn.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.close()
})

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.id = crypto.randomUUID()
    }
}

/*function Book(title, author, pages, read) {
    if (!new.target)  {
        throw Error("Use the 'new' operator")
    }
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}*/
/*function validateValues(book) {
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
}*/

function addBookToLibrary(book) {
    myLibrary.push(book)
    const tableRow = document.createElement("tr")
    const deleteCell = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    
    deleteBtn.classList.add("deleteBtn")
    deleteCell.appendChild(deleteBtn)
    tableRow.appendChild(deleteCell)
    deleteBtn.addEventListener("click", () => {
        tableRow.remove()
        const deleteBook = myLibrary.findIndex((current) => current.id === book.id)
        
        if (deleteBook != false) {
            myLibrary.splice(deleteBook, 1)
        }
    })
    const tableData = document.createElement("td")
    tableData.textContent = `Book ${myLibrary.length}`
    tableRow.appendChild(tableData)

    for (let key in book) {
        if (book[key] === book.id) continue /*Skips showing the id key*/
        if (book[key] === book.read) {
            const readData = document.createElement("td")
            readData.textContent = book[key]
            tableRow.appendChild(readData)
            const toggleBtn = document.createElement("button")
            const toggleData = document.createElement("td")
            toggleBtn.textContent = "Toggle"
            toggleBtn.addEventListener("click", (e) => {
                e.preventDefault()
                if (readData.textContent == "yes") {
                    readData.textContent = "no"
                }
                else readData.textContent = "yes"
            })
            toggleData.appendChild(toggleBtn)
            tableRow.append(toggleData)
        }
        else {const tableData = document.createElement("td")
        tableData.textContent = book[key]
        tableRow.appendChild(tableData)
        }
    }
    

    tbody.appendChild(tableRow) 
}



