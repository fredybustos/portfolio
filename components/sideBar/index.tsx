"use client"
import Link from 'next/link'
import { SOCIAL_NETWORK } from '../catalogs'
import { signOut, useSession } from 'next-auth/react'
import { Logout } from '../icons'

export default function SideBar() {
  const { data: session } = useSession()
  return (
    <div className='lg:border-dotted lg:border-r-2 lg:pr-8 border-[#b4b2b2] sticky top-0'>
      <div className="sticky top-0 lg:h-[86vh]">
        <div className='flex justify-between items-center'>
          <h3 className='text-xs font-medium'>Fredy Bustos</h3>
          {session?.user &&
            <div
              role='button'
              className='text-xs font-medium flex items-center'
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Logout
              <Logout size={5} style={{ marginLeft: 10 }} />
            </div>
          }
        </div>
        <div className='mt-12 h-[88%]'>
          <h2 className='text-xl lg:text-[1.5vw] mb-2 font-bold'>Fredy Bustos</h2>
          <h3 className='text-base lg:text-[1.1vw] font-medium mb-10'>Frontend developer</h3>
          <p className='mb-4 text-sm font-normal'>
            I am a frontend developer with more than 5 years of experience.
            My expertise lies in harnessing the capabilities of HTML, CSS, and JavaScript frameworks, such as React, React Native,
            styled components, Material UI, and Apollo.
          </p>
          <p className='mb-4 text-sm font-normal'>
            As a Frontend Developer, I have honed my skills and expertise to deliver visually appealing and user-friendly web applications.
            My continuous drive to stay updated on the latest industry developments helps propel product development within collaborative development teams
          </p>
        </div>
        <nav className='mt-10 lg:mt-0'>
          <ul className='flex gap-5 justify-center'>
            {SOCIAL_NETWORK.map(({ id, label, route, icon: IconComponent }) => (
              <Link
                key={id}
                href={route}
                target='_blank'
                className='flex border-2 rounded-md py-2 px-4 hover:border-[#a4a5a7]'
              >
                <IconComponent />
                <span className='ml-2 hidden md:block'>{label}</span>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
