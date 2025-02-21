import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Sobre Nós | CSN Technology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}