import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { services, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Get A Free Estimating Quote" },
      {
        name: "description",
        content:
          "Request a free construction estimating quote. Offices in Sheridan, Wyoming and Toronto, Ontario. Call +1 (647) 427-4133.",
      },
      { property: "og:title", content: "Contact The Global Estimating" },
      {
        property: "og:description",
        content:
          "Send your drawings and bid date for a fixed quote on your construction estimate.",
      },
    ],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="••• Contact"
        title="Lets Request A Schedule For Free Consultation"
        subtitle="Tell us about your project and we'll come back with a fixed quote before any work begins."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal space-y-6">
            {site.addresses.map((a, i) => (
              <div key={a} className="flex gap-4 bg-sand p-6">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <h2 className="font-display text-lg font-bold">
                    {i === 0 ? "USA Office" : "Canada Office"}
                  </h2>
                  <p className="mt-1 text-muted-foreground">{a}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 bg-sand p-6">
              <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h2 className="font-display text-lg font-bold">Call Us</h2>
                <a
                  href={site.phoneHref}
                  className="mt-1 block text-muted-foreground hover:text-primary"
                >
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 bg-sand p-6">
              <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h2 className="font-display text-lg font-bold">Email Us</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-muted-foreground hover:text-primary"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const next: Errors = {};
              const name = String(data.get("name") ?? "").trim();
              const email = String(data.get("email") ?? "").trim();
              const message = String(data.get("message") ?? "").trim();
              if (name.length < 2) next.name = "Please enter your name.";
              if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
                next.email = "Please enter a valid email address.";
              if (message.length < 10)
                next.message = "Please tell us a little about the project.";
              setErrors(next);
              if (Object.keys(next).length === 0) {
                setSent(true);
                e.currentTarget.reset();
              }
            }}
            className="reveal bg-ink p-8 text-ink-foreground md:p-10"
          >
            <h2 className="font-display text-3xl font-extrabold">
              Request A Quote
            </h2>
            <p className="mt-2 text-ink-foreground/70">
              We reply to every enquiry within one business day.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Phone" name="phone" type="tel" optional />
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block font-display text-xs tracking-widest uppercase"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block font-display text-xs tracking-widest uppercase"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-primary">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn-base mt-6 bg-primary text-primary-foreground hover:bg-background hover:text-foreground"
            >
              Submit Now <ArrowUpRight className="size-4" aria-hidden />
            </button>

            {sent && (
              <p className="mt-4 bg-primary/15 p-4 text-sm text-primary">
                Thanks — your request has been captured. This form validates in
                the browser only; connect an email or database service to
                receive submissions.
              </p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  optional?: boolean | undefined;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-display text-xs tracking-widest uppercase"
      >
        {label}
        {optional && <span className="text-ink-foreground/50"> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="mt-1 text-sm text-primary">{error}</p>}
    </div>
  );
}
