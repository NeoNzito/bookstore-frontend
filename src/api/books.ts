import BookDTO from "../types/bookDto";
import CreateBookDTO from "../types/createBookDto";
import client from "./client";

export const createBook = async(bookData: CreateBookDTO): Promise<BookDTO> => {
    const res = await client.post("/books", { bookData });
    return res.data;
}

export const getAllBooks = async(): Promise<BookDTO[]> => {
    const res = await client.get("/books");
    console.log(res.data);
    return res.data;
}

export const getOneBookById = async(bookId: string): Promise<BookDTO | undefined> => {
    const res = await client.get(`/books/${bookId}`);
    return res.data;
}

export const updateBook = async(bookId: string, bookData: CreateBookDTO): Promise<BookDTO> => {
    const res = await client.post(`/books/${bookId}/update`, { bookData });
    return res.data;
}

export const deleteBook = async(bookId: string): Promise<BookDTO> => {
    const res = await client.post(`/books/${bookId}/delete`);
    return res.data;
}