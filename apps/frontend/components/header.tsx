//Crea un componente de tipo función
import { ActionIcon, Button, useMantineTheme, Drawer } from "@mantine/core";
import Image from "next/image";
import { ArrowNarrowRight, Menu2 } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
const Appbar = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const theme = useMantineTheme();
	const router = useRouter();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const isActiveRoute = (path: string) => {
		console.log(router.pathname, path);

		return router.pathname === path;
	};
	const navigation = [
		{ name: "Bookings", href: "/booking" },
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
			<div className="fixed w-full z-20 top-0 left-0 drop-shadow bg-primary h-[140px]  lg:h-[110px]  lg:px-16 md:px-8 px-4">
				<div className="lg:flex  lg:items-center lg:justify-between h-full flex items-center">
					<div className="lg:hidden grow-0">
						<ActionIcon
							radius="xl"
							size="lg"
							variant="transparent"
							onClick={open}
						>
							<Menu2 size={24} color="black" />
						</ActionIcon>
					</div>
					{/*   <button onClick={toggleDrawer}>Show</button> */}
					<Drawer
						opened={opened}
						onClose={close}
						overlayProps={{ opacity: 0.5, blur: 4 }}
					>
						<ul
							style={{ listStyle: "none" }}
							className="flex justify-between items-center flex-col gap-4 w-full px-10"
						>
							{navigation.map((item) => (
								<li key={item.name} className="w-full">
									<Link href={item.href} passHref>
										<Button
											radius="xl"
											color="secondary.0"
											fullWidth
											size="xs"
											onClick={close}
										>
											<p
												className={
													isActiveRoute(item.href)
														? "text-onPrimary  no-underline"
														: "  text-onPrimary no-underline"
												}
											>
												{item.name}
											</p>
										</Button>
									</Link>
								</li>
							))}
						</ul>
					</Drawer>
					<div className="grow text-center mx-auto lg:ml-0  lg:grow-0 lg:text-left h-[70px] w-[200px] relative lg:h-[80px] lg:w-[250px]">
						<Link href={"/"} passHref>
							<Image
								src="/images/logo.png"
								alt="Logo"
								objectFit="contain"
								layout="fill"
								className="cursor-pointer"
							/>
						</Link>
					</div>
					<div className="hidden lg:flex lg:justify-between lg:items-center ">
						<ul
							style={{ listStyle: "none" }}
							className="lg:gap-10 hidden lg:flex"
						>
							{navigation.map((item) => (
								<li key={item.name}>
									<Link href={item.href} passHref>
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
			</div>
		</header>
	);
};

export default Appbar;
