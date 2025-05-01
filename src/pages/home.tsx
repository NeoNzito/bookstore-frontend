import { useEffect, useState } from "react"
import BookDTO from "../types/bookDto"
import BookItem from "../components/bookItem";
import Loading from "../components/loading";
import { createBook, getAllBooks } from "../api/books";
import BookForm from "../components/bookForm";
import CreateBookDTO from "../types/createBookDto";


export default function Home() {
    const [books, setBooks] = useState<BookDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    console.log("Livros: ", books);

    const fetchBooks = () => {
        getAllBooks()
        .then(setBooks)
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchBooks();
    }, []);
    
    const submitBook = (data: CreateBookDTO) => {
        createBook(data)
        .then(fetchBooks);
    }

    return (
        <div className="flex flex-col items-center w-full gap-8">
            <BookForm onSubmit={submitBook} />
            <h1 className="font-bold text-2xl">Livros</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
            {
                loading ?
                <Loading />
                :
                books.map(b => <BookItem
                    key={b.id} 
                    book={b}
                    callback={fetchBooks}
                />)
            }
            </div>
        </div>
    )
}