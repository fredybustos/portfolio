"use client"
import React from 'react'
import useSignin from './useSignin'
import Spinner from '@/app/components/spinner'
import { Close } from '@/app/components/icons'

export default function Login() {
  const { isLoading, router, errorMessage, onSubmit } = useSignin()
  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="relative w-2/3 h-full flex justify-center items-center">
        <div
          role='button'
          className='absolute right-0 top-20'
          onClick={() => router.push('/')}
        >
          <Close />
        </div>
        <div className='border-2 rounded-md bg-white px-8 py-8 w-full'>
          <h2 className="text-xl lg:text-[1.5vw] mb-1 font-bold">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="my-10 relative">
              <input
                name='email'
                id='email'
                type="email"
                placeholder="Email"
                className="w-full h-11 mb-8 rounded-md border-2 px-2"
              />
              <input
                name='password'
                id='password'
                type="password"
                placeholder="Password"
                className="w-full h-11 rounded-md border-2 px-2"
              />
              <span className='text-sm text-red-500 absolute bottom-[-32px] left-0'>{errorMessage}</span>
            </div>
            <div className="text-right">
              <button
                className="w-28 h-11 bg-gray-800 text-white px-4 py-2 rounded-md"
                disabled={isLoading}
              >
                {isLoading && <Spinner />}
                Login
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
