//Crea un componente de tipo función
import { useMantineTheme } from "@mantine/core";
import Image from "next/image";

const Appbar = () => {
  const theme = useMantineTheme();

  const a = {
    color: theme.colors.secondary[0],
    textDecoration: "none",
  };
  const navigation = [
    { name: "Booking", href: "#" },
    { name: "Services", href: "#" },
    { name: "About us", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  return (
    <header className="fixed w-full z-20 top-0 left-0 drop-shadow bg-primary h-16 px-52">
      <div className="flex flex-wrap items-center justify-between h-full">
        <Image src="/images/logo.png" alt="Logo" width={150} height={35} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ul style={{ display: "flex", listStyle: "none" }} className="gap-14">
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
