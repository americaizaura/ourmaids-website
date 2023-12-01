const withTM = require("next-transpile-modules")(["ui"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withTM, withBundleAnalyzer], {
	reactStrictMode: true,
	images: {
		domains: ["items-images-production.s3.us-west-2.amazonaws.com"],
	},
	compiler: {
		styledComponents: true,
	},
	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
					{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
				]
			}
		]
	}
});
