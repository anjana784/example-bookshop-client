import Header from "@/Components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AD Printers",
  description: "AD Printers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="bottom-left"
          pauseOnHover={false}
          draggable={false}
          autoClose={2000}
          closeButton={false}
          className={
            "2xl:block xl:block lg:block md:hidden sm:hidden xsm:hidden"
          }
        />
        <Header />
        <div className="w-screen h-[calc(100vh_-_128px)] py-8">
          <div className="w-4/5 h-full m-auto">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
