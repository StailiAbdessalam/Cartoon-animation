import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }:any) {
  return (
    <Layout>



      <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
