import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contato | CSN Techonology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}