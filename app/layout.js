import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header.js";
import Footer from "./footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "염경중 학생기자단 (임시)",
  description: "2023 of Yeomgyeong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
