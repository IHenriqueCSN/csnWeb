import AboutUs from "@/components/AboutUs";
import { getTranslations } from "next-intl/server";

export default async function Contato() {
  const t = await getTranslations("about_us");
  const c = await getTranslations('contact_modal');
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
            cta_call: t('cta_call'),
            principles: t('principles'),
            mission: t('mission'),
            vision: t('vision'),
            values: t('values'),
            commitment: t('commitment'),
            ethics: t('ethics'),
            collaboration: t('collaboration'),
            excellence: t('excellence'),
            mission_text: t('mission_text'),
            vision_text: t('vision_text'),
            values_text: t('values_text'),
            commitment_text: t('commitment_text'),
            ethics_text: t('ethics_text'),
            collaboration_text: t('collaboration_text'),
            excellence_text: t('excellence_text'),
            contact_title: c('title'),
            contact_whatsapp: c('whatsapp'),
            contact_email: c('email'),
            contact_close: c('close')
          }}
        />
      </main>
      </>
    )
  }