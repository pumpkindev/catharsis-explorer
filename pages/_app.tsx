import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {/*
      // @ts-ignore */}
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />{" "}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
