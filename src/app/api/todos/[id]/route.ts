import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params: { id } }: Params) {

  console.log({ id });

  const todo = await prisma.todo.findFirst({
    where: { id }
  })

  if (!todo) return NextResponse.json({ message: `Todo con id ${id} no existe` }, { status: 404 })

  return NextResponse.json(todo)

}