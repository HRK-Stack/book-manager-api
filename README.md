# 📘 Book Manager API

A simple Express.js REST API for managing books with file-based storage (JSON file).
Supports full CRUD operations: Create, Read, Update, Delete.

---

## 🧩 Tech Stack

- Node.js

- Express.js

- ES Modules

- File-based persistence (store.json)

---

## 🚀 Getting Started

1. Clone the repo
```
git clone https://github.com/yourusername/book-manager-api.git
cd book-manager-api
```
2. Install dependencies
```
npm install
```
3. Run the server
```
npm start
```

or if you have a dev script:

```
npm run dev
```
4. Server runs on
```
http://localhost:5000
```

## 📚 API Endpoints

All routes are prefixed with:
```bash
/api/v1/book
```

---

## ➕ Create a Book

POST /api/v1/book/add

Request Body (JSON):

```
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
```

Response:
```
{
  "message": "Book added successfully",
  "book": {
    "id": 1730012345678,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  }
}
```

---

## 📖 Get All Books

GET /api/v1/book/get/all

Response:
```
[
  {
    "id": 1730012345678,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  }
]
```

---
## 🔍 Get Book by ID

GET /api/v1/book/get/:id

Example:

GET /api/v1/book/get/1730012345678


Response:
```
{
  "id": 1730012345678,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
```

---

## ✏️ Update a Book

PUT /api/v1/book/update/:id

Request Body:
```
{
  "year": 1926
}
```

Response:
```
{
  "message": "Book updated successfully",
  "book": {
    "id": 1730012345678,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1926
  }
}
```
---
## 🗑️ Delete a Book

DELETE /api/v1/book/delete/:id

Example:

DELETE /api/v1/book/delete/1730012345678


Response:
```
{
  "message": "Book deleted successfully"
}
```

## ⚙️ Configuration

Environment Variables (optional)

You can configure the port via .env (if added):

PORT=3000

## 🧠 Notes

All data is stored in store/store.json.

This is a simple file-based backend, great for learning or prototyping.

For production, consider using a real database (MongoDB, PostgreSQL, etc.).

## 📄 License

This project is open-source and available under the MIT License.