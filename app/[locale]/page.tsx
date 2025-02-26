  import Hero from "@/components/Hero";
  import ServicesGrid from "@/components/ServicesGrid";
  import InfoSection from "@/components/InfoSection";
  import { getTranslations } from "next-intl/server";

  const baseServices = [
    {
      title: "Instalações e Upgrades",
      description: 'O serviço de Instalações e Upgrades tem como objetivo manter o seu sistema ERP sempre atualizado. Com ele, é possível garantir que a sua empresa esteja utilizando a versão mais recente do software, com todas as funcionalidades e correções de segurança disponíveis.',
      image: "/images/upgrade.jpg",
      alignment: "left",
      anchor: "upgrades"
    },
    {
      title: "Glovia® ERP",
      description: 'O Glovia® ERP é um sistema de gestão empresarial completo e integrado, que oferece soluções para todas as áreas da sua empresa. Com ele, é possível otimizar processos, reduzir custos e aumentar a produtividade da sua equipe.',
      image: "/images/glovia.jpg",
      alignment: "right",
      anchor: "glovia"
    },
    {
      title: "Integração ERP",
      description: 'Com o serviço de Integração ERP, é possível conectar diferentes sistemas da sua empresa para melhorar a eficiência e a comunicação interna. Com ele, é possível automatizar processos, reduzir erros e retrabalho, e melhorar a tomada de decisão.',
      image: "/images/integracao.jpg",
      alignment: "left",
      anchor: "integration"
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
      anchor: "infrastructure"
    },
    {
      title: "Suporte Técnico",
      description: 'Conte com um suporte técnico especializado para resolver problemas e manter a estabilidade do seu sistema. Com o serviço de Suporte Técnico, é possível garantir que a sua empresa tenha o apoio necessário para manter o seu sistema funcionando de forma eficiente e segura.',
      image: "/images/support.jpg",
      alignment: "right",
      anchor: "support"
    }
  ];

  const translationKeys: { [key: string]: string } = {
    "Instalações e Upgrades": "upgrades",
    "Glovia® ERP": "glovia",
    "Integração ERP": "integration",
    "Web Design": "webdesign",
    "Infraestrutura": "infrastructure",
    "Suporte Técnico": "support",
    "Instalações e Upgrades_description": "upgrades_description",
    "Glovia® ERP_description": "glovia_description",
    "Integração ERP_description": "integration_description",
    "Web Design_description": "webdesign_description",
    "Infraestrutura_description": "infrastructure_description",
    "Suporte Técnico_description": "support_description"
  }

  export default async function Home() {
    try {
      const t = await getTranslations('common');
      const s = await getTranslations('services')
      const c = await getTranslations('contact_modal');

      const translatedServices = baseServices.map(service => ({
        ...service,
        title: s(translationKeys[service.title as keyof typeof translationKeys]),
        description: s(translationKeys[`${service.title}_description` as keyof typeof translationKeys])
      }))
      
      return (
        <>
          <Hero t={{ welcome: t('welcome'), description: t('description'), cta_call: t('cta_call'), motto: t('motto'), contact_title: c('title'), contact_whatsapp: c('whatsapp'), contact_email: c('email'), contact_close: c('close') }} />
          <main className="my-8">
            <ServicesGrid services={translatedServices} title={t('our_services')} />
            <InfoSection sections={translatedServices} t={{learn_more: t('learn_more')}} />
          </main>
        </>
      );
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }