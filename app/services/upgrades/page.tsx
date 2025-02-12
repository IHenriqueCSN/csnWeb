import ServiceHeader, { RGB } from "@/components/ServiceHeader";

const upgradesColors = {
  primary: 'rgb(15, 32, 45)' as RGB,      // Deep navy blue
  secondary: 'rgb(192, 202, 211)' as RGB, // Metallic silver
  tertiary: 'rgb(255, 255, 255)' as RGB   // Pure white
};

const upgradesDetails = {
    title: "Upgrades",
    colorScheme: upgradesColors,
    text: "Tenha uma infraestrutura de alta performance para suportar o crescimento do seu negócio. Com o serviço de Infraestrutura, é possível garantir que a sua empresa tenha os recursos necessários para suportar o aumento da demanda e a expansão dos negócios.",
    backgroundImage: "/images/upgrade.jpg"
}

export default function Upgrades() {
    return (
      <>
      <main className="mt-8">
        <ServiceHeader details={upgradesDetails} />
      </main>
      </>
    )
  }