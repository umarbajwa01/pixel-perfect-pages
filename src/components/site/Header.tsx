import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/data/site";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-4">
      <div className="container-x">
        <div
          className={`pointer-events-auto flex items-stretch justify-between bg-background pr-3 pl-0 transition-shadow ${
            scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.12)]" : ""
          }`}
        >
          <Logo />

          <nav
            aria-label="Main"
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <div key={link.to} className="group relative">
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="inline-flex items-center gap-1 py-3 font-display text-sm font-bold tracking-wider text-foreground uppercase transition-colors hover:text-primary"
                >
                  {link.label}
                  {link.to === "/services" && (
                    <ChevronDown className="size-3.5" aria-hidden />
                  )}
                </Link>

                {link.to === "/services" && (
                  <div className="invisible absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 border-t-2 border-primary bg-ink py-2 opacity-0 shadow-xl transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block px-4 py-2 text-sm text-ink-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 py-3">
            <Link
              to="/contact"
              className="btn-base hidden bg-primary text-primary-foreground hover:bg-ink sm:inline-flex"
            >
              Get a Quote <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="pointer-events-auto mt-1 border-t-2 border-primary bg-ink text-ink-foreground lg:hidden">
            <div className="flex items-center justify-end p-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center text-ink-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="px-5 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-3 font-display text-sm font-bold tracking-wider uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <p className="pt-4 pb-2 font-display text-xs tracking-widest text-primary uppercase">
                All Services
              </p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-ink-foreground/80"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
