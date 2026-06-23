import type { Metadata } from "next";
import { Archivo, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr. Freelancer — We Design, Build & Scale Digital Products",
  description: "Mr. Freelancer is a high-end digital studio helping startups and businesses design, develop, and scale custom web and mobile ecosystems.",
  keywords: ["Software Development", "Web Development", "Mobile Apps", "Flutter", "Next.js", "Graphic Design", "Brand Identity"],
  authors: [{ name: "Mr. Freelancer Studio" }],
  openGraph: {
    title: "Mr. Freelancer — Premium Digital Engineering",
    description: "We build custom software, cross-platform apps, and scalable architectures without the agency fluff.",
    type: "website",
    locale: "en_US",
    siteName: "Mr. Freelancer Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Freelancer — We Design, Build & Scale Digital Products",
    description: "High-end digital studio for modern startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-main font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-18">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

