import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHero, QuoteBanner } from "@/components/site/Layout";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Construction Estimating & Takeoffs" },
      {
        name: "description",
        content:
          "Cost estimation, architectural drafting, 3D drawings, MEP, renovation, residential, commercial and public bid estimates.",
      },
      { property: "og:title", content: "Our Estimating Services" },
      {
        property: "og:description",
        content:
          "Eleven estimating services covering every stage of a construction bid, from takeoff to consulting.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="••• Services"
        title="The Best Service For You"
        subtitle="Strict quality control, reliable methods and precise, dependable estimates for every service need."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-sand py-24">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {services.slice(0, 5).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="reveal flex flex-col items-center justify-center gap-3 bg-background p-8 text-center transition-colors hover:bg-primary hover:text-primary-foreground"
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

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="reveal group relative block border-l-2 border-primary bg-background"
              >
                <span className="absolute top-0 right-0 z-10 flex size-14 items-center justify-center bg-ink text-ink-foreground transition-colors group-hover:bg-primary">
                  <ArrowUpRight className="size-6" aria-hidden />
                </span>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-56 w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                />
                <span className="block p-6">
                  <span className="block text-center font-display text-xl font-bold">
                    {s.title}
                  </span>
                  <span className="mt-2 block text-center text-sm text-muted-foreground">
                    {s.short}
                  </span>
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
