import axios from "axios"
import { Post } from "@prisma/client"

const BASE_URL = process.env.NEXTAUTH_URL
export async function getPosts() {
  try {
    const { data } = await axios.get<{ posts: Array<Post> }>(`${BASE_URL}/api/blog`)
    return data
  } catch (error) {
    console.error(error)
  }
  return { posts: [] as Array<Post> }
}

export const getPostById = async (id: string) => {
  try {
    const { data } = await axios.get<{ post: Post }>(`${BASE_URL}/api/blog/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
  return {
    post: {} as Post
  }
}