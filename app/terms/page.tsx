import type { Metadata } from "next";
import { legalConfig, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-mist/60 px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-4xl border border-line bg-white p-8 shadow-panel sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Terms
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tightest text-ink">
          Terms of Service
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate">
          These Terms of Service govern your use of the {siteConfig.name} website
          and any related communications with {legalConfig.companyName}.
        </p>

        <div className="mt-10 space-y-8 text-base leading-7 text-slate">
          <section>
            <h2 className="text-xl font-semibold text-ink">Use of the Website</h2>
            <p className="mt-3">
              You may use this website only for lawful purposes and in a way that
              does not interfere with its operation or another user&apos;s access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">No Guarantee of Results</h2>
            <p className="mt-3">
              Information on this website is provided for general informational
              purposes. Any descriptions of service benefits, outcomes, or performance
              are illustrative and do not guarantee specific business results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Intellectual Property</h2>
            <p className="mt-3">
              All website content, branding, design, copy, graphics, and other
              materials are owned by or licensed to {legalConfig.companyName} and may
              not be reproduced or used without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Third-Party Services</h2>
            <p className="mt-3">
              This website may link to third-party services such as scheduling tools
              or external websites. We are not responsible for the content, policies,
              or availability of those third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Disclaimer</h2>
            <p className="mt-3">
              The website is provided on an &quot;as is&quot; and &quot;as available&quot;
              basis without warranties of any kind, to the fullest extent permitted
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {legalConfig.companyName} will
              not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from or related to your use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
