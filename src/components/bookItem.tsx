import BookDTO from "../types/bookDto";
import Button from "./button";

const BookItem = ({
    title,
    author = [],
    edition,
    image,
    isbn,
    page_ammount,
    publisher,
    year,
    purchase_link,
}: BookDTO) => {
    return (
        <div>
            <img src={image} />
            <h1>{title}</h1>
            {
                author.map(a => <h2>{a.name}</h2>)
            }
            <h2>{edition}</h2>
            <h2>{publisher}</h2>
            <h2>{year}</h2>
            <h2>{isbn}</h2>
            <p>Nº de Páginas: {page_ammount}</p>
            <Button></Button>
        </div>
    )
}

export default BookItem;