import { Link } from "@tanstack/react-router";
import { ChevronRight, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { services, site } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-2xl font-extrabold">Our Services</h2>
          <span className="mt-2 mb-6 block h-px w-24 border-t-2 border-dotted border-primary" />
          <ul className="space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-primary"
                >
                  <ChevronRight className="size-4 text-primary" aria-hidden />
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-primary"
              >
                <ChevronRight className="size-4 text-primary" aria-hidden />
                More Services ...
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold">Pages</h2>
          <span className="mt-2 mb-6 block h-px w-24 border-t-2 border-dotted border-primary" />
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "FAQs", to: "/faqs" },
              { label: "Contact us", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-primary"
                >
                  <ChevronRight className="size-4 text-primary" aria-hidden />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold">Contact Us</h2>
          <span className="mt-2 mb-6 block h-px w-24 border-t-2 border-dotted border-primary" />
          <ul className="space-y-4 text-sm text-ink-foreground/85">
            {site.addresses.map((a) => (
              <li key={a} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{a}</span>
              </li>
            ))}
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-extrabold">
            Subscribe Newsletter
          </h2>
          <span className="mt-2 mb-6 block h-px w-24 border-t-2 border-dotted border-primary" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                setMsg("Please enter a valid email address.");
                return;
              }
              setMsg("Thanks — you're on the list.");
              setEmail("");
            }}
            className="space-y-3"
          >
            <label htmlFor="newsletter" className="sr-only">
              Email
            </label>
            <input
              id="newsletter"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="btn-base bg-primary text-primary-foreground hover:bg-background hover:text-foreground"
            >
              Submit Now <ArrowRight className="size-4" aria-hidden />
            </button>
            {msg && <p className="text-sm text-primary">{msg}</p>}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <Logo variant="plain" />
          <p className="text-sm text-ink-foreground/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
