"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPaperPlane, FaBuilding, FaRegAddressCard, FaCheck, FaShieldAlt } from "react-icons/fa";
import Script from "next/script";

interface ContactFormTranslations {
  title: string;
  name: string;
  surname: string;
  email: string;
  invalid_email: string;
  phone: string;
  subject: string;
  select_subject: string;
  message: string;
  agreement: string;
  send: string;
  required_field: string;
  required_subject: string;
  required_agreement: string;
  success_message?: string;
  error_message?: string;
  captcha_error?: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyPolicy: boolean;
}

declare global {
  interface Window {
    grecaptcha: ReCaptchaV2.ReCaptcha;
    onRecaptchaLoad: () => void;
  }
}

const RECAPTCHA_SITE_KEY = "6LdCW-QqAAAAAMmW3HNoT2hVHthpEOi96Cu3mmgC";
const ContactForm = ({t}: {t: ContactFormTranslations}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'captcha-error'>('idle');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  useEffect(() => {
    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };
    
    return () => {
      window.onRecaptchaLoad = () => {};
    };
  }, []);
  
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      setFormStatus('submitting');
      
      if (!window.grecaptcha) {
        console.error("reCAPTCHA not loaded");
        setFormStatus('captcha-error');
        return;
      }
      
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {action: 'submit'});
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "adca3fd3-78bc-4baa-90c8-c8bdd3b5ff45",
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          form_name: "Contact Form Submission",
          "g-recaptcha-response": token, // Add recaptcha token
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* reCAPTCHA v3 Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`}
        strategy="afterInteractive"
      />

      <style jsx global>{`
        .grecaptcha-badge {
          visibility: hidden !important;
        }
      `}</style>
      
      <div className="py-8 px-4 sm:px-6 lg:px-8 mt-20 mb-2">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-l-2 md:border-l-4 border-blue-600">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <FaBuilding className="h-6 w-6 md:h-8 md:w-8 text-white opacity-90" />
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                {t.title}
              </h2>
            </div>
          </div>

          {formStatus === 'success' ? (
            <div className="p-8 text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                <FaCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {t.success_message || "Thank you for your message!"}
              </h3>
              <p className="text-slate-600">
                We&apos;ve received your submission and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-8 p-4 md:p-8">
              {/* First Name */}
              <div className="relative sm:col-span-1">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
                  <FaRegAddressCard className="inline mr-1 text-blue-600 h-3 w-3 sm:h-4 sm:w-4" />
                  {t.name}
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium"
                  placeholder={t.name}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{t.required_field}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="relative sm:col-span-1">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
                  <FaRegAddressCard className="inline mr-1 text-blue-600 h-3 w-3 sm:h-4 sm:w-4" />
                  {t.surname}
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium"
                  placeholder={t.surname}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{t.required_field}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative col-span-1 sm:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
                  📧 {t.email}
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
                  <p className="mt-1 text-sm text-red-600">{t.required_field}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="mt-1 text-sm text-red-600">{t.invalid_email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative col-span-1 sm:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
                  📞 {t.phone}
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
                  📑 {t.subject}
                </label>
                <select
                  {...register("subject", { required: true })}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 appearance-none cursor-pointer"
                >
                  <option value="">{t.select_subject}</option>
                  <option value="sales">Business Synergy Proposal</option>
                  <option value="support">Leveraging Core Competencies</option>
                  <option value="partnership">Strategic Alliance Opportunity</option>
                  <option value="other">Other Mission-Critical Matter</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{t.required_subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative col-span-1 sm:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wide mb-1 sm:mb-2">
                  📄 {t.message}
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={3}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-b-2 border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-400 font-medium resize-none"
                  placeholder="..."
                />
              </div>

              {/* Privacy Policy */}
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
                    {t.agreement}
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
                    {t.required_agreement}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="col-span-1 sm:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || !recaptchaLoaded}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${(formStatus === 'submitting' || !recaptchaLoaded) ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5 text-blue-100" />
                      <span>{t.send}</span>
                    </>
                  )}
                </button>
                
                {formStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm text-center">
                    {t.error_message || "There was an error submitting your message. Please try again."}
                  </div>
                )}
                
                {formStatus === 'captcha-error' && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm text-center">
                    {t.captcha_error || "CAPTCHA verification failed. Please try again later."}
                  </div>
                )}
              </div>
            </form>
          )}
          <div className="col-span-1 sm:col-span-2 flex items-center justify-center space-x-2 text-xs text-slate-500 mt-2 pb-8">
            <FaShieldAlt className="text-slate-400" />
            <span>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Terms of Service</a> apply.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;