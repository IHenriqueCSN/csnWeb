import { getTranslations } from 'next-intl/server';
import Link from 'next/link';	

interface NotFoundTranslations {
    header: string;
    header_description_1: string;
    header_description_2: string;
    return_title: string;
    return_cta: string;
}

export default async function NotFound() {
  const translations = await getTranslations('not_found');
  const t: NotFoundTranslations = {
    header: translations('header'),
    header_description_1: translations('header_description_1'),
    header_description_2: translations('header_description_2'),
    return_title: translations('return_title'),
    return_cta: translations('return_cta')
  };
  return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-orange-900 text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold">🚧 {t.header} 🚧</h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
              {t.header_description_1}
              {t.header_description_2}
          </p>
          <p className="mt-3 text-base md:text-lg">
              {t.return_title}
          </p>
          <Link href="/" className="mt-3 md:text-lg underline">{t.return_cta}</Link>
      </div>
  );
}