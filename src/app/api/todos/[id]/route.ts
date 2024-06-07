import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse } from 'next/server'
import * as yup from 'yup';

interface Params {
  params: {
    id: string
  }
}

const getTodo = async (id: string): Promise<Todo | undefined> => {

  const todo = await prisma.todo.findFirst({
    where: { id }
  })

  if (!todo) return undefined

  return todo
}

export async function GET(_: Request, { params: { id } }: Params) {

  const todo = await getTodo(id)

  if (!todo) return NextResponse.json({ message: `Todo con id ${id} no existe` }, { status: 404 })

  return NextResponse.json(todo)

}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional()
})

export async function PUT(request: Request, { params: { id } }: Params) {

  try {

    const todo = await getTodo(id)

    if (!todo) return NextResponse.json({ message: `Todo con id ${id} no existe` }, { status: 404 })

    const { description, complete } = await putSchema.validate(await request.json())

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description }
    })

    return NextResponse.json(updatedTodo)

  } catch (error: any) {
    return NextResponse.json({ message: error.message })
  }
}