import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Home, Building2, ArrowRight } from "lucide-react";
import {
  SiteLayout,
  QuoteBanner,
} from "@/components/site/Layout";
import {
  services,
  site,
  stats,
  testimonials,
  softwareLogos,
  faqs,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Global Estimating | Construction Cost Estimating Services" },
      {
        name: "description",
        content:
          "Reliable construction estimating and material takeoffs for residential, commercial and public bids. Fast, accurate, bid-ready. Call +1 (647) 427-4133.",
      },
      {
        property: "og:title",
        content: "The Global Estimating | Construction Cost Estimating",
      },
      {
        property: "og:description",
        content:
          "Precise construction estimates and material takeoffs for every project, delivered in 24 to 48 hours.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeService, setActiveService] = useState(services[0].slug);
  const [t, setT] = useState(0);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate flex min-h-[86vh] items-center bg-ink">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1900&q=80"
          alt="Construction team reviewing project drawings on site"
          className="absolute inset-0 -z-10 size-full object-cover opacity-45 grayscale"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-transparent"
        />
        <div className="container-x pt-36 pb-24">
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-black text-ink-foreground uppercase md:text-7xl">
            Your Blueprint To Success!
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/80">
            "Reliable Construction Estimating & Material Quantities for Every
            Project"
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="btn-base bg-primary text-primary-foreground hover:bg-background hover:text-foreground"
            >
              Our Services <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <a
              href={site.phoneHref}
              className="btn-base border border-white/30 text-ink-foreground hover:bg-background hover:text-foreground"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr_1fr]">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80"
            alt="Estimating team on a construction site"
            loading="lazy"
            className="reveal h-[420px] w-full border border-border object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
          />
          <div className="reveal">
            <p className="eyebrow">••• About Us</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              Construction Estimating Services
            </h2>
            <p className="mt-5 text-muted-foreground">
              Where Precision Meets Excellence in Construction Estimating. With
              Precision and Excellence, We Deliver Top-Tier Construction
              Estimating Services for Public, Residential, and Commercial Bids.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center border-2 border-primary text-primary">
                  <Home className="size-5" aria-hidden />
                </span>
                <span className="font-display text-lg font-bold">
                  Residential
                  <br />
                  Estimates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center border-2 border-primary text-primary">
                  <Building2 className="size-5" aria-hidden />
                </span>
                <span className="font-display text-lg font-bold">
                  Commercial
                  <br />
                  Estimates
                </span>
              </div>
            </div>
            <Link
              to="/about"
              className="btn-base mt-8 bg-primary text-primary-foreground hover:bg-ink"
            >
              Read More <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="reveal">
            <p className="text-muted-foreground">
              At {site.name}, we deliver precise estimates by focusing on every
              detail, ensuring accurate bids and informed decisions. With over
              five years of proven expertise, our approach is built on
              integrity, hard work, and dedication. Every project is a challenge
              we embrace and conquer through teamwork and talent.
            </p>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
              alt="Blueprints and construction planning"
              loading="lazy"
              className="mt-8 h-64 w-full border border-border object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <QuoteBanner />

      {/* SERVICES */}
      <section className="bg-sand py-24">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="reveal">
              <p className="eyebrow">••• Services</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
                The Best Service For You
              </h2>
            </div>
            <div className="reveal">
              <p className="text-muted-foreground">
                Our Services adhere to strict quality control measures and use
                reliable methods to ensure accuracy. Our experienced team
                ensures every detail meets high standards, delivering precise
                and dependable estimates for your service needs.
              </p>
              <Link
                to="/services"
                className="btn-base mt-6 bg-primary text-primary-foreground hover:bg-ink"
              >
                See More <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {services.slice(0, 5).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                onMouseEnter={() => setActiveService(s.slug)}
                className={`reveal flex flex-col items-center justify-center gap-4 p-8 text-center transition-colors ${
                  activeService === s.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-ink hover:text-ink-foreground"
                }`}
              >
                <span className="font-display text-3xl font-black">
                  {s.title.charAt(0)}
                </span>
                <span className="font-display text-lg font-bold">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {services.slice(5, 8).map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} title={s.title} image={s.image} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-background py-16">
        <div className="container-x">
          <div className="grid gap-8 bg-primary px-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="reveal flex items-center gap-4">
                <span className="flex size-16 items-center justify-center bg-background font-display text-xl font-black text-primary">
                  {s.value.charAt(0)}
                </span>
                <span>
                  <span className="block font-display text-4xl font-black text-primary-foreground">
                    {s.value}
                  </span>
                  <span className="text-primary-foreground/90">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">••• Testimonial</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              What Our Clients Say About Us
            </h2>
            <div className="mt-10 border border-white/15 p-10 text-center">
              <p className="text-lg italic">"{testimonials[t].quote}"</p>
              <p className="mt-6 font-display text-xl font-bold">
                {testimonials[t].name}
              </p>
              <p className="text-ink-foreground/70">{testimonials[t].role}</p>
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setT(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`size-2.5 rounded-full transition-colors ${
                      i === t ? "bg-primary" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-2xl font-bold">
              We have 2563+ Global Active Clients
            </p>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80"
              alt="Site engineers at work"
              loading="lazy"
              className="mt-6 h-[360px] w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="bg-sand py-20">
        <div className="container-x">
          <div className="bg-background px-8 py-14 text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              Software We Use For Takeoffs
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {softwareLogos.map((n) => (
                <span
                  key={n}
                  className="font-display text-xl font-bold tracking-wide text-muted-foreground"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-sand pb-24">
        <div className="container-x">
          <h2 className="text-center font-display text-4xl font-extrabold md:text-5xl">
            FAQs
          </h2>
          <div className="mx-auto mt-10 max-w-4xl space-y-3">
            {faqs.slice(0, 3).map((f) => (
              <details
                key={f.q}
                className="border-l-4 border-primary bg-background p-6"
              >
                <summary className="cursor-pointer font-display text-lg font-bold">
                  {f.q}
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="btn-base bg-ink text-ink-foreground hover:bg-primary"
            >
              All FAQs <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <QuoteBanner title="Lets Request A Schedule For Free Consultation" />
    </SiteLayout>
  );
}

export function ServiceCard({
  slug,
  title,
  image,
}: {
  slug: string;
  title: string;
  image: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className="reveal group relative block border-l-2 border-primary bg-background"
    >
      <span className="absolute top-0 right-0 z-10 flex size-14 items-center justify-center bg-ink text-ink-foreground transition-colors group-hover:bg-primary">
        <ArrowUpRight className="size-6" aria-hidden />
      </span>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-56 w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
      />
      <span className="block p-6 text-center font-display text-xl font-bold">
        {title}
      </span>
    </Link>
  );
}
