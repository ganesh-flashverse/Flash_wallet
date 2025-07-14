import React from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { client } from "./client";

export default function ThirdwebProviderWrapper({ children }) {
  return <ThirdwebProvider client={client}>{children}</ThirdwebProvider>;
}
