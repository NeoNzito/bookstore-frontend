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
        <div className="flex flex-col rounded-md shadow-sm justify-around items-center gap-6 p-4 w-full sm:flex-row">
            <div className="w-full max-w-xs sm:max-w-[200px]">
                <img src={image} alt={`Capa do livro ${title}`} className="aspect-video w-full rounded-md object-cover" />
            </div>
            <div className="flex-1 w-full">
                <h1 className="text-lg font-bold mb-2">Título: {title}</h1>
                <div className="p-3 shadow-md rounded-md mb-2">
                    <h2 className="font-semibold">Autores:</h2>
                    {
                        author.map((a, index) => <h3 key={index}>{a.name}</h3>)
                    }
                </div>
                <h2>Edição: {edition}</h2>
                <h2>Editora: {publisher}</h2>
                <h2>Ano: {year}</h2>
                <h2>ISBN: {isbn}</h2>
                <p>Nº de Páginas: {page_ammount}</p>
                <div className="py-4 flex justify-center w-full">
                    <Button icon={<FaShoppingCart />} onClick={() => console.log(purchase_link)}>Comprar</Button>
                </div>
            </div>
        </div>
    );
};

export default BookItem;
