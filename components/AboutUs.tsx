"use client";

import Image from "next/image";
import { Briefcase, Users, Trophy, Heart, Target, Star, Gem, Award, Scale, Handshake } from "lucide-react"; // Requires lucide-react package

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Transformando Negócios com Tecnologia de Ponta
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Na CSN Technology, combinamos expertise técnica com visão estratégica para impulsionar 
              a transformação digital de empresas. Com mais de uma década de experiência, entregamos 
              soluções ERP personalizadas que otimizam operações e geram resultados tangíveis.
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
            Nossos Pilares Estratégicos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: "Excelência Operacional",
                text: "Processos otimizados através de soluções ERP integradas"
              },
              { 
                icon: Users, 
                title: "Parceria Estratégica",
                text: "Relações de longo prazo baseadas em resultados mensuráveis"
              },
              { 
                icon: Trophy, 
                title: "Inovação Contínua",
                text: "Roadmap tecnológico alinhado às tendências globais"
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
            Nossos Parceiros
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
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-lg mb-8">
            Nossa equipe está preparada para entender seus desafios e propor
            soluções tecnológicas personalizadas.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Agendar Consultoria
          </button>
        </div>
      </div>
    </div>
  );
}