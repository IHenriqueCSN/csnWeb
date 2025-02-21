import ServiceHeader, { RGB } from "@/components/ServiceHeader";

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

export default function Upgrades() {
    return (
      <>
      <main className="mt-8">
        <ServiceHeader details={supportDetails} />
      </main>
      </>
    )
  }