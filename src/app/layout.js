import { borel, gilroy, openSans } from "./fonts";

import "./globals.css";
import "../../public/styles/globals.scss";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Protean Lead generating site",
  description: "Protean X ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
      <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
