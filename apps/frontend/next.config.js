const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["items-images-production.s3.us-west-2.amazonaws.com"],
  },
  compiler: {
    styledComponents: true,
  },
});
