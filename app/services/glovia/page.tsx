import ServiceHeader, { RGB } from "@/components/ServiceHeader";
import ModulesGrid from "@/components/ModulesGrid";
import { FaStore, FaUser, FaAddressBook, FaTractor, FaChartPie, FaIndustry,
  FaServer, FaChartArea, FaMoneyBill } from "react-icons/fa";

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

export default function Glovia() {
    return (
      <>
      <main className="mt-8">
        <ServiceHeader details={gloviaDetails} />
        <ModulesGrid modules={gloviaModules} title="Módulos do Glovia ERP" />
      </main>
      </>
    )
  }