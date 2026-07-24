const myLibrary = []


function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}
let HarryPooper = new Book("herypoter", "jk rwling", 234, "no")
addBookToLibrary(HarryPooper)

console.log(myLibrary)