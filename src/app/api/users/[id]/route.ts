// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  console.log('4')
  console.log('params', params.id)
  const id = params.id
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  })
  if (user) {
    return NextResponse.json(user, { status: 200 })
  } else {
    return NextResponse.json(
      { message: `User not fount, id: ${id}` },
      { status: 404, statusText: 'Not Found' },
    )
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const id = params.id
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  })
  if (user) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    })
    return NextResponse.json(user, { status: 200 })
  } else {
    return NextResponse.json(
      { message: `User not fount, id: ${id}` },
      { status: 404, statusText: 'Not Found' },
    )
  }
}
