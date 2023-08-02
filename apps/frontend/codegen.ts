import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			"https://connect.squareup.com/public/graphql": {
				headers: {
					Authorization:
						"Bearer EAAAFJLAQwc57X5arZRGsRm9CrE6dVDblTJ10DJU0PXX9QEBTZHoeDt_ewiSSCW3",
				},
			},
		},
	],
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
