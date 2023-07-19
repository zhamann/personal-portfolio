import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const roboto_flex = Roboto_Flex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Personal portfolio of Zac Hamann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_flex.className}>
        <div className='bg-[#F5F5F5]'>
          {children}
        </div>
      </body>
    </html>
  )
}
