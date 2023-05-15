import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface CardPrincipalProps {
  title: string;
  description: string;
  botton: string;
}

function CardPrincipal(props: CardPrincipalProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
        </Group>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Lorem ipsum dolor sit amet consectetur. Cursus pellentesque morbi sed
        nunc. Quam nulla id habitant volutpat eros magna donec sapien. Semper
        ullamcorper egestas vitae laoreet sapien adipiscing fringilla pulvinar.
        Quis tortor ante quis in mattis.
      </Text>
      <Button></Button>
    </Card>
  );
}
