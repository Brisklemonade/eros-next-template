import '@radix-ui/themes/styles.css' // If you don't want to use radix themes delete this
import '@/styles/globals.css'
import { config } from 'app-config'
import { cn } from '@/lib'
import { Theme } from '@radix-ui/themes'
import { Inter as FontSans } from 'next/font/google'
import { Header, Footer, PageLayout } from '@/components/global'
import type { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: `${config.name}`,
  },
  description: `A ${config.name} website`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Theme className="bg-background text-primary">
          <Header />
          <PageLayout>{children}</PageLayout>
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
