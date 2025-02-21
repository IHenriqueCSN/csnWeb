import AboutUs from "@/components/AboutUs";
import { getTranslations } from "next-intl/server";

export default async function Contato() {
  const t = await getTranslations("about_us")
    return (
      <>
      <main className="mt-8">
        <AboutUs
          t={{
            header: t('header'),
            header_description: t('header_description'),
            pillars: t('pillars'),
            excellence_title: t('excellence_title'),
            excellence_description: t('excellence_description'),
            partnership_title: t('partnership_title'),
            partnership_description: t('partnership_description'),
            innovation_title: t('innovation_title'),
            innovation_description: t('innovation_description'),
            partners: t('partners'),
            cta_title: t('cta_title'),
            cta_description: t('cta_description'),
            cta_call: t('cta_call')
          }}
        />
      </main>
      </>
    )
  }