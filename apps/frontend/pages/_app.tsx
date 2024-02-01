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
import Script from "next/script";
import { useEffect } from "react";
export default function App(props: AppProps) {
	const { Component, pageProps, router } = props;

	useEffect(() => {
		function LoadChatWidget() {
			var resource = document.createElement('script'); 
			resource.defer = true;
			resource.src = "https://chatbot.agentz.ai/agentz-chatbot.js?version=1&botUrl=https://chatbot.agentz.ai&title=title&businessAgent=00cbc8d1-9eac-4442-bb80-6464a88935d3";
			var script = document.getElementsByTagName('script')[0];
			script.parentNode.insertBefore(resource, script);
		  }
		  document.addEventListener('readystatechange', function(event){
			if ((event.target as any).readyState  === "complete") {
			  setTimeout(function() {
				LoadChatWidget();
			  }, 5000)
			}
		  }, false);
	}, [])

	return (
		<>
			<div id="agentz-chatbot-00cbc8d1-9eac-4442-bb80-6464a88935d3"></div>
			
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
							<Script
								id="google-tag-manager-body"
								strategy="afterInteractive"
								dangerouslySetInnerHTML={{
									__html: `window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						  
							gtag('config', 'AW-11398284107');`,
								}}
								>

								</Script>
							<Script
								strategy="afterInteractive"
								src={`https://www.googletagmanager.com/gtag/js?id=AW-11398284107`}
								/>
							<Script id="google-tag-manager" strategy="afterInteractive">
								{`
									(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
									new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
									j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
									'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
									})(window,document,'script','dataLayer','GTM-5FHW3ZM');
									
								`}
							</Script>


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
