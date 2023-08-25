import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://ourmaids-website-backend.on.ocstudios.mx/graphql",
	documents: "graphql/**/*.graphql",
	generates: {
		"generated/graphql.tsx": {
			plugins: [
				"typescript-operations",
				"typescript",
				"typescript-react-apollo",
			],
		},
		"generated/graphql.server.ts": {
			plugins: [
				"typescript-operations",
				"typescript",
				"typescript-graphql-request",
			],
		},
		"./graphql.schema.json": {
			plugins: ["introspection"],
		},
	},
};

export default config;
