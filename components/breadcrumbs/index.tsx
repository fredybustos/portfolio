import Link from 'next/link'
import React from 'react'

type Breads = {
  route: string
  label: string
}
export default function Breadcrumbs({ breads, children }: { breads: Array<Breads>, children: React.ReactNode }) {
  return (
    <nav className="flex sticky top-0 bg-white" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-5 w-3/4">
        {breads.map(({ route, label }) => (
          <li key={route}>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={route}
                className="ml-1 text-sm font-medium text-blue-600 md:ml-2 dark:hover:underline"
              >
                {label}
              </Link>
            </div>
          </li>
        ))}
        <div className='flex items-center w-full'>
          <svg
            className="w-3 h-3 text-gray-400 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2" d="m1 9 4-4-4-4"
            />
          </svg>
          {children}
        </div>
      </ol>
    </nav>
  )
}
