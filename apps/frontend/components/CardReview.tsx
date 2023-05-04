import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface review {
  author: string;
  title: string;
  description: string;
  image: string;
  rating: number;
}
function CardReview(props: review) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Group position="apart" mt="md" mb="xs">
          <Avatar
            component="a"
            href="https://github.com/rtivital"
            target="_blank"
            src="avatar.png"
            alt="it's me"
          />
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
    </Card>
  );
}

export default CardReview;
