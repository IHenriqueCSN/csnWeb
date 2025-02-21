import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "CSN Technology",
  description: "Construindo soluções inovadoras.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const n = await getTranslations('navbar');
  const s = await getTranslations('services');
  const t = await getTranslations('footer')
  const w = await getTranslations('whatsapp');

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <NavBar n={{home: n('home'), about_us: n('about_us'), services: n('services'), contact: n('contact')}} s={{upgrades: s('upgrades'), glovia: s('glovia'), integration: s('integration'), webdesign: s('webdesign'), infrastructure: s('infrastructure'), support: s('support')}} />
        {children}
        <WhatsAppBubble w={{whatsapp: w('whatsapp')}} />
        <Footer companyName="CSN Technology" t={{about_us: t('about_us'), privacy: t('privacy'), terms: t('terms'), contact: t('contact'), motto: t('motto'), rights: t('rights')}} />
      </body>
    </html>
  );
}
