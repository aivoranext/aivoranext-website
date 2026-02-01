import "./globals.css";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "Aivoranext | Next-Gen AI Studio",
  description:
    "Aivoranext is your trusted partner for AI-first innovation. We build intelligent digital solutions that transform businesses.",
  icons: {
    icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
