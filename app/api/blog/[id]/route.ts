import { connectDB, disconnectDB, prisma } from "@/prisma"
import { NextResponse } from "next/server"

export const GET = async (request: Request, response: { params: { id: string } }) => {
  const postId = response.params.id
  try {
    await connectDB()
    const post = await prisma.post.findFirst({ where: { id: postId } })
    if (!post) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({
      message: 'success', post
    }, { status: 201 })

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        message: 'Error', error
      }, { status: 400 })
    }
  }
  finally {
    await disconnectDB()
  }
}
export const PUT = async (request: Request, response: { params: { id: string } }) => {
  const { title, content, image } = await request.json()
  const postId = response.params.id

  try {
    await connectDB()
    const post = await prisma.post.update({ data: { title, content, image }, where: { id: postId } })
    return NextResponse.json({
      message: 'success', post
    }, { status: 201 })

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        message: 'Error', error
      }, { status: 400 })
    }
  }
  finally {
    await disconnectDB()
  }
}
export const DELETE = async (request: Request, response: { params: { id: string } }) => {
  const postId = response.params.id

  try {
    await connectDB()
    const post = await prisma.post.delete({ where: { id: postId } })
    return NextResponse.json({
      message: 'success', post
    }, { status: 201 })

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        message: 'Error', error
      }, { status: 400 })
    }
  }
  finally {
    await disconnectDB()
  }
}