import type { Metadata } from "next";
import { Web3Modal } from '@/context/web3modal';
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "adwumapa",
  description: "talent hiring platform"
};

const poppins = Poppins({
  weight: ["400", "600", "700"], // Customize the weights you need
  subsets: ["latin"], // Customize the subsets you need
});







function App({ Component, pageProps }: AppProps) {

  
  return (




    <div className={poppins.className}>
      <Web3Modal>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3Modal>
    </div>



  );
}

export default App;
