import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { SectionTitle, Container } from "@/components/ui";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <SectionTitle
          subtitle="CONTACT"
          title="Let's Build Something Great"
          description="Have an opportunity, research collaboration, or project idea? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactCard />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}