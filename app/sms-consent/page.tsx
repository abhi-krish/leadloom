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
            This page explains how consent is obtained and what recipients can
            expect when receiving text messages.
          </p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate">
            <section>
              <h2 className="text-xl font-semibold text-ink">Overview</h2>
              <p className="mt-3">
                {siteConfig.name} provides automated SMS responses for businesses when
                a customer attempts to contact them by phone. This page explains how
                consent is obtained and what recipients can expect when receiving text
                messages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">How Consent Is Collected</h2>
              <p className="mt-3">
                A person may receive a text message when they initiate contact with a
                business by calling its phone number and the call is missed.
              </p>
              <p className="mt-3">
                If the call is not answered, an automated SMS may be sent
                acknowledging the missed call and allowing the customer to continue
                the conversation via text.
              </p>
              <p className="mt-3">
                By calling the business phone number, the caller consents to receive a
                reply via SMS related to their inquiry or interaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">What Messages Include</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Acknowledgement of a missed phone call</li>
                <li>Responses to inquiries or requests</li>
                <li>Appointment or service-related follow-ups</li>
                <li>Customer support communication related to the caller&apos;s request</li>
              </ul>
              <p className="mt-4">
                Messages are not used for unsolicited marketing or promotional campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Message Frequency</h2>
              <p className="mt-3">
                Message frequency varies depending on the conversation and the
                customer&apos;s interaction with the business.
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
                Recipients may opt out of SMS communication at any time by replying:
              </p>
              <pre className="mt-4 rounded-3xl bg-mist px-5 py-5 font-semibold text-ink">
STOP
              </pre>
              <p className="mt-4">
                After opting out, no further text messages will be sent unless the
                recipient initiates contact again.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Help</h2>
              <p className="mt-3">Recipients can reply:</p>
              <pre className="mt-4 rounded-3xl bg-mist px-5 py-5 font-semibold text-ink">
HELP
              </pre>
              <p className="mt-4">for assistance or contact us at:</p>
              <pre className="mt-4 rounded-3xl bg-mist px-5 py-5 font-semibold text-ink">
{legalConfig.contactEmail}
              </pre>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Consent Is Not a Condition of Purchase
              </h2>
              <p className="mt-3">
                Consent to receive text messages is not required as a condition of purchasing
                any goods or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Related Policies</h2>
              <p className="mt-3">
                For more information, please review our{" "}
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
