import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface CardPrincipalProps {
  title: string;
  description: string;
  botton: string;
}

function CardPrincipal(props: CardPrincipalProps) {
  return (
    <div>
      <div className="bg-[#fbdceb] flex flex-col gap-3 rounded-3xl px-10 shadow-md h-60 w-80">
        <div className="mt-8">
          <div className="text-[22px] font-montserrat font-semibold leading-6">
            {props.title}
          </div>
          <p className="text-[10px]">{props.description}</p>
        </div>
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJC-g-TsaVwoAReX0svaIhOL4"
          target="_blank"
          rel="noreferrer"
        >
          <Button w={150} h={25} color="secondary.0" radius="xl">
            <p className="text-xs font-bold tracking-widest">{props.botton}</p>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default CardPrincipal;
