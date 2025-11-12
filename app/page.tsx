"use client";

import { useState } from "react";
import { Rocket, Zap, Shield, Sparkles, ChevronDown } from "lucide-react";

// ===== 1️⃣ HERO SECTION =====
function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-black overflow-hidden flex items-center justify-center text-center">
      {/* Animated Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      
      {/* Smooth transition overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Fast-Track Your Business Launch
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          The ultimate modern open-source Next.js + Tailwind template for SaaS, startup, and product launches.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="relative px-8 py-3 bg-purple-700 text-white font-semibold rounded-xl overflow-hidden group hover:bg-purple-600 transition">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative">Get Started</span>
          </button>
          <button className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl backdrop-blur-sm hover:bg-white/20 transition">
            See on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}

// ===== 2️⃣ FEATURES SECTION =====
function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: "Blazing Fast Setup",
      desc: "Deploy instantly with a pre-configured Next.js + Tailwind stack.",
    },
    {
      icon: Zap,
      title: "Modern UI Components",
      desc: "Beautifully designed, ready-to-use responsive UI sections.",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      desc: "Optimized for performance, built on top of Next.js App Router.",
    },
    {
      icon: Sparkles,
      title: "AI Ready",
      desc: "Integrated with OpenAI & Vercel AI SDK for smart experiences.",
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Smooth transition overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black via-slate-950/50 to-transparent" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Why Choose SaaSy Land?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <f.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 3️⃣ PRICING SECTION =====
function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["1 Project", "Basic Components", "Community Support"],
    },
    {
      name: "Pro",
      price: "$19/mo",
      features: ["Unlimited Projects", "Premium Templates", "Priority Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Dedicated Support", "Custom Deployment", "Advanced AI Tools"],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-purple-950/30 to-black overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 text-transparent bg-clip-text">
          Simple, Transparent Pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white/5 border rounded-2xl backdrop-blur-sm p-10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "border-purple-500 shadow-lg shadow-purple-500/20" : "border-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  POPULAR
                </span>
              )}
              <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-purple-400 mb-6">{plan.price}</p>
              <ul className="space-y-3 text-gray-400 mb-8 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 4️⃣ FAQ SECTION =====
function FAQSection() {
  const faqs = [
    {
      q: "Is SaaSy Land free to use?",
      a: "Yes, the starter template is 100% open-source and free for personal or commercial use.",
    },
    {
      q: "Can I integrate my backend?",
      a: "Absolutely! It's built with Next.js, so you can add APIs or connect any external service easily.",
    },
    {
      q: "Is it mobile responsive?",
      a: "Yes, every section is fully responsive and optimized for all screen sizes.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl bg-white/5 p-5 cursor-pointer transition-all hover:bg-white/10 hover:border-purple-500/30"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center text-white">
                <p className="font-medium text-lg">{item.q}</p>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {open === i && (
                <p className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== 5️⃣ FOOTER =====
function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-black py-12 text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} SaaSy Land. Built with ❤️ using Next.js + Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-400 text-sm">
          <a href="#" className="hover:text-purple-400 transition">Privacy</a>
          <a href="#" className="hover:text-purple-400 transition">Terms</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ===== 🎯 MAIN PAGE - PROPER STRUCTURE =====
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}