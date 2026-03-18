import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  metadataBase: new URL("https://hero-kids-xi.vercel.app/"),
  title: {
    default: "HeroKidz | Fun & Educational Toys",
    template: "%s | Kids Toys Store",
  },

  description:
    "Discover fun and educational toys for kids in Bangladesh. Shop high-quality learning boards, puzzles, and more at the best prices.",

  keywords: [
    "toys Bangladesh",
    "kids toys",
    "educational toys",
    "learning board",
    "baby toys",
    "online toy shop BD",
  ],

  authors: [{ name: "Kids Toys Store Team" }],
  creator: "Kids Toys Store",
  publisher: "Kids Toys Store",

  icons: {
    icon: "https://i.ibb.co.com/qLVMgPzc/logo.png",
    shortcut: "https://i.ibb.co.com/qLVMgPzc/logo.png",
    apple: "https://i.ibb.co.com/qLVMgPzc/logo.png",
  },

  openGraph: {
    title: "HeroKidz",
    description:
      "Buy fun & educational toys for kids. Best quality toys available online in Bangladesh.",
    url: "https://hero-kids-xi.vercel.app/",
    siteName: "Kids Toys Store",
    images: [
      {
        url: "https://i.ibb.co.com/7xjd9jMj/Screenshot-from-2026-03-18-15-45-33.png",
        width: 1200,
        height: 630,
        alt: "Kids Toys Store Home Page",
      },
      {
        url: "https://i.ibb.co.com/8g0d0LKT/Screenshot-from-2026-03-18-15-48-21.png",
        width: 1200,
        height: 630,
        alt: "Kids Toys Store Products Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz",
    description:
      "Shop the best toys for kids in Bangladesh. Educational & fun toys available now!",
    images: ["https://i.ibb.co.com/ym0VMHY6/home-preview.png"],
    creator: "@yourhandle", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://hero-kids-xi.vercel.app/",
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-301px)]">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
