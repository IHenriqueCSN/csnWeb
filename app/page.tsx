import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";
import InfoSection from "@/components/InfoSection";

const baseServices = [
  {
    title: "Instalações e Upgrades",
    description: 'O serviço de Instalações e Upgrades tem como objetivo manter o seu sistema ERP sempre atualizado. Com ele, é possível garantir que a sua empresa esteja utilizando a versão mais recente do software, com todas as funcionalidades e correções de segurança disponíveis.',
    image: "/images/upgrade.jpg",
    alignment: "left",
    anchor: "upgrades"
  },
  {
    title: "Glovia ERP",
    description: 'O Glovia ERP é um sistema de gestão empresarial completo e integrado, que oferece soluções para todas as áreas da sua empresa. Com ele, é possível otimizar processos, reduzir custos e aumentar a produtividade da sua equipe.',
    image: "/images/glovia.jpg",
    alignment: "right",
    anchor: "glovia"
  },
  {
    title: "Integração ERP",
    description: 'Com o serviço de Integração ERP, é possível conectar diferentes sistemas da sua empresa para melhorar a eficiência e a comunicação interna. Com ele, é possível automatizar processos, reduzir erros e retrabalho, e melhorar a tomada de decisão.',
    image: "/images/integracao.jpg",
    alignment: "left",
    anchor: "integracao"
  },
  {
    title: "Web Design",
    description: 'Crie um site moderno e responsivo para sua empresa com o nosso serviço de web design. Com ele, é possível melhorar a experiência do usuário, aumentar a visibilidade da sua marca e gerar mais leads e vendas para o seu negócio.',
    image: "/images/webdesign.jpg",
    alignment: "right",
    anchor: "webdesign"
  },
  {
    title: "Infraestrutura",
    description: 'Tenha uma infraestrutura de alta performance para suportar o crescimento do seu negócio. Com o serviço de Infraestrutura, é possível garantir que a sua empresa tenha os recursos necessários para suportar o aumento da demanda e a expansão dos negócios.',
    image: "/images/infra.jpg",
    alignment: "left",
    anchor: "infraestrutura"
  },
  {
    title: "Suporte Técnico",
    description: 'Conte com um suporte técnico especializado para resolver problemas e manter a estabilidade do seu sistema. Com o serviço de Suporte Técnico, é possível garantir que a sua empresa tenha o apoio necessário para manter o seu sistema funcionando de forma eficiente e segura.',
    image: "/images/support.jpg",
    alignment: "right",
    anchor: "suporte"
  }
];

const infoSections = baseServices.map(({ image, title, anchor, description, alignment }) => ({
  title,
  description,
  image,
  alignment,
  anchor
}));

const services = baseServices.map(({ image, title, anchor }) => ({
  image,
  name: title,
  anchor
}));

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-8">
        <ServicesGrid services={services} />
        <InfoSection sections={infoSections} />
        </main>
      <Footer companyName="CSN Technology" />
    </>
  )
}