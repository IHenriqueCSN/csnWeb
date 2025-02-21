import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Suporte Técnico | CSN Technology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}