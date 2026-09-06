import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, QuoteBanner } from "@/components/site/Layout";
import { faqs, softwareLogos } from "@/data/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | The Global Estimating" },
      {
        name: "description",
        content:
          "Answers on takeoff formats, turnaround times, software, pricing and what we need to start your construction estimate.",
      },
      { property: "og:title", content: "Estimating FAQs" },
      {
        property: "og:description",
        content:
          "Common questions about our construction estimating and material takeoff services.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="••• FAQs"
        title="Questions, Answered"
        subtitle="Everything you need to know before sending us your first set of drawings."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-sand py-24">
        <div className="container-x mx-auto max-w-4xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="reveal border-l-4 border-primary bg-background p-6"
            >
              <summary className="cursor-pointer font-display text-lg font-bold">
                {f.q}
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Software We Use For Takeoffs
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {softwareLogos.map((n) => (
              <span
                key={n}
                className="font-display text-xl font-bold text-muted-foreground"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <QuoteBanner />
    </SiteLayout>
  );
}
