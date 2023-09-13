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
});
