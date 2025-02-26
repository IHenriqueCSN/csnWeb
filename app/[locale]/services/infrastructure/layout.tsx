import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('titles');
    return {
        title: t('infrastructure') + " | CSN Technology"
    }
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          {children}
        </>
    )
}