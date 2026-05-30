import "./globals.css";
import "lenis/dist/lenis.css";
import { DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: {
    default: "Aivoranext | AI Automation Agency - Voice AI, Workflow Automation & Custom AI Solutions",
    template: "%s | Aivoranext",
  },
  description:
    "Deploy Voice AI agents that handle calls 24/7, automate business workflows, and build custom AI solutions. A founder-led AI studio — we design, build, and operate production AI systems end to end.",
  keywords: [
    "Voice AI agents",
    "AI automation",
    "workflow automation",
    "custom AI software",
    "AI calling agents",
    "business automation",
    "AI hiring",
    "ML engineers",
    "conversational AI",
    "AI agency",
  ],
  authors: [{ name: "Aivoranext" }],
  creator: "Aivoranext",
  publisher: "Aivoranext",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aivoranext.com",
    siteName: "Aivoranext",
    title: "Aivoranext | AI Automation Agency",
    description:
      "Deploy Voice AI agents, automate workflows, and build custom AI solutions. Senior engineers, direct founder access, built and operated end to end.",
    images: [
      {
        url: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
        width: 1200,
        height: 630,
        alt: "Aivoranext - AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aivoranext | AI Automation Agency",
    description:
      "Deploy Voice AI agents, automate workflows, and build custom AI solutions. Founder-led studio with senior engineers and direct access.",
    images: ["https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png"],
    creator: "@aivoranext",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
    shortcut: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
    apple: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
  },
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased bg-black text-white`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
