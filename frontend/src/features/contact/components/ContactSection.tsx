import ContactForm from '@/features/contact/components/ContactForm';
import styles from '../styles/contact.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Querés encargar el desayuno de tu oficina, contactanos</h2>
      <ContactForm />
    </section>
  );
};
export default ContactSection;
