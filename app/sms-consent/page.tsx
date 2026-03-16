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
            This page describes the SMS program used by {legalConfig.companyName} for
            missed-call follow-up and customer care, including how verbal consent is
            collected before a text message is sent.
          </p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate">
            <section>
              <h2 className="text-xl font-semibold text-ink">Program Purpose</h2>
              <p className="mt-3">
                {legalConfig.companyName} uses SMS only for customer care communication
                related to a person&apos;s inquiry or missed phone call. Messages are used
                to acknowledge the missed call, answer questions, and continue the
                conversation after the customer has agreed to receive a text.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">How Verbal Opt-In Is Collected</h2>
              <p className="mt-3">
                SMS consent is collected verbally during a live phone conversation with
                the customer. Before a text message is sent, the business representative
                asks whether the customer would like to continue by text at the number
                they provided or called from.
              </p>
              <p className="mt-3">
                The customer is texted only after they clearly agree. If the customer
                does not provide consent, no SMS message is sent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Verbal Consent Script</h2>
              <p className="mt-3">
                The business uses a script substantially similar to the following:
              </p>
              <div className="mt-4 rounded-3xl bg-mist px-5 py-5 text-ink">
                “Would you like us to send you a text message at this number so we can
                follow up about your inquiry? Message frequency varies. Message and data
                rates may apply. Reply STOP to opt out and HELP for help.”
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">What Messages Include</h2>
              <p className="mt-3">
                Messages may include missed-call follow-up, responses to customer
                questions, appointment-related communication, and other service-related
                follow-up connected to the customer&apos;s request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Sample Messages</h2>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl bg-mist px-5 py-5 text-ink">
                  LeadLoom: Hi, sorry we missed your call. How can we help? Reply STOP
                  to opt out. Msg &amp; data rates may apply.
                </div>
                <div className="rounded-3xl bg-mist px-5 py-5 text-ink">
                  LeadLoom: Thanks for calling. Our team will follow up shortly. Reply
                  HELP for help or STOP to opt out.
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Message Frequency</h2>
              <p className="mt-3">
                Message frequency varies based on the customer&apos;s request and the
                conversation needed to respond to that request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Rates and Charges</h2>
              <p className="mt-3">
                Message and data rates may apply depending on the recipient&apos;s mobile
                carrier and service plan.
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
