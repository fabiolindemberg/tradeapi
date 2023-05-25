// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('2')
  console.log('req', request)
  const users = await prisma.user.findMany()
  return NextResponse.json({ data: users }, { status: 200 })
}

export async function POST(request: NextRequest) {
  // body
  const body = await request.json()
  // cookie
  // const cookie = request.cookies.get('cookie')
  // header
  // const authorization = request.headers.get('Authorization')
  const { name, email } = body
  console.log('body', body)
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  })
  return NextResponse.json(user, { status: 200 })
}

export async function DELETE(request: NextRequest) {
  // const body = await request.json()
  // const user = await prisma.user.delete({
  //   where: {
  //     id: '666',
  //   },
  // })
  // if (user) {
  //   return NextResponse.json(user, {
  //     status: 200,
  //   })
  // } else {
  //   console.log(`id`, id)
  //   return NextResponse.json(
  //     { message: 'User not found' },
  //     {
  //       status: 404,
  //       statusText: 'Not Found',
  //     },
  //   )
  // }
}
