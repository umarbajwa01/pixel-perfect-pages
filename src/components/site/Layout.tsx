import { useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function QuoteBanner({
  title = "Looking For A Custom Quote Tailored To Your Project?",
}: {
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=70"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-25 grayscale"
      />
      <div
        aria-hidden
        className="clip-slant absolute inset-y-0 right-0 w-full bg-primary/95 md:w-3/5"
      />
      <div className="container-x relative flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <h2 className="max-w-xl font-display text-3xl font-extrabold text-ink-foreground md:text-4xl">
          {title}
        </h2>
        <Link
          to="/contact"
          className="btn-base bg-background text-foreground hover:bg-ink hover:text-ink-foreground"
        >
          Get Free Quote <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate bg-ink pt-40 pb-20">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover opacity-40 grayscale"
      />
      <div className="container-x">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold text-ink-foreground uppercase md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-ink-foreground/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
