import { Button } from '@mantine/core';
interface ButtonComponentProps {
  text: string;
}
const ButtonComponent = ({ text }: ButtonComponentProps) => {
  return (
    <Button size="lg" variant="filled" color="gray" radius="xl">
      {text}
    </Button>
  );
};
export default ButtonComponent;
