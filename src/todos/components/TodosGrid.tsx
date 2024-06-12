'use client'
import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem";
import * as todosApi from "../helpers/todos";
import { useRouter } from "next/navigation";
import { sleep, toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map(item => (
          <TodoItem key={item.id} todo={item} toggleTodo={toggleTodo} />
        ))
      }
    </div>
  )
}
