import { Card, Image, Text, Group } from '@mantine/core';

const CardComponent = ({ imageUrl, title, description, price }: { imageUrl: string; title: string; description: string; price: number }) => {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Image
          src={imageUrl}
          height={160}
          alt={title}
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