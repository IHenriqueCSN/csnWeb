import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('titles');
    return {
        title: t('support') + " | CSN Technology"
    }
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}