import React, { useState } from "react"
import { AddPost } from "@/services/client"
import { useRouter } from "next/navigation"
import { toBase64 } from "@/utils"

const initialPost = {
  title: '',
  content: ''
}

export default function useAdmin() {
  const router = useRouter()
  const [file, setFile] = useState<File>()
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState(initialPost)
  const [postCreated, setPostCreated] = useState({ ...initialPost, image: '' })

  const onDropImage = async (acceptedFiles: Array<File>) => {
    const baseImage = await toBase64(acceptedFiles[0]) as string
    setFile(acceptedFiles[0])
    setImage(baseImage)
  }

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget
    setPost({ ...post, [name]: value })
  }

  const onSubmit = () => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('image', file as Blob)

    AddPost(formData)
      .then((response) => {
        setPostCreated(response)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
        router.push('/')
        setPost(initialPost)
        setFile({} as File)
        setImage('')
      })
  }

  return { onSubmit, onDropImage, onChangeValue, isLoading, postCreated, image }
}
