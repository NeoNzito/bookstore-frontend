import { useEffect, useState } from "react"
import BookDTO from "../types/bookDto"
import BookItem from "../components/bookItem";
import Loading from "../components/loading";
import { getAllBooks } from "../api/books";


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
    
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <BookItem />
        </div>
    )
}