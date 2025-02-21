import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integração | CSN Technology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}