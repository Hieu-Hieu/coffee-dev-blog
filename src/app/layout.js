import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import SliderTop from "@/components/SliderTop/SliderTop";
import SubnavHeader from "@/components/SubnavHeader/SubnavHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee-dev Blog",
  description: "Best blog by nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            <div className="top-divider"></div>
            <SubnavHeader />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
