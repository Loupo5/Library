const myLibrary = []
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const add_book_btn = document.getElementById("addBook")
let HarryPooper = new Book("herypoter", "jk rwling", 234, "no")

add_book_btn.addEventListener("click", () => addBookToLibrary(HarryPooper))



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

function addBookToLibrary(book) {
    myLibrary.push(book)
    for (let book of myLibrary) {
        const tableRow = document.createElement("tr")
        const tableData = document.createElement("td")
        for (let i=1; i<myLibrary.length + 1; i++) {
            tableData.textContent = `Book ${i}`
            tableRow.appendChild(tableData)
        }
        for (let key in book) {
            if (book[key] === book.id) continue /*Skips showing the id key*/
            const tableData = document.createElement("td")
            tableData.textContent = book[key]
            tableRow.appendChild(tableData)
        }
        tbody.appendChild(tableRow)
    }
    
}

