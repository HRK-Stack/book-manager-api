import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controller/book.controller.js";

const router = Router()

router.get('/get/all',getAllBooks);
router.post('/add',addBook);
router.get('/get/:id',getBook);
router.put('/update/:id',updateBook);
router.delete('/delete/:id',deleteBook);

export default router;