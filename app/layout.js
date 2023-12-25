import { Inter } from "next/font/google";

import { StateContext } from "./context/stateContext";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Merina",
    description: "A Dashboard Application Designed By TheCodeVenturer",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <PrimeReactProvider>  {/* Prime React Provider to Load Prime React Components */}
          <StateContext>{children}</StateContext> {/* Using Context Provider to store User in Global State to avoid props drilling*/}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
