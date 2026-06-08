"use client";

import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
} from "react";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=Lora:ital,wght@0,400;1,400;1,600&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Syne', sans-serif; background: #0d0d0d; color: #f0ece4; overflow-x: hidden; }

  .font-display { font-family: 'Syne', sans-serif; }
  .font-serif { font-family: 'Lora', serif; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes slideRight { from { transform:scaleX(0); } to { transform:scaleX(1); } }
  @keyframes spinSlow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
  @keyframes spinRev { from { transform:rotate(0deg); } to { transform:rotate(-360deg); } }
  @keyframes floatUp { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
  @keyframes floatDown { 0%,100%{transform:translateY(0);} 50%{transform:translateY(10px);} }
  @keyframes ticker { from{transform:translateX(0);} to{transform:translateX(-50%);} }
  @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 0 rgba(255,94,58,0.6);} 50%{box-shadow:0 0 0 8px rgba(255,94,58,0);} }
  @keyframes progressPulse { 0%,100%{width:62%;} 50%{width:74%;} }
  @keyframes grain {
    0%,100% { transform: translate(0,0); }
    10% { transform: translate(-2%,-3%); }
    30% { transform: translate(3%,2%); }
    50% { transform: translate(-1%,4%); }
    70% { transform: translate(4%,-1%); }
    90% { transform: translate(-3%,1%); }
  }

  .anim-fade-up { animation: fadeUp 0.7s cubic-bezier(.34,1.56,.64,1) both; }
  .anim-fade-in { animation: fadeIn 0.6s ease both; }
  .anim-spin-slow { animation: spinSlow 28s linear infinite; }
  .anim-spin-rev { animation: spinRev 18s linear infinite; }
  .anim-float-up { animation: floatUp 5s ease-in-out infinite; }
  .anim-float-down { animation: floatDown 6s ease-in-out infinite; }
  .anim-ticker { animation: ticker 22s linear infinite; }
  .anim-pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
  .anim-progress { animation: progressPulse 2.5s ease-in-out infinite; }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }
  .delay-700 { animation-delay: 0.7s; }
  .delay-800 { animation-delay: 0.8s; }

  .reveal { opacity:0; transform:translateY(32px); transition:opacity 0.7s cubic-bezier(.34,1.56,.64,1), transform 0.7s cubic-bezier(.34,1.56,.64,1); }
  .reveal.in { opacity:1; transform:translateY(0); }

  .card-hover { transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease; }
  .card-hover:hover { transform: translateY(-6px); box-shadow: 0 28px 60px rgba(0,0,0,0.5); }

  .step-hover { transition: padding-left 0.3s ease; border-bottom: 1px solid rgba(240,236,228,0.1); }
  .step-hover:hover { padding-left: 12px; }

  .btn-primary {
    display:inline-flex; align-items:center; gap:8px;
    background:#ff5e3a; color:#fff;
    padding:0.85rem 2rem; border-radius:100px;
    font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;
    text-decoration:none; letter-spacing:0.01em;
    transition:transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 6px 28px rgba(255,94,58,0.4);
    cursor:pointer; border:none;
  }

  .btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(255,94,58,0.55); }

  .btn-ghost {
    display:inline-flex; align-items:center; gap:8px;
    color:#f0ece4; font-family:'Syne',sans-serif; font-weight:600; font-size:0.9rem;
    text-decoration:none; opacity:0.7;
    transition:opacity 0.2s, gap 0.2s;
    cursor:pointer; background:none; border:none; padding:0;
  }

  .btn-ghost:hover { opacity:1; gap:14px; }

  .noise-overlay {
    position:fixed; inset:0; z-index:1000; pointer-events:none;
    opacity:0.03;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px;
    animation: grain 0.5s steps(1) infinite;
  }

  .accent { color: #ff5e3a; }

  .page-loader {
    position:fixed; inset:0; z-index:9000;
    background:#0d0d0d; display:flex; align-items:center; justify-content:center;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  .page-loader.hidden { opacity:0; visibility:hidden; pointer-events:none; }

  .loader-word { font-family:'Syne',sans-serif; font-weight:800; font-size:4rem; letter-spacing:-0.05em; overflow:hidden; }
  .loader-line { display:block; animation: fadeUp 0.5s cubic-bezier(.34,1.56,.64,1) both; }
  .loader-bar { width:48px; height:2px; background:rgba(240,236,228,0.15); border-radius:2px; margin-top:2rem; overflow:hidden; }
  .loader-fill { height:100%; background:#ff5e3a; border-radius:2px; transition: width 0.8s ease; }

  .nav-link { position:relative; color:rgba(240,236,228,0.6); text-decoration:none; font-size:0.875rem; font-weight:500; transition:color 0.2s; }
  .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:1px; background:#ff5e3a; transform:scaleX(0); transform-origin:left; transition:transform 0.25s ease; }
  .nav-link:hover { color:#f0ece4; }
  .nav-link:hover::after { transform:scaleX(1); }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0d0d0d; }
  ::-webkit-scrollbar-thumb { background: #ff5e3a; border-radius: 2px; }
`;

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps): JSX.Element {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white rounded-full px-4 py-1.5 mb-8 anim-fade-up"
      style={{ background: "#ff5e3a", letterSpacing: "0.08em" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-white anim-pulse-dot inline-block" />
      {children}
    </span>
  );
}

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
}

function SectionLabel({ children, light = false }: SectionLabelProps): JSX.Element {
  return (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-3 reveal"
      style={{
        letterSpacing: "0.1em",
        color: light ? "rgba(240,236,228,0.45)" : "#ff5e3a",
      }}
    >
      {children}
    </p>
  );
}

type DotColor = "green" | "orange" | "blue";

interface FloatCardProps {
  children: ReactNode;
  style?: CSSProperties;
  dot: DotColor;
}

function FloatCard({ children, style, dot }: FloatCardProps): JSX.Element {
  const dotColor: Record<DotColor, string> = {
    green: "#22c55e",
    orange: "#ff5e3a",
    blue: "#3b82f6",
  };

  return (
    <div
      className="absolute flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap anim-float-up"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(240,236,228,0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        color: "#f0ece4",
        fontSize: "0.78rem",
        ...style,
      }}
    >
      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: dotColor[dot] }} />
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon: string;
  label: string;
  name: string;
  desc: string;
  price: string;
  featured?: boolean;
  delay?: string;
  className?: string;
}

function ServiceCard({
  icon,
  label,
  name,
  desc,
  price,
  featured = false,
  delay,
  className = "",
}: ServiceCardProps): JSX.Element {
  return (
    <div
      className={`card-hover relative overflow-hidden rounded-3xl p-8 reveal ${delay ?? ""} ${className}`}
      style={{
        background: featured ? "#ff5e3a" : "#111111",
        border: `1px solid ${featured ? "transparent" : "rgba(240,236,228,0.07)"}`,
        color: "#f0ece4",
      }}
    >
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: featured ? "rgba(255,255,255,0.1)" : "rgba(255,94,58,0.06)",
          transition: "transform 0.5s",
        }}
      />
      <div className="text-4xl mb-6">{icon}</div>
      <div
        className="text-xs font-bold uppercase tracking-widest mb-2"
        style={{
          letterSpacing: "0.08em",
          color: featured ? "rgba(255,255,255,0.7)" : "rgba(240,236,228,0.4)",
        }}
      >
        {label}
      </div>
      <h3
        className="font-display font-extrabold text-2xl mb-3"
        style={{ letterSpacing: "-0.03em", lineHeight: 1.2 }}
      >
        {name}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{
          color: featured ? "rgba(255,255,255,0.75)" : "rgba(240,236,228,0.5)",
        }}
      >
        {desc}
      </p>
      <span
        className="inline-block text-xs font-bold px-4 py-1.5 rounded-full"
        style={{
          background: featured ? "rgba(255,255,255,0.18)" : "rgba(255,94,58,0.12)",
          color: featured ? "#fff" : "#ff5e3a",
        }}
      >
        {price}
      </span>
    </div>
  );
}

interface NotifProps {
  children: ReactNode;
  style?: CSSProperties;
  emoji: string;
}

function Notif({ children, style, emoji }: NotifProps): JSX.Element {
  return (
    <div
      className="absolute px-4 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap anim-float-up"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(240,236,228,0.08)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        color: "#f0ece4",
        fontSize: "0.78rem",
        ...style,
      }}
    >
      <span style={{ marginRight: 6 }}>{emoji}</span>
      {children}
    </div>
  );
}

export default function DinevoPage(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loaderFill, setLoaderFill] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setLoaderFill(100), 100);
    const t2 = window.setTimeout(() => setLoaded(true), 1000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [loaded]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />

      <div className="noise-overlay" aria-hidden />

      <div className={`page-loader ${loaded ? "hidden" : ""}`} aria-hidden={loaded}>
        <div className="text-center">
          <div className="loader-word">
            <span className="loader-line">
              <span style={{ color: "#f0ece4" }}>Di</span>
              <span style={{ color: "#ff5e3a" }}>ne</span>
              <span style={{ color: "#f0ece4" }}>vo</span>
            </span>
          </div>
          <div className="loader-bar">
            <div className="loader-fill" style={{ width: `${loaderFill}%` }} />
          </div>
        </div>
      </div>

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,13,13,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(240,236,228,0.08)" : "none",
        }}
      >
        <a
          href="#"
          className="text-2xl font-display font-extrabold tracking-tighter"
          style={{ letterSpacing: "-0.04em" }}
        >
          Di<span className="accent">ne</span>vo
        </a>

        <ul className="hidden md:flex items-center gap-10 list-none">
          {["Services", "How it works", "Reviews", "Pricing"].map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase().replace(/ /g, "-")}`} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="btn-primary"
          style={{ padding: "0.55rem 1.4rem", fontSize: "0.85rem" }}
        >
          Get started →
        </a>
      </nav>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-8 md:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,236,228,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,228,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,94,58,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="anim-fade-up">
              <Badge>Now live in 40+ cities</Badge>
            </div>

            <h1
              className="font-display font-extrabold leading-none mb-6"
              style={{
                fontSize: "clamp(3.5rem,6vw,6.5rem)",
                letterSpacing: "-0.05em",
                lineHeight: 0.92,
              }}
            >
              <span className="block anim-fade-up delay-100">Delivery</span>
              <span className="block anim-fade-up delay-200">
                that&nbsp;
                <em
                  className="font-serif"
                  style={{
                    color: "#ff5e3a",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  never
                </em>
              </span>
              <span className="block anim-fade-up delay-300">sleeps.</span>
            </h1>

            <p
              className="anim-fade-up delay-400 mb-10 leading-relaxed"
              style={{
                fontSize: "1.05rem",
                color: "rgba(240,236,228,0.6)",
                maxWidth: 420,
              }}
            >
              Dinevo connects you to a smart courier network — real-time tracking,
              intelligent routing, and a 28-minute average delivery time.
            </p>

            <div className="flex flex-wrap gap-4 anim-fade-up delay-500">
              <a href="#cta" className="btn-primary">
                Start delivering →
              </a>

              <button
                className="btn-ghost"
                onClick={() => {
                  document.getElementById("how-it-works")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                See how it works <span>↓</span>
              </button>
            </div>

            <div
              className="flex gap-10 mt-12 pt-8 anim-fade-up delay-600"
              style={{ borderTop: "1px solid rgba(240,236,228,0.1)" }}
            >
              {[
                { num: "4.2M+", label: "Packages delivered" },
                { num: "28 min", label: "Avg delivery time" },
                { num: "99.4%", label: "On-time rate" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="font-display font-extrabold text-3xl"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "rgba(240,236,228,0.45)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative" style={{ width: 460, height: 460 }}>
              <div
                className="absolute inset-0 rounded-full border anim-spin-slow"
                style={{ borderColor: "rgba(240,236,228,0.07)" }}
              >
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full anim-pulse-dot"
                  style={{ background: "#ff5e3a" }}
                />
              </div>

              <div
                className="absolute rounded-full border anim-spin-rev"
                style={{
                  inset: "11%",
                  borderColor: "rgba(240,236,228,0.05)",
                  borderStyle: "dashed",
                }}
              >
                <div
                  className="absolute left-1/3 w-2 h-2 rounded-full"
                  style={{
                    background: "rgba(240,236,228,0.3)",
                    bottom: -4,
                  }}
                />
              </div>

              <div
                className="absolute rounded-full border anim-spin-slow"
                style={{
                  inset: "22%",
                  borderColor: "rgba(240,236,228,0.04)",
                  animationDuration: "14s",
                }}
              />

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 anim-float-up"
                style={{
                  width: 190,
                  background: "#1a1a1a",
                  borderRadius: 24,
                  padding: "1.5rem",
                  textAlign: "center",
                  border: "1px solid rgba(240,236,228,0.1)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ fontSize: "2.8rem", marginBottom: 8 }}>🚚</div>
                <div
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{
                    color: "rgba(240,236,228,0.45)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Estimated arrival
                </div>
                <div
                  className="font-display font-extrabold"
                  style={{
                    fontSize: "1.9rem",
                    letterSpacing: "-0.04em",
                    marginTop: 2,
                  }}
                >
                  14 min
                </div>
                <div className="text-sm font-bold mt-1" style={{ color: "#ff5e3a" }}>
                  ● En route
                </div>
              </div>

              <FloatCard style={{ top: "6%", right: "-12%" }} dot="green">
                Order picked up ✓
              </FloatCard>

              <FloatCard
                style={{
                  bottom: "12%",
                  left: "-14%",
                  animationName: "floatDown",
                  animationDuration: "6s",
                }}
                dot="orange"
              >
                3 orders nearby
              </FloatCard>

              <FloatCard
                style={{
                  top: "42%",
                  right: "-18%",
                  animationDuration: "7s",
                  animationDelay: "1s",
                }}
                dot="blue"
              >
                Route optimised ✓
              </FloatCard>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in delay-800"
          style={{ color: "rgba(240,236,228,0.3)" }}
        >
          <div
            className="text-xs tracking-widest uppercase"
            style={{ letterSpacing: "0.12em", fontSize: "0.65rem" }}
          >
            Scroll
          </div>
          <div
            className="w-px h-10 origin-top"
            style={{
              background: "linear-gradient(to bottom, rgba(255,94,58,0.6), transparent)",
              animation: "slideRight 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      <div className="overflow-hidden py-4" style={{ background: "#ff5e3a" }}>
        <div className="anim-ticker flex" style={{ width: "max-content" }}>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex">
              {[
                "Same-day delivery",
                "Real-time tracking",
                "Smart routing",
                "Business API",
                "24/7 support",
                "Carbon-neutral options",
                "Proof of delivery",
                "Live ETA updates",
              ].map((text) => (
                <span
                  key={text}
                  className="flex items-center gap-4 px-8 text-sm font-bold uppercase whitespace-nowrap text-white"
                  style={{ letterSpacing: "0.07em" }}
                >
                  {text} <span style={{ opacity: 0.5 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="py-32 px-8 md:px-16" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>What we offer</SectionLabel>

          <div className="reveal">
            <h2
              className="font-display font-extrabold mb-4"
              style={{
                fontSize: "clamp(2.2rem,4vw,3.6rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              Every delivery,
              <br />
              every&nbsp;
              <em
                className="font-serif"
                style={{ color: "#ff5e3a", fontStyle: "italic", fontWeight: 400 }}
              >
                need
              </em>
            </h2>

            <p
              className="mb-16 leading-relaxed"
              style={{
                color: "rgba(240,236,228,0.55)",
                maxWidth: 460,
                fontSize: "0.98rem",
              }}
            >
              From express parcels to scheduled freight — Dinevo handles it with
              speed, care, and full transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            <ServiceCard
              icon="⚡"
              label="Our fastest"
              name="Express Delivery"
              desc="60-minute guaranteed delivery windows anywhere in the city. Real-time driver tracking from pickup to doorstep."
              price="From $4.99"
              featured
              className="md:row-span-1"
              delay="delay-100"
            />

            <ServiceCard
              icon="📦"
              label="For business"
              name="Bulk Shipping"
              desc="Volume pricing and scheduled routes for your e-commerce or retail operation with dedicated account support."
              price="Custom pricing"
              delay="delay-200"
            />

            <ServiceCard
              icon="🕐"
              label="Plan ahead"
              name="Scheduled Delivery"
              desc="Pick your time slot up to 7 days in advance. No rush, no surprises — just reliable doorstep delivery."
              price="From $2.99"
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16" id="how-it-works" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel>How it works</SectionLabel>

            <div className="reveal">
              <h2
                className="font-display font-extrabold mb-4"
                style={{
                  fontSize: "clamp(2.2rem,4vw,3.6rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                }}
              >
                Three steps to&nbsp;
                <em
                  className="font-serif"
                  style={{ color: "#ff5e3a", fontStyle: "italic", fontWeight: 400 }}
                >
                  anywhere
                </em>
              </h2>

              <p
                className="mb-14 leading-relaxed"
                style={{
                  color: "rgba(240,236,228,0.55)",
                  maxWidth: 420,
                  fontSize: "0.98rem",
                }}
              >
                We have cut the complexity so you can focus on what matters most.
              </p>
            </div>

            <div>
              {[
                {
                  num: "01",
                  title: "Book in seconds",
                  desc: "Enter pickup and drop-off addresses in our app or API. Instant price estimate — zero hidden fees.",
                },
                {
                  num: "02",
                  title: "We dispatch immediately",
                  desc: "Our algorithm matches your order to the nearest available courier in under 30 seconds.",
                },
                {
                  num: "03",
                  title: "Track every move",
                  desc: "Live GPS tracking, driver ETA, and delivery confirmation with photo proof — all in real time.",
                },
              ].map(({ num, title, desc }, index) => (
                <div key={num} className={`step-hover flex gap-5 py-7 reveal delay-${(index + 1) * 100}`}>
                  <div
                    className="font-bold text-xs pt-1 shrink-0 w-7"
                    style={{ color: "#ff5e3a", letterSpacing: "0.04em" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1.5" style={{ letterSpacing: "-0.02em" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,236,228,0.5)" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center reveal delay-200">
            <div className="relative" style={{ height: 540 }}>
              <div
                className="relative"
                style={{
                  width: 248,
                  height: 492,
                  borderRadius: 38,
                  background: "#0d0d0d",
                  border: "1px solid rgba(240,236,228,0.08)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "#1a1a1a",
                    height: "100%",
                    borderRadius: 36,
                    padding: "2rem 1rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{
                      color: "rgba(240,236,228,0.4)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Dinevo
                  </div>

                  <div className="flex-1 relative rounded-xl overflow-hidden" style={{ background: "#242424" }}>
                    <svg width="100%" height="100%" viewBox="0 0 200 160" preserveAspectRatio="none">
                      <line
                        x1="30"
                        y1="120"
                        x2="170"
                        y2="40"
                        stroke="rgba(255,94,58,0.3)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <circle cx="30" cy="120" r="4" fill="#ff5e3a" />
                      <circle cx="170" cy="40" r="4" fill="rgba(240,236,228,0.6)" />
                      <circle
                        cx="110"
                        cy="76"
                        r="5"
                        fill="#ff5e3a"
                        style={{ animation: "floatUp 2s ease-in-out infinite" }}
                      />
                    </svg>

                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 14,
                        fontSize: "0.55rem",
                        fontWeight: 700,
                        color: "#ff5e3a",
                        background: "rgba(255,94,58,0.12)",
                        padding: "3px 8px",
                        borderRadius: 100,
                      }}
                    >
                      En route
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#111",
                      borderRadius: 12,
                      padding: "0.75rem",
                      border: "1px solid rgba(240,236,228,0.06)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: "rgba(240,236,228,0.35)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Order #D-48291
                      </span>

                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: "#ff5e3a",
                          background: "rgba(255,94,58,0.1)",
                          padding: "2px 7px",
                          borderRadius: 100,
                        }}
                      >
                        Active
                      </span>
                    </div>

                    <div
                      style={{
                        height: 3,
                        background: "rgba(240,236,228,0.08)",
                        borderRadius: 100,
                        overflow: "hidden",
                      }}
                    >
                      <div className="anim-progress" style={{ height: "100%", background: "#ff5e3a", borderRadius: 100 }} />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 6,
                        fontSize: "0.58rem",
                        color: "rgba(240,236,228,0.35)",
                      }}
                    >
                      <span>Picked up</span>
                      <span style={{ color: "#ff5e3a" }}>14 min away</span>
                    </div>
                  </div>
                </div>
              </div>

              <Notif style={{ top: "4%", right: "-40%" }} emoji="✅">
                Package picked up!
              </Notif>

              <Notif
                style={{
                  bottom: "10%",
                  left: "-42%",
                  animationName: "floatDown",
                }}
                emoji="🚚"
              >
                Driver 2 min away
              </Notif>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16" id="reviews" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel light>Testimonials</SectionLabel>

          <div className="reveal">
            <h2
              className="font-display font-extrabold mb-16"
              style={{
                fontSize: "clamp(2.2rem,4vw,3.6rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              Trusted by&nbsp;
              <em
                className="font-serif"
                style={{ color: "#ff5e3a", fontStyle: "italic", fontWeight: 400 }}
              >
                thousands
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                init: "MK",
                col: "#ff5e3a",
                name: "Marcus K.",
                role: "Head of Ops, Volta Goods",
                text: "We switched our entire logistics operation to Dinevo last quarter. The API integration took an afternoon and our fulfillment time dropped by 40%.",
              },
              {
                init: "AL",
                col: "#3b82f6",
                name: "Amara L.",
                role: "Regular customer",
                text: "I love how transparent everything is. Live GPS, real ETAs, photo confirmation. No more delivery ambiguity ever again.",
              },
              {
                init: "RP",
                col: "#22c55e",
                name: "Ryo P.",
                role: "Owner, Bloom Market",
                text: "Scheduled delivery alone saves us hours every week. Our shop relies on Dinevo for all supplier pickups.",
              },
            ].map(({ init, col, name, role, text }, index) => (
              <div
                key={name}
                className={`card-hover rounded-2xl p-8 reveal delay-${(index + 1) * 100}`}
                style={{
                  background: "#111",
                  border: "1px solid rgba(240,236,228,0.06)",
                  borderRadius: 20,
                }}
              >
                <div className="text-base mb-5" style={{ color: "#ff5e3a", letterSpacing: "0.08em" }}>
                  ★★★★★
                </div>

                <p
                  className="text-sm leading-relaxed mb-7 font-serif"
                  style={{
                    color: "rgba(240,236,228,0.7)",
                    fontStyle: "italic",
                  }}
                >
                  "{text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: col }}
                  >
                    {init}
                  </div>

                  <div>
                    <div className="font-bold text-sm">{name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(240,236,228,0.4)" }}>
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-32 px-8 md:px-16 relative overflow-hidden text-center"
        id="cta"
        style={{ background: "#111111" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,94,58,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <SectionLabel>Limited offer</SectionLabel>

          <div className="reveal">
            <h2
              className="font-display font-extrabold mb-4 mx-auto"
              style={{
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              Your first delivery,&nbsp;
              <em
                className="font-serif"
                style={{ color: "#ff5e3a", fontStyle: "italic", fontWeight: 400 }}
              >
                on us
              </em>
            </h2>

            <p
              className="mb-10 leading-relaxed mx-auto"
              style={{
                color: "rgba(240,236,228,0.55)",
                maxWidth: 440,
                fontSize: "1rem",
              }}
            >
              Enter your email and we will send you a free delivery credit. No card required. No spam.
            </p>

            {submitted ? (
              <div
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold anim-fade-up"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "#22c55e",
                }}
              >
                ✓ Check your inbox — your free delivery is on the way!
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-full text-sm font-medium outline-none transition-all duration-200"
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(240,236,228,0.12)",
                    color: "#f0ece4",
                    fontFamily: "'Syne', sans-serif",
                  }}
                  onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
                    event.currentTarget.style.borderColor = "#ff5e3a";
                  }}
                  onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                    event.currentTarget.style.borderColor = "rgba(240,236,228,0.12)";
                  }}
                />

                <button
                  className="btn-primary"
                  onClick={() => {
                    if (email.trim()) {
                      setSubmitted(true);
                    }
                  }}
                >
                  Claim offer →
                </button>
              </div>
            )}

            <p className="mt-4 text-xs" style={{ color: "rgba(240,236,228,0.3)" }}>
              Unsubscribe anytime. We hate spam too.
            </p>
          </div>
        </div>
      </section>

      <footer
        className="px-8 md:px-16 pt-16 pb-8"
        style={{
          background: "#080808",
          borderTop: "1px solid rgba(240,236,228,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div>
              <div
                className="font-display font-extrabold text-3xl mb-2"
                style={{ letterSpacing: "-0.04em" }}
              >
                Di<span className="accent">ne</span>vo
              </div>
              <div className="text-xs" style={{ color: "rgba(240,236,228,0.35)" }}>
                Delivery, redefined.
              </div>
            </div>

            <div className="flex gap-16 flex-wrap">
              {[
                { title: "Product", links: ["Features", "Pricing", "API Docs", "Integrations"] },
                { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
                { title: "Support", links: ["Help center", "Contact us", "Status", "Terms & Privacy"] },
              ].map(({ title, links }) => (
                <div key={title}>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-5"
                    style={{
                      color: "rgba(240,236,228,0.3)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {title}
                  </div>

                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-sm mb-3 transition-colors duration-200"
                      style={{ color: "rgba(240,236,228,0.55)" }}
                      onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => {
                        event.currentTarget.style.color = "#f0ece4";
                      }}
                      onMouseLeave={(event: React.MouseEvent<HTMLAnchorElement>) => {
                        event.currentTarget.style.color = "rgba(240,236,228,0.55)";
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-center pt-6 gap-3"
            style={{
              borderTop: "1px solid rgba(240,236,228,0.06)",
              color: "rgba(240,236,228,0.25)",
              fontSize: "0.78rem",
            }}
          >
            <span>© 2026 Dinevo Inc. All rights reserved.</span>
            <span>Made for fast cities ◆</span>
          </div>
        </div>
      </footer>
    </>
  );
}