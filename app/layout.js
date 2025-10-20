import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Nelson Vaz | Embedded Firmware Developer & IoT Engineer",
  description:
    "Explore the portfolio of Nelson Vaz, an Embedded Firmware Developer and IoT Engineer specializing in Embedded C, C++, Python, and ARM microcontrollers. Passionate about creating efficient, reliable, and scalable embedded systems.",
  keywords:
    "Nelson Vaz, Embedded Firmware Developer, IoT Engineer, Embedded Systems, C Programming, C++, Python, ARM Cortex, Microcontroller, Firmware Development, Hardware Programming",
  author: "Nelson Vaz",
  robots: "index, follow",
  canonical: "https://nelsonvaz.vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Nelson Vaz | Embedded Firmware Developer & IoT Engineer",
    type: "website",
    url: "https://nelsonvaz.vercel.app/",
    description:
      "Nelson Vaz is an Embedded Firmware Developer skilled in C, C++, Python, and ARM architectures. View his professional portfolio to see his projects in IoT, embedded systems, and hardware programming.",
    site_name: "Nelson Vaz Portfolio",
    images: [
      {
        url: "https://nelsonvaz.vercel.app/img/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Nelson Vaz | Embedded Firmware Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NelsonVaz",
    title: "Nelson Vaz | Embedded Firmware Developer & IoT Engineer",
    description:
      "Discover the professional portfolio of Nelson Vaz — an Embedded Firmware Developer focused on embedded systems, IoT, and hardware programming with C, C++, and ARM.",
    image: "https://nelsonvaz.vercel.app/img/ogImage.webp",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
