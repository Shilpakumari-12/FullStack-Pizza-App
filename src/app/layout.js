import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight:['400','500','700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <main classname="max-m-4xl mx-auto p-4">

      </main>
      </body>
    </html>
  );
}