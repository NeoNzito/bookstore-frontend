import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";

type Author = { name: string };

type BookFormData = {
  title: string;
  author: Author[];
  isbn: string;
  edition: string;
  year: number;
  publisher: string;
  page_ammount: number;
  purchase_link: string;
  image: string;
};

type BookFormProps = {
  onSubmit: (data: BookFormData) => void;
};

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<BookFormData>({
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
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "author"
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 w-full bg-white shadow-md rounded-md space-y-4">
      <h1 className="font-bold text-xl">Cadastro de Livros</h1>
      <div>
        <label className="block font-semibold">Título</label>
        <input
          {...register("title", { required: true })}
          className="w-full border p-2 rounded"
        />
        {errors.title && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <div>
        <label className="block font-semibold">Autores</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 mb-2">
            <input
              {...register(`author.${index}.name`, { required: true })}
              className="w-full border p-2 rounded"
            />
            {fields.length > 1 && (
              <button
                type="button"
                className="text-red-500 font-bold"
                onClick={() => remove(index)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="px-3 py-2 border rounded-md cursor-pointer font-bold"
          onClick={() => append({ name: "" })}
        >
          + Adicionar autor
        </button>
      </div>

      <div>
        <label className="block font-semibold">ISBN</label>
        <input
          type="number"
          {...register("isbn", { required: true, valueAsNumber: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Edição</label>
        <input
          {...register("edition", { required: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Ano</label>
        <input
          type="number"
          {...register("year", { required: true, valueAsNumber: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Editora</label>
        <input
          {...register("publisher", { required: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Número de páginas</label>
        <input
          type="number"
          {...register("page_ammount", { required: true, valueAsNumber: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Link de compra</label>
        <input
          type="url"
          {...register("purchase_link", { required: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold">Imagem (URL)</label>
        <input
          type="text"
          {...register("image", { required: true })}
          className="w-full border p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-slate-900 flex gap-2 items-center h-fit font-bold border-2 text-white px-3 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-slate-700">
        <IoMdAdd /> Novo Livro
      </button>
    </form>
  );
};

export default BookForm;
