import { Eye } from "@/app/components/icons"
import Link from "next/link"
import { getPosts } from "@/services/server"

export default async function Posts() {
  const { posts } = await getPosts()
  return (
    <div className="lg:pl-8 pt-12 lg:pt-0 bg-white backdrop-blur">
      <h2 className="pb-6 text-gray-900 text-2xl sticky top-0 z-10 bg-white block lg:hidden">Blog</h2>
      <ul className="relative">
        {posts.map(({ id, title, image }) => (
          <Link href={id} key={id} className="home-link cursor-pointer">
            <figure
              className="border-b-4 border-2 rounded-xl rounded-br-xl rounded-bl-xl m-0 md:h-[350px]"
              style={{ borderBottomColor: 'rgba(0, 0, 0, 0.2)' }}>
              <img
                src={image}
                alt="post-image"
                className="w-full h-full object-cover rounded-xl"
              />
            </figure>
            <div className="bg-[#0000000a] p-4 rounded-br-lg rounded-bl-lg mb-10">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <h5 className="mb-2 text-gray-900 text-lg md:text-2xl home-read">{title}</h5>
                <div className="flex border-2 rounded-md py-2 px-4 home-icon w-max-40 justify-center mt-5">
                  <Eye />
                  <span className="ml-2">Read more</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}
