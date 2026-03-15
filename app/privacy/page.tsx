import type { Metadata } from "next";
import { legalConfig, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-mist/60 px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-4xl border border-line bg-white p-8 shadow-panel sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Privacy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tightest text-ink">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate">
          This Privacy Policy explains how {legalConfig.companyName} collects,
          uses, and protects information when you visit the {siteConfig.name} website
          or contact us about our services.
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-slate">
          <section>
            <h2 className="text-xl font-semibold text-ink">Information We Collect</h2>
            <p className="mt-3">
              We may collect information you provide directly, including your name,
              email address, phone number, business details, and any information you
              submit through forms, scheduling links, or email.
            </p>
            <p className="mt-3">
              We may also collect limited technical information automatically, such as
              your IP address, browser type, device information, referring pages, and
              website usage data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">How We Use Information</h2>
            <p className="mt-3">
              We use collected information to respond to inquiries, schedule demos,
              operate and improve the website, communicate about our services, and
              maintain the security and reliability of our systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Sharing of Information</h2>
            <p className="mt-3">
              We do not sell personal information. We may share information with
              service providers that help us operate the website or run our business,
              subject to appropriate confidentiality and processing obligations. We
              may also disclose information when required by law or to protect our
              rights and security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Cookies and Analytics</h2>
            <p className="mt-3">
              We may use cookies or similar technologies to understand site usage,
              improve performance, and measure marketing effectiveness. You can
              control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Data Retention</h2>
            <p className="mt-3">
              We retain personal information only for as long as reasonably necessary
              for the purposes described in this policy, including legal, accounting,
              and operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Your Choices</h2>
            <p className="mt-3">
              You may contact us to request access to, correction of, or deletion of
              your information where applicable. We will review and respond in line
              with applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact us at{" "}
              <a className="font-medium text-ink underline underline-offset-4" href={`mailto:${legalConfig.contactEmail}`}>
                {legalConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
