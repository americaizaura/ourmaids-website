//Crea un componente de tipo función
import { ActionIcon, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { ArrowNarrowRight, Menu2 } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const Appbar = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const isActiveRoute = (path: string) => {
    console.log(router.pathname, path);

    return router.pathname === path;
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
          <ActionIcon
            radius="xl"
            size="lg"
            variant="transparent"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
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
            {/* text-xl font-bold */}
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a
                    className={
                      isActiveRoute(item.href)
                        ? "text-secondary text-xl font-bold"
                        : "text-xl font-bold text-secondary no-underline"
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*    <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex bg-primary" : " hidden")
        }
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Share</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Tweet</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
};

export default Appbar;
