import ServiceHeader, { RGB } from "@/components/ServiceHeader";

const integrationColors = {
  primary: 'rgb(15, 32, 45)' as RGB,      // Deep navy blue
  secondary: 'rgb(192, 202, 211)' as RGB, // Metallic silver
  tertiary: 'rgb(255, 255, 255)' as RGB   // Pure white
};

const integrationDetails = {
    title: "Integração",
    colorScheme: integrationColors,
    text: "Com o serviço de Integração ERP, é possível conectar diferentes sistemas da sua empresa para melhorar a eficiência e a comunicação interna. Com ele, é possível automatizar processos, reduzir erros e retrabalho, e melhorar a tomada de decisão.",
    backgroundImage: "/images/integracao.jpg"
}

export default function Integration() {
    return (
      <>
      <main className="mt-8">
        <ServiceHeader details={integrationDetails} />
      </main>
      </>
    )
  }