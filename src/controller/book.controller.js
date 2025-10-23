import { readData, writeData } from "../utils/util.js";

export const getAllBooks = async (req,res,next) => {
    const books = readData();
    res.json(books);
}

export const addBook = async (req,res,next) => {

    if (!req.body || !req.body.title) {
        return res.status(400).json({ message: "Invalid request body" });
    }
    
    const books = readData();
    const newBook = {
        id: Date.now(),
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };
    books.push(newBook);
    writeData(books);
    res.status(201).json({ message: 'Book added successfully', book: newBook });
}

export const getBook  = async (req,res,next) => {
    const books = readData();
    const book = books.find(b => b.id == req.params.id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

export const updateBook  = async (req,res,next) => { 
  const books = readData();
  const index = books.findIndex(b => b.id == req.params.id);

  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    writeData(books);
    res.json({ message: 'Book updated successfully', book: books[index] });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

export const deleteBook  = async (req,res,next) => { 
    const books = readData();
    const filteredBooks = books.filter(b => b.id != req.params.id);

    if (books.length !== filteredBooks.length) {
        writeData(filteredBooks);
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}