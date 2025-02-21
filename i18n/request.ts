import { getRequestConfig } from 'next-intl/server';
import{ notFound } from 'next/navigation';

const locales = ['en', 'pt'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale; // First await resolves the locale Promise
  if (!locale || !locales.includes(locale)) notFound();
  const messages = await import(`@/public/locales/${locale}/common.json`); // Second await resolves the import
  
  return { // Returns plain object, not wrapped in Promise
    locale,
    messages: messages.default
  };
});