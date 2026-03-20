import { Header } from '../header'
import { Footer } from '../footer'
import { ThemeProvider } from 'next-themes'
import { GridContainer } from '@/components/ui/grid-layout'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      storageKey="theme"
      defaultTheme="system"
    >
      <div className="flex min-h-screen w-full flex-col bg-white dark:bg-zinc-950">
        <div className="relative mx-auto w-full max-w-[850px] flex-1 px-6 pt-12 md:px-10 md:pt-20">
          <GridContainer>
            <Header />
            {children}
            <Footer />
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  )
}
