//Crea un componente de tipo función
import { ActionIcon, Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { ArrowNarrowRight, Menu2 } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
const Appbar = () => {
	const theme = useMantineTheme();
	const router = useRouter();
	const [isNavOpen, setIsNavOpen] = useState(false);
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
		/* 		{ name: "Seccion Victor", href: "/sectionVictor" }, */
	];
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<header>
			<div className="fixed w-full z-20 top-0 left-0 drop-shadow bg-primary h-[100px]  lg:h-[100px] xl:px-52 lg:px-16 md:px-8 px-4">
				<div className="lg:flex lg:flex-wrap lg:items-center lg:justify-between h-full flex items-center">
					<div className="lg:hidden grow-0">
						<ActionIcon
							radius="xl"
							size="lg"
							variant="transparent"
							onClick={toggleDrawer}
						>
							<Menu2 size={24} color="black" />
						</ActionIcon>
					</div>
					{/*   <button onClick={toggleDrawer}>Show</button> */}
					<Drawer
						open={isOpen}
						onClose={toggleDrawer}
						direction="left"
						customIdSuffix="drawer-example"
						style={{
							width: "300px",
						}}
					>
						<ul
							style={{ listStyle: "none" }}
							className="flex justify-between items-center flex-col gap-4 w-full px-10"
						>
							{/* text-xl font-bold */}
							{navigation.map((item) => (
								<li key={item.name} className="w-full">
									<Button radius="xl" color="secondary.0" fullWidth size="xs">
										<Link href={item.href}>
											<a
												className={
													isActiveRoute(item.href)
														? "text-onPrimary  no-underline"
														: "  text-onPrimary no-underline"
												}
											>
												{item.name}
											</a>
										</Link>
									</Button>
								</li>
							))}
						</ul>
					</Drawer>
					<div className="grow text-center mx-auto lg:ml-0 lg:grow-0 lg:text-left h-[80px] w-[250px] relative lg:h-[80px] lg:w-[250px]">
						<a href="/">
							<Image
								src="/images/logo.png"
								alt="Logo"
								objectFit="contain"
								layout="fill"
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
													? "text-secondary text-xl font-bold "
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
			</div>
			{/*       <div
        id="drawer-example"
        className={` fixed overflow-hidden z-50 bg-onSurface bg-opacity-25 inset-y-0 transform ease-in-out ${
          isNavOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0 "
            : " transition-all delay-500 opacity-0 -translate-x-full "
        }`}
      >
        <section
          className={
            " w-52 left-0 absolute bg-surface h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform p-8 space-y-4 " +
            (isNavOpen ? " translate-x-0 " : " -translate-x-full ")
          }         
        > 
             

          {navigation.map((item, index) => (
            <Button color="primary.0" className="w-full" size="xs" key={index}>
              {item.name}
            </Button>
          ))}
        </section>
        <section
          className="w-screen h-full"
          onClick={() => {
            setIsNavOpen(false);
          }}
        ></section>
      </div> */}
		</header>
	);
};

export default Appbar;
