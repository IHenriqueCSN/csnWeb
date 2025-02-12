import ServiceHeader, { RGB } from "@/components/ServiceHeader";

const gloviaColors = {
  primary: 'rgb(39, 5, 0)' as RGB,
  secondary: 'rgb(192, 202, 211)' as RGB,
  tertiary: 'rgb(255, 255, 255)' as RGB
};

const gloviaDetails = {
    title: "Glovia",
    colorScheme: gloviaColors,
    text: "O Glovia ERP é um sistema de gestão empresarial completo e integrado, que oferece soluções para todas as áreas da sua empresa. Com ele, é possível otimizar processos, reduzir custos e aumentar a produtividade da sua equipe.",
    backgroundImage: "/images/glovia.jpg"
}

export default function Glovia() {
    return (
      <>
      <main className="mt-8">
        <ServiceHeader details={gloviaDetails} />
      </main>
      </>
    )
  }