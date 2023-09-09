import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import SideBar from '@/components/sideBar'
import SessionProvider from '@/context/SessionProvider'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Created by fredy bustos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className}>
        <SessionProvider>
          <main className='w-full m-auto max-w-[2024px] h-[100vh] bg-white p-2 lg:p-6'>
            <section className='border-2 border-[#b4b2b2] rounded-[25px] h-full min-h-[200px] p-4 lg:p-8'>
              <div className='w-full h-full min-h-full overflow-auto'>
                <div className='lg:grid lg:grid-cols-[0.5fr_1fr] h-full inline'>
                  <SideBar />
                  {children}
                </div>
              </div>
            </section>
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
