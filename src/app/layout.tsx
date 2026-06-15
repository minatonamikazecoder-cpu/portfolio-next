import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import dynamic from "next/dynamic";

const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "FlowStack — We Design, Build & Scale Digital Products",
  description: "FlowStack is a high-end digital studio helping startups and businesses design, develop, and scale custom web and mobile ecosystems.",
  keywords: ["Software Development", "Web Development", "Mobile Apps", "Flutter", "Next.js", "Database Migration"],
  authors: [{ name: "FlowStack Studio" }],
  openGraph: {
    title: "FlowStack — Premium Digital Engineering",
    description: "We build custom software, cross-platform apps, and scalable architectures without the agency fluff.",
    type: "website",
    locale: "en_US",
    siteName: "FlowStack Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowStack — We Design, Build & Scale Digital Products",
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
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-main font-sans">
        <SmoothScroll>
          <CursorGlow />
          <Navbar />
          <main className="flex-grow pt-18">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
