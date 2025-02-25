import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import { getTranslations } from "next-intl/server";
import ScrollSpy from "@/components/ScrollingSection";

const integrationColors = {
  primary: 'rgb(15, 32, 45)' as RGB,
  secondary: 'rgb(192, 202, 211)' as RGB,
  tertiary: 'rgb(255, 255, 255)' as RGB
};

const integrationDetails = {
    title: "Integração",
    colorScheme: integrationColors,
    text: "Com o serviço de Integração ERP, é possível conectar diferentes sistemas da sua empresa para melhorar a eficiência e a comunicação interna. Com ele, é possível automatizar processos, reduzir erros e retrabalho, e melhorar a tomada de decisão.",
    backgroundImage: "/images/integracao.jpg"
}

const sectionData = [
  { id: 'why-use', title: 'Strategic Advantage', content: "" },
  { id: 'benefits', title: 'Enterprise Benefits', content: "" },
  { id: 'how-it-works', title: 'Operational Excellence', content: "" },
  { id: 'testimonials', title: 'Industry Recognition', content: "" },
];

export default async function Integration() {
    try {
      const t = await getTranslations('services');
      const s = await getTranslations('sectiondata.integration');
      const translatedDetails = {
        ...integrationDetails,
        title: t('integration'),
        text: t('integration_description')
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