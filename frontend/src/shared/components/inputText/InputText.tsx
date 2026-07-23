import { Input, InputWrapper } from '@mantine/core';
interface InputTextProps {
  label: string;
  error?: string;
  placeholder?: string;
}

const InputText = ({ label, error, placeholder }: InputTextProps) => {
  return (
    <>
      <InputWrapper label={label} size="lg" error={error}>
        <Input radius="xl" size="lg" placeholder={placeholder} />
      </InputWrapper>
    </>
  );
};
export default InputText;
