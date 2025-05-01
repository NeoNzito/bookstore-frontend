import type React from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { IoMdAdd } from "react-icons/io"

type Author = { name: string }

type BookFormData = {
  title: string
  author: Author[]
  isbn: string
  edition: string
  year: number
  publisher: string
  page_ammount: number
  purchase_link: string
  image: string
}

type BookFormProps = {
  onSubmit: (data: BookFormData) => void
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookFormData>({
    defaultValues: {
      title: "",
      author: [{ name: "" }],
      isbn: "",
      edition: "",
      year: 0,
      publisher: "",
      page_ammount: 0,
      purchase_link: "",
      image: "",
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "author",
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-8 w-full bg-white shadow-lg rounded-lg space-y-6 border border-gray-100"
    >
      <h1 className="font-bold text-2xl text-gray-800 pb-2 border-b border-gray-200">Cadastro de Livros</h1>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Título</label>
        <input
          {...register("title", { required: true })}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
          placeholder="Digite o título do livro"
        />
        {errors.title && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Autores</label>
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <input
                {...register(`author.${index}.name`, { required: true })}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="Nome do autor"
              />
              {fields.length > 1 && (
                <button
                  type="button"
                  className="text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  onClick={() => remove(index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors flex items-center gap-2 text-sm font-medium"
          onClick={() => append({ name: "" })}
        >
          <IoMdAdd /> Adicionar autor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium text-gray-700 mb-1">ISBN</label>
          <input
            type="text"
            {...register("isbn", { required: true })}
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="Digite o ISBN"
          />
          {errors.isbn && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Edição</label>
          <input
            {...register("edition", { required: true })}
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="Digite a edição"
          />
          {errors.edition && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Ano</label>
          <input
            type="number"
            {...register("year", { required: true, valueAsNumber: true })}
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="Digite o ano"
          />
          {errors.year && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Editora</label>
          <input
            {...register("publisher", { required: true })}
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="Digite a editora"
          />
          {errors.publisher && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Número de páginas</label>
        <input
          type="number"
          {...register("page_ammount", { required: true, valueAsNumber: true })}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
          placeholder="Digite o número de páginas"
        />
        {errors.page_ammount && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Link de compra</label>
        <input
          type="url"
          {...register("purchase_link", { required: true })}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
          placeholder="https://exemplo.com/livro"
        />
        {errors.purchase_link && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Imagem (URL)</label>
        <input
          type="text"
          {...register("image", { required: true })}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
          placeholder="https://exemplo.com/imagem.jpg"
        />
        {errors.image && <span className="text-rose-500 text-sm mt-1 block">Campo obrigatório</span>}
      </div>

      <button
        type="submit"
        className="bg-emerald-600 flex gap-2 items-center font-bold text-white px-6 py-3 rounded-md transition-all duration-300 cursor-pointer hover:bg-emerald-700 shadow-sm hover:shadow w-full justify-center mt-4"
      >
        <IoMdAdd className="text-lg" /> Cadastrar Novo Livro
      </button>
    </form>
  )
}

export default BookForm
