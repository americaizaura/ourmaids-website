import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/hero.css";
import "../styles/index.css";
import Layout from "../components/layaout";
import client from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
export default function App(props: AppProps) {
	const { Component, pageProps, router } = props;

	return (
		<>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					breakpoints: {
						xs: "640px",
						sm: "768px",
						md: "1024px",
						lg: "1280px",
						xl: "1536px",
					},
					colorScheme: "light",

					colors: {
						primary: ["#FADCEA"],
						primaryVariant: ["#EFDFE0"],
						secondary: ["#720012"],
						secondaryVariant: ["#3700CB"],
						toolbar: ["#49A2D3"],
						navigationBar: ["#3B82B2"],
						background: ["#FFF8F6"],
						surface: ["#FFFFFF"],
						success: ["#4CAF50"],
						info: ["#03A9F4"],
						warning: ["#FFC107"],
						error: ["#B00020"],
						danger: ["#F44336"],
						onError: ["#FFFFFF"],
						onPrimary: ["#FFFFFF"],
						onSecondary: ["#FFFFFF"],
						onSurface: ["#292929"],
						onBackground: ["#292929"],
						onToolbar: ["#FFFFFF"],
						textPrimary: ["#292929"],
						textSecondary: ["#575757"],
						divider: ["#C6C6C6"],
						textTrack: ["#959595"],
					},
				}}
			>
				<ApolloProvider client={client}>
					<Layout>
						<motion.div
							key={router.route}
							initial="initial"
							animate="animate"
							variants={{
								initial: {
									opacity: 0,
								},
								animate: {
									opacity: 1,
								},
							}}
						>
							<Component {...pageProps} />
							<ProgressBar
								height="2px"
								color="#720012"
								options={{ showSpinner: false }}
								shallowRouting
							/>
						</motion.div>
					</Layout>
				</ApolloProvider>
			</MantineProvider>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				pauseOnHover={false}
			/>
		</>
	);
}
