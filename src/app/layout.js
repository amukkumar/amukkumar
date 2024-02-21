import { Inter } from "next/font/google";
import "./globals.css";
import './globalicons.css';
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amuk Kumar",
  description: "Turning Ideas Into Reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
