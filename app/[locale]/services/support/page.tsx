import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import { getTranslations } from "next-intl/server";
import ScrollSpy from "@/components/ScrollingSection";

const supportColors = {
  primary: 'rgb(39, 5, 0)' as RGB,      // Deep navy blue
  secondary: 'rgb(192, 202, 211)' as RGB, // Metallic silver
  tertiary: 'rgb(255, 255, 255)' as RGB   // Pure white
};

const supportDetails = {
    title: "Suporte Técnico",
    colorScheme: supportColors,
    text: "Conte com um suporte técnico especializado para resolver problemas e manter a estabilidade do seu sistema. Com o serviço de Suporte Técnico, é possível garantir que a sua empresa tenha o apoio necessário para manter o seu sistema funcionando de forma eficiente e segura.",
    backgroundImage: "/images/support.jpg"
}

const sectionData = [
  { id: 'why-use', title: 'Strategic Advantage', content: "" },
  { id: 'benefits', title: 'Enterprise Benefits', content: "" },
  { id: 'how-it-works', title: 'Operational Excellence', content: "" },
  { id: 'testimonials', title: 'Industry Recognition', content: "" },
];

export default async function Upgrades() {
    try {
      const t = await getTranslations('services');
      const s = await getTranslations('sectiondata.support');

      const translatedDetails = {
        ...supportDetails,
        text: t('support_description'),
        title: t('support')
      };

      const translatedSectionData = sectionData.map(section => ({
        ...section,
        title: s(section.id),
        content: s(`${section.id}_description`)
      }))
      return (
        <>
        <main className="mt-8">
          <ServiceHeader details={translatedDetails} />
          <ScrollSpy data={translatedSectionData} />
        </main>
        </>
      )
    } catch (error) {
      console.log('Translation error:', error);
      throw error;
    }
  }