//Crea un componente de tipo función
import { ActionIcon, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { ArrowNarrowRight, Menu2 } from "tabler-icons-react";
import { useRouter } from "next/router";
const Appbar = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const a = {
    color: theme.colors.secondary[0],
    textDecoration: "none",
  };
  const navigation = [
    { name: "Booking", href: "/booking" },
    { name: "Services", href: "/services" },
    { name: "About us", href: "/about-us" },
    { name: "Locations", href: "/locations" },
    { name: "Contact us", href: "/contact-us" },
  ];

  return (
    <header className="fixed w-full z-20 top-0 left-0 drop-shadow bg-primary h-12 lg:h-16 xl:px-52 lg:px-16 md:px-8 px-4">
      <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-between h-full flex items-center">
        <div className="lg:hidden grow-0">
          <ActionIcon radius="xl" size="lg" variant="transparent">
            <Menu2 size={24} color="black" />
          </ActionIcon>
        </div>
        <div className="grow text-center mx-auto lg:mx-0 lg:grow-0 lg:text-left h-[25px] w-[20px] relative lg:h-[50px] lg:w-[150px]">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              objectFit="contain"
              layout="fill"
              className=""
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:flex-row">
          <ul
            style={{ listStyle: "none" }}
            className="lg:gap-14 hidden lg:flex"
          >
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href} style={a} className="text-xl font-bold">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Appbar;
