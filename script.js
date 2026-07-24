function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}

let HarryPooper = new Book("HarryPooper", "J.K.Rawling", 456, "no")
console.log(HarryPooper)
let Martin = new Book("HarryPooper", "J.K.Rawling", 456, "no")
console.log(Martin)