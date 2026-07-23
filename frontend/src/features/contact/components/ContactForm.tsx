import ButtonComponent from '@/shared/components/buttonComponent/ButtonComponent';
import InputText from '@/shared/components/inputText/InputText';
import TextareaComponent from '@/shared/components/textareaComponent/TextareaComponent';

const ContactForm = () => {
  return (
    <form>
      <InputText label="Nombre" placeholder="Juan Pérez" />
      <InputText label="Email" placeholder="juan.perez@example.com" />
      <TextareaComponent
        label="Mensaje"
        placeholder="Hola, estoy interesado en sus productos..."
      />
      <ButtonComponent text="Enviar" />
    </form>
  );
};
export default ContactForm;
