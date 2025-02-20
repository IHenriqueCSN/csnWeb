import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Glovia ERP® | CSN Techonology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}