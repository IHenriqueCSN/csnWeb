"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato Conosco
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nossos especialistas estão aqui para ajudar.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <div className="mt-1">
              <input
                {...register("firstName", { required: true })}
                type="text"
                id="firstName"
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
              )}
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Sobrenome
            </label>
            <div className="mt-1">
              <input
                {...register("lastName", { required: true })}
                type="text"
                id="lastName"
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                {...register("email", { 
                  required: true,
                  pattern: /^\S+@\S+$/i 
                })}
                type="email"
                id="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              />
              {errors.email?.type === "required" && (
                <p className="mt-1 text-sm text-red-600">Este campo é obrigatório</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="mt-1 text-sm text-red-600">Por favor informe um email válido</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Número de Telefone
            </label>
            <div className="mt-1">
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Assunto
            </label>
            <div className="mt-1">
              <select
                {...register("subject", { required: true })}
                id="subject"
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              >
                <option value="">Selecione</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">Por favor selecione um assunto</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <div className="mt-1">
              <textarea
                {...register("message", { required: true })}
                id="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">Por favor informe sua mensagem</p>
              )}
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="sm:col-span-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <input
                  {...register("privacyPolicy", { required: true })}
                  id="privacyPolicy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="privacyPolicy" className="text-sm text-gray-500">
                  Concordo com a política de privacidade e termos de serviço
                </label>
                {errors.privacyPolicy && (
                  <p className="mt-1 text-sm text-red-600">You must agree to continue</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;