"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPaperPlane, FaBuilding, FaRegAddressCard } from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyPolicy: boolean;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit: SubmitHandler<ContactFormData> = data => {
    console.log(data);
    // Add form submission logic here
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mt-20 mb-2">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-l-2 md:border-l-4 border-blue-600">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <FaBuilding className="h-6 w-6 md:h-8 md:w-8 text-white opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              Entre em Contato Conosco
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-8 p-4 md:p-8">          {/* First Name */}
        <div className="relative sm:col-span-1">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
            <FaRegAddressCard className="inline mr-1 text-blue-600 h-3 w-3 sm:h-4 sm:w-4" />
                Nome
            </label>
            <input
              {...register("firstName", { required: true })}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium"
              placeholder="Nome"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
            )}
          </div>

          {/* Last Name */}
          <div className="relative sm:col-span-1">
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
          <FaRegAddressCard className="inline mr-1 text-blue-600 h-3 w-3 sm:h-4 sm:w-4" />
              Sobrenome
            </label>
            <input
              {...register("lastName", { required: true })}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium"
              placeholder="Sobrenome"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
            )}
          </div>

          {/* Email */}
          <div className="relative col-span-1 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
              📧 Email Corporativo
            </label>
            <input
              {...register("email", { 
                required: true,
                pattern: /^\S+@\S+$/i 
              })}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium"
              placeholder="john.doe@businesscorp.com"
            />
            {errors.email?.type === "required" && (
              <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="mt-1 text-sm text-red-600">Por favor informe um email válido</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative col-span-1 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
              📞 Telefone
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium"
              placeholder="+55 (11) 99999-9999"
            />
          </div>

          {/* Subject */}
          <div className="relative col-span-1 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
              📑 Assunto
            </label>
            <select
              {...register("subject", { required: true })}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 appearance-none cursor-pointer"
            >
              <option value="">Selecione um tópico...</option>
              <option value="sales">Business Synergy Proposal</option>
              <option value="support">Leveraging Core Competencies</option>
              <option value="partnership">Strategic Alliance Opportunity</option>
              <option value="other">Other Mission-Critical Matter</option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">Por favor selecione um assunto</p>
            )}
          </div>

          {/* Message */}
          <div className="relative col-span-1 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
              📄 Mensagem
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={3}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium resize-none"
              placeholder="..."
            />
          </div>

          {/* Privacy Policy - Improved Version */}
          {/* Privacy Policy - Fixed Version */}
            <div className="col-span-1 sm:col-span-2">
            <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="relative flex-shrink-0">
                <input
                    {...register("privacyPolicy", { required: true })}
                    id="privacyPolicy"
                    type="checkbox"
                    className="peer opacity-0 absolute h-4 w-4 sm:h-5 sm:w-5 cursor-pointer"
                />
                <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-slate-400 bg-white rounded-sm flex items-center justify-center transition-all duration-200 peer-hover:border-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 peer-checked:border-blue-600">
                    <svg 
                    className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    viewBox="0 0 14 14" 
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                </div>
                <label 
                htmlFor="privacyPolicy" 
                className="text-xs sm:text-sm text-slate-600 leading-snug sm:leading-normal cursor-pointer hover:text-slate-700 transition-colors"
                >
                Eu concordo com a{' '}
                <span className="text-blue-600 hover:underline">
                    política de privacidade
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-400 ml-1">(LGPD)</span>
                <span className="sm:hidden text-xs text-slate-400 block mt-1">Lei Geral de Proteção de Dados</span>
                </label>
            </div>
            {errors.privacyPolicy && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg 
                    className="w-4 h-4 mr-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                >
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                </svg>
                Você deve concordar para continuar.
                </p>
            )}
            </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 mt-4 sm:mt-8">
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5 text-blue-100" />
              <span>Enviar Mensagem</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;