import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Clock, Target, Users } from "lucide-react";
import { SiteLayout, PageHero, QuoteBanner } from "@/components/site/Layout";
import { site, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The Global Estimating" },
      {
        name: "description",
        content:
          "Five years of construction cost estimating built on integrity, accuracy and teamwork, serving contractors across the USA and Canada.",
      },
      { property: "og:title", content: "About The Global Estimating" },
      {
        property: "og:description",
        content:
          "Who we are: a construction estimating team delivering accurate, bid-ready numbers for residential, commercial and public projects.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    text: "Every quantity is measured from your drawings and checked by a second estimator before it leaves our office.",
  },
  {
    icon: Clock,
    title: "On Your Bid Date",
    text: "Most estimates are returned in 24 to 48 hours. We work backwards from your deadline, not ours.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "No hidden allowances, no padded lines. If something is unclear in the documents, we flag it.",
  },
  {
    icon: Users,
    title: "An Extension Of Your Team",
    text: "We work alongside your estimators as overflow capacity, without the cost of extra headcount.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="••• About Us"
        title="Precision Meets Excellence"
        subtitle="Construction estimating services for public, residential and commercial bids across the USA and Canada."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Estimator reviewing construction blueprints"
              loading="lazy"
              className="h-[480px] w-full border border-border object-cover grayscale"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">••• Who We Are</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              Construction Estimating Services
            </h2>
            <p className="mt-5 text-muted-foreground">
              At {site.name}, we deliver precise estimates by focusing on every
              detail, ensuring accurate bids and informed decisions. With over
              five years of proven expertise, our approach is built on
              integrity, hard work, and dedication.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our estimators come from the field as well as the office, which
              means the numbers we produce reflect how work actually gets built.
              From single family homes to public tenders and industrial
              retrofits, every project is a challenge we embrace and conquer
              through teamwork and talent.
            </p>
            <p className="mt-4 text-muted-foreground">
              We work from offices in {site.addresses[0]} and{" "}
              {site.addresses[1]}, supporting contractors, developers,
              architects and owners in both markets.
            </p>
            <Link
              to="/contact"
              className="btn-base mt-8 bg-primary text-primary-foreground hover:bg-ink"
            >
              Work With Us <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-x">
          <h2 className="reveal font-display text-4xl font-extrabold md:text-5xl">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="reveal bg-background p-8">
                <v.icon className="size-8 text-primary" aria-hidden />
                <h3 className="mt-5 font-display text-xl font-bold">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-x grid gap-8 bg-ink px-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal">
              <span className="block font-display text-4xl font-black text-primary">
                {s.value}
              </span>
              <span className="text-ink-foreground/80">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <QuoteBanner />
    </SiteLayout>
  );
}
