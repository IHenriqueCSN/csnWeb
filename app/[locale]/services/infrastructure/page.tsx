import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import { getTranslations } from "next-intl/server";

const infrastructureColors = {
  primary: 'rgb(15, 32, 45)' as RGB,      // Deep navy blue
  secondary: 'rgb(192, 202, 211)' as RGB, // Metallic silver
  tertiary: 'rgb(255, 255, 255)' as RGB   // Pure white
};

const infrastructureDetails = {
    title: "Infraestrutura",
    colorScheme: infrastructureColors,
    text: "Tenha uma infraestrutura de alta performance para suportar o crescimento do seu negócio. Com o serviço de Infraestrutura, é possível garantir que a sua empresa tenha os recursos necessários para suportar o aumento da demanda e a expansão dos negócios.",
    backgroundImage: "/images/infra.jpg"
}

export default async function Infrastructure() {
    try {
      const t = await getTranslations('services');
      const translatedDetails = {
        ...infrastructureDetails,
        title: t('infrastructure'),
        text: t('infrastructure_description')
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