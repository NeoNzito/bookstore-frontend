export default class CreateBookDTO {
    title: string;
    author: Array<{ name: string; }>;
    isbn: number;
    edition: string;
    year: number;
    publisher: string;
    page_ammount: number;
    purchase_link: string;
    image: string;
}   