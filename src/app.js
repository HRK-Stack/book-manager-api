import express, { json, urlencoded } from 'express';
import bookRoutes from './routes/book.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/book',bookRoutes);

export default app;