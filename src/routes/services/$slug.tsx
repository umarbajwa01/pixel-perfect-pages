import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "lucide-react";
import { SiteLayout, QuoteBanner } from "@/components/site/Layout";
import { getService, services, site } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} | The Global Estimating`
      : "Service | The Global Estimating";
    const description = loaderData?.short ?? "Construction estimating service.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(loaderData
          ? [
              { property: "og:image", content: loaderData.image },
              { name: "twitter:image", content: loaderData.image },
            ]
          : []),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative isolate bg-ink pt-40 pb-20">
        <img
          src={service.image}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 size-full object-cover opacity-35 grayscale"
        />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-foreground/70">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-primary">{service.title}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black text-ink-foreground uppercase md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-foreground/80">
            {service.short}
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div className="reveal">
            <img
              src={service.image}
              alt={service.title}
              className="h-[420px] w-full border border-border object-cover grayscale"
            />
            <h2 className="mt-10 font-display text-3xl font-extrabold">
              Overview
            </h2>
            <p className="mt-4 text-muted-foreground">{service.intro}</p>

            <h2 className="mt-10 font-display text-3xl font-extrabold">
              What's Included
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 bg-sand p-4 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-3xl font-extrabold">
              Benefits
            </h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-2 shrink-0 bg-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-3xl font-extrabold">
              How It Works
            </h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.process.map((p, i) => (
                <li key={p.step} className="border-l-2 border-primary bg-sand p-5">
                  <span className="font-display text-sm tracking-widest text-primary uppercase">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold">
                    {p.step}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="reveal space-y-6">
            <div className="bg-ink p-8 text-ink-foreground">
              <h2 className="font-display text-2xl font-bold">All Services</h2>
              <ul className="mt-5 space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className={`block border-b border-white/10 py-2 transition-colors hover:text-primary ${
                        s.slug === service.slug
                          ? "text-primary"
                          : "text-ink-foreground/80"
                      }`}
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary p-8 text-primary-foreground">
              <h2 className="font-display text-2xl font-bold">
                Need this priced?
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/90">
                Send your drawings and bid date. We'll come back with a fixed
                quote before any work starts.
              </p>
              <a
                href={site.phoneHref}
                className="btn-base mt-5 w-full justify-center bg-background text-foreground hover:bg-ink hover:text-ink-foreground"
              >
                <Phone className="size-4" aria-hidden /> {site.phone}
              </a>
              <Link
                to="/contact"
                className="btn-base mt-3 w-full justify-center border border-white/50 text-primary-foreground hover:bg-ink"
              >
                Get A Quote <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>

            <Link
              to="/services"
              className="btn-base w-full justify-center bg-sand text-foreground hover:bg-ink hover:text-ink-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden /> Back To Services
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-extrabold">
            Related Services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block border-l-2 border-primary bg-background"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-48 w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                />
                <span className="block p-6 text-center font-display text-lg font-bold">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteBanner />
    </SiteLayout>
  );
}
