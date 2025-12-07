import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Aivoranext | Intelligence, Designed by Humans",
  description:
    "AI-first, human-centric consultancy blending agentic AI, design, and strategy for sustainable growth.",
  icons: {
    icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased bg-[var(--bg-color)] text-white`}>
        {children}
      </body>
    </html>
  );
}

