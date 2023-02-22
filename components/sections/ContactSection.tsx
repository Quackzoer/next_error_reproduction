import ContactForm from "../forms/ContactForm";

function ContactSection() {
  return (
    <footer
      className="flex justify-center w-full py-32 bg-slate-900"
      id="contactSection"
    >
      <ContactForm />
    </footer>
  );
}

export default ContactSection;
