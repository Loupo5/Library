const myLibrary = []
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")



function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
    const tableRow = document.createElement("tr")
    for (key in Book) {
        tableRow.textContent = key;
    }
    tableRow.appendChild(tbody)
}
let HarryPooper = new Book("herypoter", "jk rwling", 234, "no")
addBookToLibrary(HarryPooper)

console.log(myLibrary)
