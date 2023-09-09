import axios from "axios"

export const AddPost = async (post: FormData) => {
  const { data } = await axios.post('/api/blog', post, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return data
}