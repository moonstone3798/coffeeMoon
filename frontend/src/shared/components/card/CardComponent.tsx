import { Card, Image, Text, Group } from '@mantine/core';

const CardComponent = ({ imageUrl, title, description, price }: { imageUrl: string; title: string; description: string; price: number }) => {
  return (
    <Card shadow="sm" padding="lg" style={{
      backgroundColor: '#f5f5f5',
    }}  >
      <Card.Section>
        <Image
          src={imageUrl}
          height={240}
          alt={title}
          fit='cover'
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Text fw={500}>${price.toFixed(2)}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

    </Card>
  );
};
export default CardComponent;