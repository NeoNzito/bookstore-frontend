import { FaShoppingCart } from "react-icons/fa";
import BookDTO from "../types/bookDto";
import Button from "./button";
import imagePlaceholder from "../../public/landscape-placeholder.svg";

const BookItem = ({
    title,
    author = [],
    edition,
    image = imagePlaceholder,
    isbn,
    page_ammount,
    publisher,
    year,
    purchase_link,
}: BookDTO) => {
    return (
        <div className="flex flex-col rounded-md shadow-sm justify-aorund items-center gap-6 p-4 w-fit sm:flex-row">
            <img src={image} className="aspect-video w-[50%] min-w-48 rounded-md"/>
            <div>
                <h1>Titulo: {title}</h1>
                <div className="p-3 shadow-md rounded-md">
                    <h2>Autores</h2>
                        {
                            author.map(a => <h3>{a.name}</h3>)
                        }
                </div>
            <h2>Edição: {edition}</h2>
            <h2>Editora: {publisher}</h2>
            <h2>Ano: {year}</h2>
            <h2>ISBN: {isbn}</h2>
            <p>Nº de Páginas: {page_ammount}</p>
            <div className="py-4">
                <Button icon={<FaShoppingCart />} onClick={() => console.log(purchase_link)}>Comprar</Button>
            </div>
            </div>
        </div>
    )
}

export default BookItem;