import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function useSignin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await signIn('credentials', { email, password, redirect: false })

    if (response?.error) {
      setIsLoading(false)
      setErrorMessage(response?.error)
      return response?.error
    }

    if (response?.ok) {
      setIsLoading(false)
      return router.push('/admin')
    }
  }

  return { onSubmit, router, isLoading, errorMessage }

}
