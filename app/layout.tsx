import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelbaldasso.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Samuel Baldasso — Backend Software Engineer",
  description:
    "Backend Software Engineer specialized in Java, Spring Boot, Kafka and cloud-native distributed systems. 30–45% latency reductions on high-traffic enterprise platforms.",
  openGraph: {
    title: "Samuel Baldasso — Backend Software Engineer",
    description:
      "Java & cloud-native distributed systems. 30–45% latency reductions on platforms serving 500k+ requests/day.",
    url: SITE_URL,
    siteName: "Samuel Baldasso",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Baldasso — Backend Software Engineer",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
