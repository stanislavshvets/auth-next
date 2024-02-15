import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body className={roboto.className}>
         {children}
      </body>
    </html>
  );
};

export default RootLayout;