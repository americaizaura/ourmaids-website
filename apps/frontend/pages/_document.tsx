import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
	static getInitialProps = getInitialProps;

	render() {
		return (
			<Html lang="en-US">
				<Head>
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<body>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FHW3ZM" height="0" width="0" style="display: none; visibility: hidden;" />`,
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
