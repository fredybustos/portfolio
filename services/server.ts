import axios from "axios"
import { Post } from "@prisma/client"

const BASE_URL = process.env.NEXTAUTH_URL
export async function getPosts() {
  const { data } = await axios.get<{ posts: Array<Post> }>(`${BASE_URL}/api/blog`)
  return data
}

export const getPostById = async (id: string) => {
  const { data } = await axios.get<{ post: Post }>(`${BASE_URL}/api/blog/${id}`)
  return data
}