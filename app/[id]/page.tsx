import { Post } from '@prisma/client'
import React from 'react'
import Markdown from 'markdown-to-jsx'
import { MARK_OPTIONS } from '@/constants'
import { formatDate } from '@/utils'
import Breadcrumbs from '@/components/breadcrumbs'
import { getPostById } from '@/services/server'

type PostProps = {
  params: { id: string },
  searchParams: Record<string, string>
}
export default async function Post(props: PostProps) {
  const { id } = props.params
  const { post } = await getPostById(id)

  return (
    <div className='lg:pl-8 pt-12 lg:pt-0 bg-white backdrop-blur lg:overflow-auto'>
      <Breadcrumbs breads={[{ route: '/', label: 'Posts' }]}>
        <span className='truncate'>{post.title}</span>
      </Breadcrumbs>
      <figure
        className="border-b-4 border-2 rounded-xl rounded-br-xl rounded-bl-xl m-0 md:h-[350px]"
        style={{ borderBottomColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <img
          src={post.image}
          alt="post-image"
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <h5 className="text-gray-900 text-2xl home-read py-4">{post.title}</h5>
      <span className='text-sm text-[#a4a5a7]'>Fecha de creación: {formatDate(post.inserted)}</span>
      <Markdown options={MARK_OPTIONS} className='w-full overflow-x-hidden'>
        {post.content}
      </Markdown>
    </div>
  )
}
