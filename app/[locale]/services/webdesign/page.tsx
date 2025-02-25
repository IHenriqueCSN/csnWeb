import ScrollSpy from "@/components/ScrollingSection"
import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import { getTranslations } from "next-intl/server";

const webdesignColors = {
  primary: 'rgb(37, 37, 0)' as RGB,      // Deep navy blue
  secondary: 'rgb(192, 202, 211)' as RGB, // Metallic silver
  tertiary: 'rgb(255, 255, 255)' as RGB   // Pure white
};

const webdesignDetails = {
    title: "Web Design",
    colorScheme: webdesignColors,
    text: "Crie um site moderno e responsivo para sua empresa com o nosso serviço de web design. Com ele, é possível melhorar a experiência do usuário, aumentar a visibilidade da sua marca e gerar mais leads e vendas para o seu negócio.",
    backgroundImage: "/images/webdesign.jpg"
}

const sectionData = [
  {id: "why-use", title: "Strategic Advantage", content: "fsmkldfsml"}
];

export default async function WebDesign() {
    try {
      const t = await getTranslations('services');
      const translatedDetails = {
        ...webdesignDetails,
        text: t('webdesign_description'),
        title: t('webdesign')
      };

      return (
        <>
        <main className="mt-8">
          <ServiceHeader details={translatedDetails} />
          <ScrollSpy data={sectionData} />
        </main>
        </>
      )
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }