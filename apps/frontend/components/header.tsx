//Crea un componente de tipo función
import { useMantineTheme } from "@mantine/core";
import Image from "next/image";

const Appbar = () => {
  const theme = useMantineTheme();
  const li = {
    margin: "0 10px",
  };
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Image src="/images/logo.png" alt="Logo" width={150} height={35} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ul style={{ display: "flex", listStyle: "none" }}>
          {/*     <li style={{ margin: "0 10px" }}>
            <a href="#">Booking</a>
          </li>
          <li style={{ margin: "0 10px" }}>
            <a href="#">Services</a>
          </li>
          <li style={{ margin: "0 10px" }}>
            <a href="#">About us</a>
          </li>
          <li style={{ margin: "0 10px" }}>
            <a href="#">Locations</a>
          </li>
          <li style={{ margin: "0 10px" }}>
            <a href="#">Contact Us</a>
          </li> */}
          {navigation.map((item) => (
            <li key={item.name} style={li}>
              <a href={item.href} style={a}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appbar;
