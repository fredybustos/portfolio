import { connectDB, disconnectDB, prisma } from "@/prisma"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import path from 'path'

export const GET = async () => {
  try {
    await connectDB()
    const posts = await prisma.post.findMany()
    return NextResponse.json({
      message: 'success',
      posts
    }, { status: 200 })
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
export const POST = async (request: Request) => {
  const data = await request.formData()

  const image = data.get('image') as File
  const title = data.get('title') as string
  const content = data.get('content') as string

  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const imagePath = path.join('public', image.name)
  await writeFile(imagePath, buffer)

  try {
    await connectDB()
    const post = await prisma.post.create({ data: { title, content, image: image.name } })
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

