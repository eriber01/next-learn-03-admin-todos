import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  return NextResponse.json({
    message: 'hello word'
  })
}


export async function POST(request: Request) {

  return NextResponse.json({
    message: 'hello word',
    method: 'POST'
  })
}