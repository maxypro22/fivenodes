import PageHeader from "@/components/PageHeader";
import LegalDeck from "@/components/LegalDeck";

import { pageMeta } from "@/components/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Privacy Policy | Five Nodes for Artificial Intelligence",
  description:
    "Learn how Five Nodes for Artificial Intelligence collects, uses, and protects your data in compliance with privacy standards.",
  path: "/privacy",
  ogTitle: "Privacy Policy — Five Nodes",
});

const H2 = "font-heading font-bold text-xl text-ink";
const H3 = "font-heading font-bold text-lg text-ink";
const P = "text-[15px] text-muted leading-[1.8]";
const UL = "list-disc pl-6 flex flex-col gap-1 text-[15px] text-muted leading-[1.8]";

const INTRO = (
  <>
    <p className={P}>
      This Privacy Policy describes how fivenodes.ai, operated by Five Nodes for Artificial
      Intelligence (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and
      shares your personal information when you visit or use our website located at
      https://fivenodes.ai (the &quot;Service&quot;). This policy is written to comply with
      applicable privacy laws and the requirements of third-party authentication providers including
      Google and Meta (Facebook).
    </p>
    <p className={P}>
      By accessing or using our Service, you agree to the collection and use of information as
      described in this Privacy Policy. If you do not agree, please discontinue use of our Service.
    </p>
  </>
);

const SECTIONS = [
  {
    title: "Information We Collect",
    body: (
      <>
        <h3 className={H3}>1.1 Information You Provide Directly</h3>
        <p className={P}>
          When you create an account or interact with our Service, we may collect:
        </p>
        <ul className={UL}>
          <li>Full name</li>
          <li>Email address</li>
          <li>Username or display name</li>
          <li>Profile picture or avatar</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3 className={H3}>1.2 Information Collected via Google Sign-In</h3>
        <p className={P}>
          When you choose to log in using your Google account, we receive certain information from
          Google through their OAuth 2.0 service, which may include:
        </p>
        <ul className={UL}>
          <li>Your Google account name and email address</li>
          <li>Your Google profile picture</li>
          <li>A unique Google user identifier (Google ID)</li>
        </ul>
        <p className={P}>
          We use this information solely for the purpose of creating and managing your account on
          fivenodes.ai and granting you authenticated access to the FiveNodes AI Monitoring System
          demo. We do not access your Google contacts, Google Drive, Gmail, or any other Google
          services beyond the basic profile information required for authentication. We will never
          sell your Google user data to third parties. Our use of information received from Google
          APIs is limited to the practices described in this Privacy Policy, in compliance with the
          Google API Services User Data Policy, including the Limited Use requirements.
        </p>

        <h3 className={H3}>1.3 Information Collected via Meta (Facebook) Login</h3>
        <p className={P}>
          When you choose to log in using your Meta (Facebook) account, we receive certain
          information from Meta through their Login API, which may include:
        </p>
        <ul className={UL}>
          <li>Your Facebook name and email address</li>
          <li>Your Facebook profile picture</li>
          <li>A unique Meta user identifier (Facebook ID)</li>
        </ul>
        <p className={P}>
          We use this data only to create and authenticate your account on fivenodes.ai and grant
          you access to the FiveNodes AI Monitoring System demo. We do not access your Facebook
          friends list, posts, messages, or any other Meta data beyond the basic profile information
          required for login. We comply with Meta&apos;s Platform Terms and Developer Policies
          regarding the use of data obtained via Meta Login.
        </p>

        <h3 className={H3}>1.4 Automatically Collected Information</h3>
        <p className={P}>When you use our Service, we may automatically collect:</p>
        <ul className={UL}>
          <li>IP address and approximate location</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring URLs</li>
          <li>Cookie identifiers and session data</li>
        </ul>

        <h3 className={H3}>1.5 Cookies and Tracking Technologies</h3>
        <p className={P}>
          We may use cookies and similar tracking technologies to maintain your session, remember
          your preferences, and analyze how our Service is used. You may control cookie settings
          through your browser. Please note that disabling cookies may affect the functionality of
          certain features, including social login options.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        <p className={P}>We use the information we collect for the following purposes:</p>
        <ul className={UL}>
          <li>To create, maintain, and authenticate your account</li>
          <li>To provide, operate, and improve our Service</li>
          <li>To communicate with you about your account, updates, or support requests</li>
          <li>To send you important notices, security alerts, or policy updates</li>
          <li>To personalize your experience on fivenodes.ai</li>
          <li>To analyze usage trends and improve website performance</li>
          <li>To detect, prevent, and respond to fraud or security incidents</li>
          <li>To comply with applicable legal obligations</li>
        </ul>
        <p className={P}>We will NOT use your information for:</p>
        <ul className={UL}>
          <li>Selling or renting your personal data to third parties</li>
          <li>Sending unsolicited marketing emails without your consent</li>
          <li>Using Google or Meta user data for purposes beyond those explicitly described here</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Share Your Information",
    body: (
      <>
        <p className={P}>
          We do not sell your personal information. We may share your information in the following
          limited circumstances:
        </p>
        <h3 className={H3}>3.1 Service Providers</h3>
        <p className={P}>
          We may engage trusted third-party vendors to help operate our Service, such as cloud
          hosting providers, analytics platforms, and email delivery services. These parties are
          contractually prohibited from using your data for any purpose other than providing
          services to us.
        </p>
        <h3 className={H3}>3.2 Legal Requirements</h3>
        <p className={P}>
          We may disclose your information if required by law, court order, or government authority,
          or if we believe in good faith that such disclosure is necessary to protect our rights,
          your safety, or the safety of others.
        </p>
        <h3 className={H3}>3.3 Business Transfers</h3>
        <p className={P}>
          In the event of a merger, acquisition, or sale of assets, your information may be
          transferred to the acquiring entity. We will notify you via email or a prominent notice on
          our website before your data becomes subject to a different privacy policy.
        </p>
        <h3 className={H3}>3.4 With Your Consent</h3>
        <p className={P}>
          We may share your information with third parties if you have explicitly consented to such
          sharing.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention",
    body: (
      <>
        <p className={P}>
          We retain your personal information for as long as your account is active or as needed to
          provide you with our Service. We also retain data as necessary to comply with our legal
          obligations, resolve disputes, and enforce our agreements.
        </p>
        <p className={P}>
          When you delete your account, we will delete or anonymize your personal information within
          30 days, unless retention is required by law. Authentication tokens from Google and Meta
          are not stored after your session ends.
        </p>
      </>
    ),
  },
  {
    title: "Data Security",
    body: (
      <>
        <p className={P}>
          We implement industry-standard technical, administrative, and physical security measures
          to protect your personal information from unauthorized access, disclosure, alteration, or
          destruction. These measures include:
        </p>
        <ul className={UL}>
          <li>Encryption of data in transit using TLS/HTTPS</li>
          <li>Encryption of sensitive data at rest</li>
          <li>Access controls and authentication for internal systems</li>
          <li>Regular security reviews and vulnerability assessments</li>
        </ul>
        <p className={P}>
          However, no method of transmission or storage is 100% secure. We encourage you to use
          strong passwords and protect your account credentials.
        </p>
      </>
    ),
  },
  {
    title: "Your Rights and Choices",
    body: (
      <>
        <h3 className={H3}>6.1 Access and Correction</h3>
        <p className={P}>
          You have the right to access, update, or correct your personal information at any time
          through your account settings or by contacting us at info@fivenodes.ai.
        </p>
        <h3 className={H3}>6.2 Data Deletion</h3>
        <p className={P}>
          You may request the deletion of your account and associated personal data by contacting us
          at info@fivenodes.ai. Upon receiving a verified request, we will delete your data within 30
          days, subject to any legal retention obligations.
        </p>
        <h3 className={H3}>6.3 Revoking Third-Party Access</h3>
        <p className={P}>
          You may revoke fivenodes.ai&apos;s access to your Google account at any time through your
          Google Account Security settings at myaccount.google.com. You may revoke access to your
          Meta account at any time through Facebook Settings &gt; Apps and Websites.
        </p>
        <h3 className={H3}>6.4 Opt-Out of Communications</h3>
        <p className={P}>
          You may opt out of non-essential email communications by clicking the unsubscribe link in
          any marketing email, or by adjusting notification preferences in your account settings.
        </p>
        <h3 className={H3}>6.5 GDPR Rights (EEA/UK Users)</h3>
        <p className={P}>
          If you are located in the European Economic Area or United Kingdom, you have additional
          rights under the GDPR, including the right to data portability, the right to restrict
          processing, and the right to lodge a complaint with a supervisory authority.
        </p>
        <h3 className={H3}>6.6 CCPA Rights (California Residents)</h3>
        <p className={P}>
          If you are a California resident, you have the right to know what personal information we
          collect, the right to request deletion, and the right to opt out of the sale of personal
          information. We do not sell personal information. To exercise your rights, contact us at
          info@fivenodes.ai.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    body: (
      <>
        <p className={P}>
          Our Service is not directed to children under the age of 13. We do not knowingly collect
          personal information from children under 13. If you believe we have inadvertently collected
          such information, please contact us immediately at info@fivenodes.ai and we will delete it
          promptly. In compliance with the Google API Services User Data Policy, we do not use Google
          Sign-In in applications primarily directed at children.
        </p>
      </>
    ),
  },
  {
    title: "International Data Transfers",
    body: (
      <>
        <p className={P}>
          Your information may be processed and stored in countries other than your own. By using our
          Service, you consent to the transfer of your information to countries that may have
          different data protection laws than your country of residence. Where required, we apply
          appropriate safeguards such as Standard Contractual Clauses for transfers from the EEA.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Links",
    body: (
      <>
        <p className={P}>
          Our Service may contain links to third-party websites or services, including those of
          Google and Meta. We are not responsible for the privacy practices of those third parties.
          We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    body: (
      <>
        <p className={P}>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &quot;Last Updated&quot; date at the top of this page. If we make material changes to how we
          use your personal information, we will notify you by email or through a prominent notice on
          our website prior to the changes taking effect, and we will seek your renewed consent where
          required by law.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <>
        <p className={P}>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please contact us:
        </p>
        <p className={P}>
          <strong>Five Nodes for Artificial Intelligence</strong>
          <br />
          Email: info@fivenodes.ai
          <br />
          Website: https://fivenodes.ai
          <br />
          Address: 3rd Floor, Al Muftah Plaza, Al Reem St, Doha, Qatar
        </p>
        <p className={P}>
          For Google-related data inquiries, we will respond within 30 days. For GDPR-related
          requests, we will respond within the legally required timeframes.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd path="/privacy" locale="en" />
      <PageHeader eyebrow="Legal" title="Privacy Policy">
        Effective Date: March 2026 | Last Updated: March 2026
      </PageHeader>

      <section className="pb-24">
        <div className="wrap max-w-[820px] mx-auto">
          {/* Intro — always visible */}
          <div className="flex flex-col gap-6">{INTRO}</div>

          {/* Desktop / tablet: full document */}
          <div className="hidden md:flex flex-col gap-6 mt-6">
            {SECTIONS.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3">
                <h2 className={H2}>
                  {i + 1}. {s.title}
                </h2>
                {s.body}
              </div>
            ))}
          </div>

          {/* Mobile: rotating layered deck */}
          <div className="md:hidden mt-8">
            <LegalDeck sections={SECTIONS} />
          </div>

          <p className="text-sm text-muted-2 mt-8">
            Effective Date: March 2026 | Last Updated: March 2026
          </p>
        </div>
      </section>
    </main>
  );
}
