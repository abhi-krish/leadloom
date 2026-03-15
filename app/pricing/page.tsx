import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const calendlyUrl = siteConfig.calendlyUrl;
const contactEmail = siteConfig.contactEmail;
const startSetupEmail = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "LeadLoom setup request"
)}&body=${encodeURIComponent(
  "Hi LeadLoom,\r\n\r\nI'm interested in getting started. Please send me the next steps for setup.\r\n\r\nBusiness name:\r\nIndustry:\r\nMonthly inbound leads:\r\nPhone:\r\n"
)}`;

const plans = [
  {
    name: "Starter",
    price: "$149",
    cadence: "/month",
    summary: "For owner-led teams that want every missed call answered with an immediate text.",
    features: [
      "1 local business number",
      "Instant missed-call text back",
      "Basic lead capture and routing",
      "Email support",
    ],
    primaryCta: "Get Started",
    primaryHref: startSetupEmail,
    primaryExternal: true,
    secondaryCta: "Book a Demo",
    secondaryHref: calendlyUrl,
    secondaryExternal: true,
    featured: false,
  },
  {
    name: "Growth",
    price: "$299",
    cadence: "/month",
    summary: "For busy offices that need stronger routing, customization, and faster team follow-up.",
    features: [
      "Everything in Starter",
      "Custom SMS reply logic",
      "Lead notifications for your staff",
      "Priority support",
    ],
    primaryCta: "Book a Demo",
    primaryHref: calendlyUrl,
    primaryExternal: true,
    secondaryCta: "Start Setup",
    secondaryHref: startSetupEmail,
    secondaryExternal: true,
    featured: true,
  },
  {
    name: "Custom",
    price: "Talk to us",
    cadence: "",
    summary: "For multi-location businesses or teams with more advanced intake and routing needs.",
    features: [
      "Multi-location setup",
      "Custom onboarding",
      "Advanced workflow design",
      "White-glove migration support",
    ],
    primaryCta: "Book a Demo",
    primaryHref: calendlyUrl,
    primaryExternal: true,
    secondaryCta: `Email ${siteConfig.name}`,
    secondaryHref: `mailto:${contactEmail}`,
    secondaryExternal: true,
    featured: false,
  },
] as const;

const faqs = [
  {
    question: "How quickly can we get live?",
    answer:
      "Most businesses can get set up quickly once we confirm your business details, number setup, and messaging flow.",
  },
  {
    question: "What happens after I get started?",
    answer:
      "We help you confirm your business information, provision your number, and make sure your first-response text flow matches how your team handles new leads.",
  },
  {
    question: "Which plan is right for me?",
    answer:
      "Starter is best for simpler missed-call follow-up. Growth is better if you need more customization or internal alerts. Custom is for larger or multi-location teams.",
  },
] as const;

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple ${siteConfig.name} pricing for local service businesses.`,
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader currentPath="/pricing" />
      <main className="min-h-screen bg-mist/40 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Pricing
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tightest text-ink sm:text-5xl">
              Choose the plan that fits your lead volume and response workflow
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate">
              Every plan is built to help you respond faster, keep more leads engaged,
              and book more jobs without adding front-desk overhead.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={calendlyUrl} external>
                Book a Demo
              </ButtonLink>
              <ButtonLink href={startSetupEmail} variant="secondary" external>
                Get Started
              </ButtonLink>
            </div>
          </div>

          <section className="mt-14 grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-4xl border p-8 shadow-panel ${
                  plan.featured
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-ink"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold">{plan.name}</h2>
                    <p
                      className={`mt-3 text-sm leading-6 ${
                        plan.featured ? "text-slate-200" : "text-slate"
                      }`}
                    >
                      {plan.summary}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                  {plan.cadence ? (
                    <span
                      className={`pb-1 text-sm ${
                        plan.featured ? "text-slate-200" : "text-slate"
                      }`}
                    >
                      {plan.cadence}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-2.5 w-2.5 rounded-full ${
                          plan.featured ? "bg-white" : "bg-accent"
                        }`}
                      />
                      <span className={plan.featured ? "text-slate-100" : "text-slate"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3">
                  <ButtonLink
                    href={plan.primaryHref}
                    external={plan.primaryExternal}
                    variant={plan.featured ? "secondary" : "primary"}
                  >
                    {plan.primaryCta}
                  </ButtonLink>
                  <ButtonLink
                    href={plan.secondaryHref}
                    external={plan.secondaryExternal}
                    variant={plan.featured ? "primary" : "secondary"}
                  >
                    {plan.secondaryCta}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-4xl border border-line bg-white p-8 shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Setup
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightest text-ink">
                You do not need to figure this out alone
              </h2>
              <p className="mt-4 text-base leading-7 text-slate">
                Once you choose a plan, we help configure your business number and first
                response flow so new leads hear from you right away. Book a demo if you
                want to talk it through first, or get started if you already know what you need.
              </p>
            </div>

            <div className="rounded-4xl border border-line bg-white p-8 shadow-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                FAQ
              </p>
              <div className="mt-6 space-y-6">
                {faqs.map((faq) => (
                  <article key={faq.question}>
                    <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                    <p className="mt-2 text-base leading-7 text-slate">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
