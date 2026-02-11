import Link from "next/link";
import { ArrowRight, Home, PhoneCall, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 | Page Not Found",
  description:
    "The page you are looking for doesn’t exist. Return to Aivoranext to explore AI automation services and solutions.",
};

const quickLinks = [
  {
    title: "Explore Services",
    description: "Voice AI, workflow automation, and custom AI solutions.",
    href: "/services",
    icon: Sparkles,
  },
  {
    title: "View Our Work",
    description: "See real-world AI projects delivered for clients.",
    href: "/portfolio",
    icon: ArrowRight,
  },
  {
    title: "Contact Aivoranext",
    description: "Talk with our team about your AI roadmap.",
    href: "/contact",
    icon: PhoneCall,
  },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      <Navbar currentPage="404" />

      <section className="relative z-10 pt-32 md:pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 badge-pill px-4 py-2 rounded-full text-sm text-[#3B8BFF] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0065F8]" />
                Error 404
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-white">
                This page slipped out of orbit.
              </h1>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
                We couldn’t find the page you’re looking for. It may have been
                moved, renamed, or no longer exists. Let’s get you back on
                track.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-none transition-all hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-none transition-all hover:bg-white/5"
                >
                  Talk to Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-card gradient-border rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-semibold text-white">
                Popular destinations
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                These are the pages most visitors are looking for.
              </p>

              <div className="mt-8 space-y-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#0065F8]/40 hover:bg-[#0065F8]/5 transition-all"
                  >
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0065F8]/10 text-[#3B8BFF]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#3B8BFF] transition-colors" />
                      </div>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-arc-glow" />
      </section>

      <Footer />
    </main>
  );
}
