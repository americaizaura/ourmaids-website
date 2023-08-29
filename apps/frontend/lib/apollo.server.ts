import { GraphQLClient } from "graphql-request";
import { SERVER_URI } from "../constants";
import { getSdk } from "../generated/graphql.server";
const token =
  "EAAAFJLAQwc57X5arZRGsRm9CrE6dVDblTJ10DJU0PXX9QEBTZHoeDt_ewiSSCW3";
const client = new GraphQLClient(`${SERVER_URI}/graphql`, {
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

export const serverClient = getSdk(client);
