import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contato() {
    return (
      <>
        <main className="my-8">
          <ContactForm />
          </main>
        <Footer companyName="CSN Technology" />
      </>
    )
  }