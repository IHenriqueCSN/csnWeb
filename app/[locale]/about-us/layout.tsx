import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('titles');
    return {
        title: t('about-us') +  " | CSN Technology"
    }
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}