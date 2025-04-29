import { useEffect, useState } from "react"
import BookDTO from "../types/bookDto"
import BookItem from "../components/bookItem";
import Loading from "../components/loading";
import { getAllBooks } from "../api/books";
import Button from "../components/button";
import { IoMdAdd } from "react-icons/io";
import BookForm from "../components/BookForm";
import CreateBookDTO from "../types/createBookDto";


export default function Home() {
    const [books, setBooks] = useState<BookDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllBooks()
        .then(setBooks)
        .finally(() => {
            console.log(books);
            setLoading(false);
        })
    }, []);
    
    const submitBook = (data: CreateBookDTO) => {
        
    }

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <BookForm onSubmit={submitBook} />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
               {
                books.map(b => <BookItem
                    key={b.id} 
                    id={b.id}
                    title={b.title}
                    author={b.author}
                    edition={b.edition}
                    image={b.image}
                    isbn={b.isbn}
                    page_ammount={b.page_ammount}
                    publisher={b.publisher}
                    year={b.year}
                    purchase_link={b.purchase_link}
                />)
               }
            </div>
        </div>
    )
}