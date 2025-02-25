import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import { getTranslations } from "next-intl/server";

const upgradesColors = {
  primary: 'rgb(15, 32, 45)' as RGB,
  secondary: 'rgb(192, 202, 211)' as RGB,
  tertiary: 'rgb(255, 255, 255)' as RGB
};

const upgradesDetails = {
    title: "Upgrades",
    colorScheme: upgradesColors,
    text: "Tenha uma infraestrutura de alta performance para suportar o crescimento do seu negócio. Com o serviço de Infraestrutura, é possível garantir que a sua empresa tenha os recursos necessários para suportar o aumento da demanda e a expansão dos negócios.",
    backgroundImage: "/images/upgrade.jpg"
}

export default async function Upgrades() {
    try {
      const t = await getTranslations('services');
      const translatedDetails = {
        ...upgradesDetails,
        text: t('upgrades_description'),
        title: t('upgrades')
      }
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