import ContactForm from "@/components/ContactForm";
import { getTranslations } from "next-intl/server";

export default async function Contato() {
    const t = await getTranslations('contact');
    return (
      <>
        <main className="my-8">
          <ContactForm t={{title: t('title'), name: t('name'), surname: t('surname'), email: t('email'), phone: t('phone'), subject: t('subject'), select_subject: t('select_subject'), message: t('message'), send: t('send'), required_field: t('required_field'), required_subject: t('required_subject'), required_agreement: t('required_agreement'), agreement: t('agreement'), invalid_email: t('invalid_email'), sending: t('sending'), success_message: t('success_message'), error_message: t('error_message'), captcha_error: t('captcha_error'), received_message: t('received_message')}} />
          </main>
      </>
    )
  }