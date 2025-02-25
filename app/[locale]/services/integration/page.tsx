import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import { getTranslations } from "next-intl/server";

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

export default async function Integration() {
    try {
      const t = await getTranslations('services');
      const translatedDetails = {
        ...integrationDetails,
        title: t('integration'),
        text: t('integration_description')
      };
      return (
        <>
        <main className="mt-8">
          <ServiceHeader details={translatedDetails} />
        </main>
        </>
      )
    } catch (error) {
      console.log('Translation error:', error);
      throw error;
    }
  }