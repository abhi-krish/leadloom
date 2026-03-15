import { ButtonLink } from "@/components/button-link";
import { InfoCard } from "@/components/info-card";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

const calendlyUrl = siteConfig.calendlyUrl;
const contactEmail = siteConfig.contactEmail;
const privacyHref = "/privacy";
const termsHref = "/terms";

const trustPoints = [
  "Instant SMS follow-up",
  "Built for local service teams",
  "Simple setup with your current workflow",
];

const problemPoints = [
  {
    title: "Missed calls become missed revenue",
    description:
      "When a prospect reaches voicemail or waits too long for a response, they often book the next business that replies.",
  },
  {
    title: "Speed is the difference",
    description:
      "Fast SMS follow-up keeps the conversation alive while intent is highest, especially after hours or during busy service windows.",
  },
];

const steps = [
  {
    title: "1. Customer reaches out",
    description:
      "A prospect calls, submits a form, or messages outside business hours when your team is tied up.",
  },
  {
    title: "2. LeadLoom texts instantly",
    description:
      "LeadLoom sends an immediate, professional text so the lead feels acknowledged and knows what happens next.",
  },
  {
    title: "3. Your team closes the lead",
    description:
      "The conversation stays warm, your staff follows up with context, and more inbound demand turns into booked jobs.",
  },
];

const industries = [
  "Med Spas",
  "Dentists",
  "Roofing",
  "HVAC",
  "Real Estate",
  "Legal",
  "Auto Services",
];

const benefits = [
  {
    title: "Faster response without extra headcount",
    description:
      "Reach new leads in seconds even when the phone is missed, the office is closed, or the team is on-site.",
  },
  {
    title: "Fewer lost opportunities",
    description:
      "Reduce the lag between inbound interest and first contact so fewer high-intent leads slip away.",
  },
  {
    title: "A better customer experience",
    description:
      "Give prospects a clear, helpful first touchpoint that feels responsive instead of fragmented.",
  },
  {
    title: "Simple setup",
    description:
      "Designed to fit how local businesses already operate, without a complicated rollout or bloated tooling.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="border-b border-line/70 bg-white">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-8">
          <LinkLogo />
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            <a className="text-sm text-slate hover:text-ink" href="#how-it-works">
              How it works
            </a>
            <a className="text-sm text-slate hover:text-ink" href="#industries">
              Industries
            </a>
            <a className="text-sm text-slate hover:text-ink" href="#why-leadloom">
              Why LeadLoom
            </a>
          </nav>
          <ButtonLink href={calendlyUrl} external>
            Book a Demo
          </ButtonLink>
        </div>
      </header>

      <main>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                AI follow-up for local service businesses
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tightest text-ink sm:text-6xl">
                Turn missed calls into booked customers
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate sm:text-xl">
                {siteConfig.name} automatically texts new leads the moment they call,
                submit a form, or reach out after hours, so local businesses
                convert more inbound demand without extra staff.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={calendlyUrl} external>
                  Book a Demo
                </ButtonLink>
                <ButtonLink href="#how-it-works" variant="secondary">
                  See How It Works
                </ButtonLink>
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-sm text-slate sm:flex-row sm:flex-wrap sm:gap-6">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-4xl border border-line bg-mist p-6 shadow-panel sm:p-8">
              <div className="rounded-3xl border border-white bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">New inbound lead</p>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Sent instantly
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-mist px-4 py-3">
                    <p className="text-sm text-slate">Missed call from</p>
                    <p className="mt-1 font-semibold text-ink">Sarah, new patient inquiry</p>
                  </div>
                  <div className="rounded-2xl bg-ink px-4 py-4 text-sm leading-6 text-white">
                    Hi Sarah, thanks for calling Bright Smile Dental. We missed
                    you, but we can help. Reply here and our team will follow up
                    shortly to get you scheduled.
                  </div>
                  <div className="rounded-2xl border border-dashed border-line px-4 py-3">
                    <p className="text-sm font-medium text-ink">Outcome</p>
                    <p className="mt-1 text-sm text-slate">
                      The lead stays engaged while your team gets back to work.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Section
          eyebrow="The problem"
          title="Most businesses do not lose leads because of demand. They lose them because follow-up is slow."
          description="Inbound leads are most valuable in the first few minutes. If a call is missed or a form sits untouched, prospects keep moving."
          tone="muted"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {problemPoints.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>

        <Section
          id="how-it-works"
          eyebrow="How it works"
          title="A simple workflow that helps your team respond first"
          description={`${siteConfig.name} focuses on the first response window so your staff can spend less time chasing and more time closing.`}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <InfoCard
                key={step.title}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Section>

        <Section
          id="industries"
          eyebrow="Industries"
          title="Built for high-intent inbound demand across local services"
          description="LeadLoom fits businesses where speed-to-lead directly influences bookings, consultations, and signed jobs."
          tone="muted"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry}
                className="rounded-3xl border border-line bg-white px-5 py-6 shadow-panel"
              >
                <h3 className="text-base font-semibold text-ink">{industry}</h3>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="why-leadloom"
          eyebrow={`Why ${siteConfig.name}`}
          title="Designed to improve conversion without complicating operations"
          description="The product value is straightforward: respond faster, hold more conversations, and make a stronger first impression."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <InfoCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </Section>

        <section id="book-demo" className="py-20 sm:py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <div className="rounded-4xl border border-line bg-ink px-8 py-12 text-white shadow-panel sm:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Ready to see it in action?
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tightest sm:text-4xl">
                Book a demo and see how {siteConfig.name} helps local businesses convert more inbound leads.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                If you rely on calls, forms, and after-hours inquiries, LeadLoom
                gives you a faster first response without adding more manual work.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={calendlyUrl} external>
                  Book a Demo
                </ButtonLink>
                <ButtonLink href="#how-it-works" variant="secondary">
                  See How It Works
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-ink">LeadLoom</p>
            <a className="mt-1 inline-block hover:text-ink" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
          <nav aria-label="Legal" className="flex gap-6">
            <a className="hover:text-ink" href={privacyHref}>
              Privacy
            </a>
            <a className="hover:text-ink" href={termsHref}>
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

function LinkLogo() {
  return (
    <a className="text-lg font-semibold tracking-tight text-ink" href="#top">
      {siteConfig.name}
    </a>
  );
}
