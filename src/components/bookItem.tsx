import type React from "react"

import { useState } from "react"
import { FaShoppingCart, FaEdit, FaTrash } from "react-icons/fa"
import imagePlaceholder from "../../public/landscape-placeholder.svg"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { X, Plus, AlertTriangle } from "lucide-react"
import type CreateBookDTO from "../types/createBookDto"
import type BookDTO from "../types/bookDto"
import { updateBook, deleteBook } from "../api/books"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type BookItemProps = {
  book: BookDTO;
  callback: () => void;
}

const BookItem = ({
  book: {
      id,
      title,
      author = [],
      edition,
      image = imagePlaceholder,
      isbn,
      page_ammount,
      publisher,
      year,
      purchase_link,
  },
  callback,
}: BookItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editedBook, setEditedBook] = useState<CreateBookDTO>({
    title,
    author: [...author],
    isbn,
    edition,
    year,
    publisher,
    page_ammount,
    purchase_link,
    image,
  })

  console.log(id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedBook({
      ...editedBook,
      [name]: name === "year" || name === "page_ammount" ? Number(value) : value,
    })
  }

  const handleAuthorChange = (index: number, value: string) => {
    const updatedAuthors = [...editedBook.author]
    updatedAuthors[index] = { name: value }
    setEditedBook({
      ...editedBook,
      author: updatedAuthors,
    })
  }

  const addAuthor = () => {
    setEditedBook({
      ...editedBook,
      author: [...editedBook.author, { name: "" }],
    })
  }

  const removeAuthor = (index: number) => {
    const updatedAuthors = [...editedBook.author]
    updatedAuthors.splice(index, 1)
    setEditedBook({
      ...editedBook,
      author: updatedAuthors,
    })
  }

  const handleSave = () => {
    updateBook(id, editedBook)
    .then(callback);
    setIsModalOpen(false);
  }

  const handleDelete = () => {
    deleteBook(id)
    .then(callback);
    setIsDeleteDialogOpen(false)
  }

  return (
    <>
      <div className="flex flex-col rounded-md shadow-sm justify-around items-center gap-6 p-4 w-full sm:flex-row">
        <div className="w-full max-w-xs sm:max-w-[200px]">
          <img
            src={image || "/placeholder.svg"}
            alt={`Capa do livro ${title}`}
            className="aspect-auto w-full rounded-md object-cover"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-lg font-bold">{title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>
                <FaEdit className="mr-2 h-4 w-4" />
                Editar
              </Button>
              <Button variant="destructive" size="sm" onClick={() => setIsDeleteDialogOpen(true)}>
                <FaTrash className="mr-2 h-4 w-4" />
                Excluir
              </Button>
            </div>
          </div>
          <div className="p-3 shadow-md rounded-md mb-2">
            <h2 className="font-semibold">Autores:</h2>
            {author.map((a, index) => (
              <h3 key={index}>{a.name}</h3>
            ))}
          </div>
          <h2>Edição: {edition}</h2>
          <h2>Editora: {publisher}</h2>
          <h2>Ano: {year}</h2>
          <h2>ISBN: {isbn}</h2>
          <p>Nº de Páginas: {page_ammount}</p>
          <div className="py-4 flex justify-center w-full">
            <Button onClick={() => window.open(purchase_link, "_blank", "noopener,noreferrer")}>
              <FaShoppingCart className="mr-2 h-4 w-4" />
              Comprar
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Livro</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Título
              </Label>
              <Input
                id="title"
                name="title"
                value={editedBook.title}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right mt-2">Autores</Label>
              <div className="col-span-3 space-y-2">
                {editedBook.author.map((author, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={author.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                        handleAuthorChange(index, e.target.value)
                      }
                      placeholder="Nome do autor"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeAuthor(index)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={addAuthor}
                  className="flex items-center gap-1 text-sm"
                >
                  <Plus className="h-4 w-4" /> Adicionar autor
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isbn" className="text-right">
                ISBN
              </Label>
              <Input
                id="isbn"
                name="isbn"
                value={editedBook.isbn}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edition" className="text-right">
                Edição
              </Label>
              <Input
                id="edition"
                name="edition"
                value={editedBook.edition}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Ano
              </Label>
              <Input
                id="year"
                name="year"
                type="number"
                value={editedBook.year}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="publisher" className="text-right">
                Editora
              </Label>
              <Input
                id="publisher"
                name="publisher"
                value={editedBook.publisher}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="page_ammount" className="text-right">
                Nº de Páginas
              </Label>
              <Input
                id="page_ammount"
                name="page_ammount"
                type="number"
                value={editedBook.page_ammount}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="purchase_link" className="text-right">
                Link de Compra
              </Label>
              <Input
                id="purchase_link"
                name="purchase_link"
                value={editedBook.purchase_link}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                URL da Imagem
              </Label>
              <Input
                id="image"
                name="image"
                value={editedBook.image}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Confirmar exclusão
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o livro "{title}"? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default BookItem
