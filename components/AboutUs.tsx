"use client";

import Image from "next/image";
import { Briefcase, Users, Trophy, Heart, Target, Star, Gem, Award, Scale, Handshake } from "lucide-react"; // Requires lucide-react package

interface AboutUsTranslations {
  header: string;  
  header_description: string;  
  pillars: string;  
  excellence_title: string;  
  excellence_description: string;  
  partnership_title: string;  
  partnership_description: string;  
  innovation_title: string;  
  innovation_description: string;  
  partners: string;
  cta_title: string;
  cta_description: string;
  cta_call: string;
}

export default function AboutPage({t}: {t: AboutUsTranslations}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {t.header}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.header_description}
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/office.jpg"
              alt="Nossa Equipe"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t.pillars}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: t.excellence_title,
                text: t.excellence_description
              },
              { 
                icon: Users, 
                title: t.partnership_title,
                text: t.partnership_description
              },
              { 
                icon: Trophy, 
                title: t.innovation_title,
                text: t.innovation_description
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <item.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Principles Section */}
<div className="bg-gray-50 py-5 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
      Nossos Princípios Fundamentais
    </h2>
    
    <div className="space-y-8">
      {[
        {
          icon: Target,
          title: "Missão",
          content: "Na CSN Consultoria em Tecnologia, nossa missão é fornecer soluções tecnológicas integradas que impulsionem a transformação digital dos nossos clientes, agregando valor e contribuindo para o crescimento sustentável de seus negócios."
        },
        {
          icon: Star,
          title: "Visão",
          content: "Ser a consultoria em tecnologia mais confiável e inovadora do setor, reconhecida por nossa capacidade de antecipar tendências e criar soluções que capacitem nossos clientes a se destacarem em um mercado em constante evolução."
        },
        {
          icon: Scale,
          title: "Valores",
          content: "Fomentamos a criatividade e a busca por novas tecnologias e abordagens para resolver problemas de maneira eficaz."
        },
        {
          icon: Handshake,
          title: "Compromisso com o Cliente",
          content: "Nos dedicamos a enteder e atender às necessidades únicas de cada cliente, priorizando sua satisfação e sucesso."
        },
        {
          icon: Gem,
          title: "Ética e Transparência",
          content: "Atuamos com integridade, construindo relacionamentos baseados na confiança e na honestidade."
        },
        {
          icon: Users,
          title: "Colaboração",
          content: "Valorizamos o trabalho em equipe, acreditando que parcerias efetivas levam a soluções mais robustas e resultados superiores."
        },
        {
          icon: Award,
          title: "Excelência",
          content: "Buscamos a excelência em tudo o que fazemos, desde a entrega dos nossos serviços até o relacionamento com nossos clientes e colaboradores."
        }
      ].map((principle, index) => {
        const IconComponent = principle.icon;
        
        return (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-50 p-5 rounded-xl min-w-[100px] flex items-center justify-center">
                <IconComponent className="w-12 h-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-6">{principle.title}</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  {principle.content.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      )}
    </div>
  </div>
</div>

      {/* Client Logos Placeholder */}
      <div className="bg-gray-50 pt-0 pb-20" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t.partners}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">
            {t.cta_title}
          </h2>
          <p className="text-lg mb-8">
            {t.cta_description}
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => window.location.href = "/contact"}>
            {t.cta_call}
          </button>
        </div>
      </div>
    </div>
  );
}