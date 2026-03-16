import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { legalConfig, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "SMS Consent",
  description: `SMS consent disclosures for ${siteConfig.name}.`,
  alternates: {
    canonical: "/sms-consent",
  },
};

export default function SmsConsentPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-mist/60 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-4xl border border-line bg-white p-8 shadow-panel sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            SMS Consent
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tightest text-ink">
            SMS Consent and Messaging Terms
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate">
            This page explains how contacts opt in to receive text messages related to{" "}
            {siteConfig.name} and what they can expect after consent is provided.
          </p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate">
            <section>
              <h2 className="text-xl font-semibold text-ink">How Consent Is Collected</h2>
              <p className="mt-3">
                A person may consent to receive SMS messages from {legalConfig.companyName} by
                explicitly providing their phone number and agreeing to receive text
                communication through a website form, scheduling flow, intake process,
                or another clear opt-in interaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">What Messages Include</h2>
              <p className="mt-3">
                Messages may include responses to inquiries, appointment-related follow-up,
                lead response communication, and service-related updates connected to the
                user&apos;s request or interaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Message Frequency</h2>
              <p className="mt-3">
                Message frequency varies based on the conversation and the customer&apos;s
                interaction with the business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Rates and Charges</h2>
              <p className="mt-3">
                Message and data rates may apply depending on the recipient&apos;s mobile
                carrier and plan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Opt-Out</h2>
              <p className="mt-3">
                Recipients may opt out of SMS communication at any time by replying
                <span className="font-semibold text-ink"> STOP</span>. After opting out,
                no further text messages will be sent unless the recipient opts in again.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Help</h2>
              <p className="mt-3">
                Recipients can reply <span className="font-semibold text-ink">HELP</span> for
                assistance or contact us at{" "}
                <a
                  className="font-medium text-ink underline underline-offset-4"
                  href={`mailto:${legalConfig.contactEmail}`}
                >
                  {legalConfig.contactEmail}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Consent Is Not a Condition of Purchase</h2>
              <p className="mt-3">
                Consent to receive text messages is not required as a condition of purchasing
                any goods or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Related Policies</h2>
              <p className="mt-3">
                For more information, review our{" "}
                <a className="font-medium text-ink underline underline-offset-4" href="/privacy">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="font-medium text-ink underline underline-offset-4" href="/terms">
                  Terms of Service
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
