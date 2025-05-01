# 📚 Book Store Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-lightblue?logo=vite)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A simple university project developed with **React** and **Vite** that provides a frontend for a Book Store. Users can add new books, including an image, authors, edition, year, ISBN, and a link to where the book can be purchased.

---

## ✨ Features

- 📖 Add new books to the catalog
- 🖼 Upload an image for each book
- ✍️ Include author, edition, year, and ISBN
- 🔗 Add an external link to buy the book

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) *(if used)*

## 📦 Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or Yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bookstore-frontend.git
   cd bookstore-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

```bash
npm run dev
# or
yarn dev
```

This will start the development server on [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` folder.

---

## 🎨 Usage

1. On the home page, view the list of books.
2. Click **Add Book** to open the form.
3. Fill out the details and click **Save**.
4. To edit, click **Edit** on a book card, modify fields, then **Save**.
5. To delete, click **Delete** and confirm.

---

## 🗂️ Project Structure

```plaintext
src/
├─ api/          # HTTP client and API calls
├─ components/   # Reusable UI components
├─ pages/        # Page-level components (BookList, BookForm)
├─ types/        # TypeScript DTOs and interfaces
├─ App.tsx       # Main application component
├─ main.tsx      # Entry point
├─ vite.config.ts
public/
└─ ...           # Static assets
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is for educational purposes. Use as you see fit.

