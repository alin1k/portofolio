import "./globals.css"
import { DM_Sans, Rubik } from "next/font/google"

const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: "--font-dm-sans"
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: "--font-rubik"
})

export const metadata = {
  title: 'Olteanu Alin - Portofolio',
  description: 'FullStack developer Olteanu Alin Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${rubik.variable} bg-primary flex flex-col text-light p-3`} suppressHydrationWarning={true}>
        <main className="self-center w-full sm:w-3/4 lg:w-1/2 2xl:w-1/3 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
