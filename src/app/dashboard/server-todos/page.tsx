export const revalidate = 0

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from '../../../todos';

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
};

export default async function ServerTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <>
      <span className="text-3xl pb-10">Server Actions</span>
      <div className="w-full mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}