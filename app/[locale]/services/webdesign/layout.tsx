import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Design | CSN Technology"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}