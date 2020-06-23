

let books = [
    {
        id: 0,
        title: 'Harry Potter and the Chamber of Secrets', 
        author: 'JK Rowling'
    },
    {
        id: 1,
        title: 'To Kill A Mockingbird', 
        author: 'Harper Lee'
    }

];

let id = 2;


module.exports = {
    
    getBooks: (req, res) => {
        res.status(200).send(books)
    }
}