import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
//rev12:11
