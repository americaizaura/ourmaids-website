
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://connect.squareup.com/public/graphql": {
        headers: {
          "Authorization": "Bearer EAAAFJLAQwc57X5arZRGsRm9CrE6dVDblTJ10DJU0PXX9QEBTZHoeDt_ewiSSCW3",
        },
      },
    },
  ],
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/graphql.ts": {
      plugins: [
        "typescript-operations",
        "typescript-document-nodes",
        "typescript",
      ]
    },
    "gql/graphql.d.ts": {
      plugins: ["typescript-graphql-files-modules"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  }
};

export default config;
