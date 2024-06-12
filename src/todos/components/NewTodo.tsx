'use client';

import { IoTrashOutline } from "react-icons/io5";
import { FormEvent, useState } from "react";
import { addTodo, deleteCompleted } from "../actions/todo-actions";

export const NewTodo = () => {
  const [description, setDescription] = useState('')

  const CreateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!description.trim()) return;

    await addTodo(description)
    setDescription('')
  }

  return (
    <form onSubmit={(e) => CreateTodo(e)} className='flex w-full'>
      <input type="text"
        value={description}
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        onChange={({ target: { value } }) => setDescription(value)}
      />

      <button type='submit' className="flex items-center justify-center rounded-lg ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => deleteCompleted()}
        type='button' className="flex items-center justify-center rounded-lg ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        <span className="ml-2">Borrar Completados</span>
      </button>

    </form>
  )
}