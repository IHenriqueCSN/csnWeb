import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import ModulesGrid from "@/components/ModulesGrid";
import { FaStore, FaUser, FaAddressBook, FaTractor, FaChartPie, FaIndustry, FaServer, FaChartArea, FaMoneyBill } from "react-icons/fa";
import ScrollSpy from "@/components/ScrollingSection";
import { getTranslations } from "next-intl/server";

const gloviaColors = {
  primary: 'rgb(39, 5, 0)' as RGB,
  secondary: 'rgb(192, 202, 211)' as RGB,
  tertiary: 'rgb(255, 255, 255)' as RGB
};

const gloviaDetails = {
  title: "Glovia® ERP",
  colorScheme: gloviaColors,
  text: "O Glovia ERP é um sistema de gestão empresarial completo e integrado, que oferece soluções para todas as áreas da sua empresa. Com ele, é possível otimizar processos, reduzir custos e aumentar a produtividade da sua equipe.",
  backgroundImage: "/images/glovia.jpg"
}

const sectionData = [
  { id: 'why-use', title: 'Strategic Advantage', content: "" },
  { id: 'benefits', title: 'Enterprise Benefits', content: "" },
  { id: 'how-it-works', title: 'Operational Excellence', content: "" },
  { id: 'testimonials', title: 'Industry Recognition', content: "" },
];

const gloviaModules = [
  { name: "Gerenciamento de Produtos", icon: <FaStore />, description: "Controle completo do ciclo de vida de produtos, desde cadastro até rastreamento de estoque e especificações técnicas" },
  { name: "Gerenciamento de Clientes", icon: <FaUser />, description: "Centralização de dados de clientes, histórico de compras e interações para relacionamento personalizado" },
  { name: "Gerenciamento de Fornecedores", icon: <FaAddressBook />, description: "Gestão estratégica de parceiros comerciais com avaliação de desempenho e controle de processos de compras" },
  { name: "Business Intelligence", icon: <FaChartPie />, description: "Análise de dados em tempo real com dashboards interativos e relatórios para tomada de decisão estratégica" },
  { name: "Cadeia de Suprimentos", icon: <FaTractor />, description: "Otimização logística integrada com gestão de demanda, planejamento de distribuição e controle de inventário" },
  { name: "Manufatura", icon: <FaIndustry />, description: "Controle de processos produtivos com gestão de recursos, ordens de produção e garantia de qualidade" },
  { name: "Gerenciamento de Serviços", icon: <FaServer />, description: "Organização de contratos, SLA's e atendimentos técnicos para excelência em serviços pós-venda" },
  { name: "Gerenciamento de Projetos", icon: <FaChartArea />, description: "Planejamento e acompanhamento de projetos com alocação de recursos, cronogramas e indicadores de desempenho" },
  { name: "Financeiro", icon: <FaMoneyBill />, description: "Gestão integrada de contas, fluxo de caixa, cobranças e conformidade com normas fiscais contábeis" }
];

export default async function Glovia() {
  try {
    const t = await getTranslations('services');
    const m = await getTranslations('modules.glovia');
    const s = await getTranslations('sectiondata.glovia');
    
    const translatedDetails = {
      ...gloviaDetails,
      title: t('glovia'),
      text: t('glovia_description')
    };

    const translatedModules = gloviaModules.map(module => ({
      ...module,
      name: m(`${module.name.toLowerCase().replace(/\s+/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`),
    description: m(`descriptions.${module.name.toLowerCase().replace(/\s+/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`)
    }));

    const translatedSectionData = sectionData.map(section => ({
      ...section,
      title: s(section.id),
      content: s(`${section.id}_description`)
    }))

    return (
      <>
        <main className="mt-8">
          <ServiceHeader details={translatedDetails} />
          <ModulesGrid modules={translatedModules} title={m('modules_title')} />
          <ScrollSpy data={translatedSectionData} />
        </main>
      </>
    );
  } catch (error) {
    console.log('Translation error:', error);
    throw error;
  }
}