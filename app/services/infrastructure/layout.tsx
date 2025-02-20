import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Infraestrutura | CSN Technology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}