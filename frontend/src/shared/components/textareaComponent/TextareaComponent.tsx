import { Textarea } from '@mantine/core';
interface TextareaComponentProps {
  label: string;
  placeholder?: string;
}
const TextareaComponent = ({ label, placeholder }: TextareaComponentProps) => {
  return (
    <Textarea radius="lg" size="lg" label={label} placeholder={placeholder} />
  );
};
export default TextareaComponent;
