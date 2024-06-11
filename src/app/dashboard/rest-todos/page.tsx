import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from '../../../todos';

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
};

export default async function RestTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <div className="w-full mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}