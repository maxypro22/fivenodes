import PageHeader from "@/components/PageHeader";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "Terms of Service | Five Nodes for Artificial Intelligence",
  description:
    "Read the Terms of Service for fivenodes.ai — covering account usage, intellectual property, liability, and governing law.",
  path: "/terms",
  ogTitle: "Terms of Service — Five Nodes",
});

export default function TermsPage() {
  return (
    <main>
      <PageHeader eyebrow="Terms of Service" title="Terms of Service">
        Please read these Terms carefully before using our Service.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap max-w-[820px] mx-auto flex flex-col gap-8">
          <div className="reveal">
            <p className="text-sm text-muted-2 mb-4">
              Effective Date: March 2026 &middot; Last Updated: March 2026
            </p>
            <p className="text-[15px] text-muted leading-[1.8]">
              Please read these Terms of Service (&quot;Terms&quot;) carefully before
              using{" "}
              <a href="https://fivenodes.ai" className="underline">
                https://fivenodes.ai
              </a>{" "}
              (the &quot;Service&quot;) operated by Five Nodes for Artificial
              Intelligence (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By accessing or using our Service, you agree to be
              bound by these Terms. If you do not agree to these Terms, please do not
              use our Service.
            </p>
          </div>

          <div className="reveal d1">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              By creating an account or using our Service in any way, you represent
              that you are at least 13 years of age (or the minimum age of digital
              consent in your jurisdiction, whichever is greater), that you have read
              and understood these Terms, and that you agree to be bound by them. If
              you are using our Service on behalf of an organization, you represent
              that you have authority to bind that organization to these Terms.
            </p>
          </div>

          <div className="reveal d2">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              2. Description of Service
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              fivenodes.ai, operated by Five Nodes for Artificial Intelligence,
              provides an interactive demo platform that allows users to view and
              explore the Monitoring System developed by FiveNodes AI. The Service is
              accessed via Google or Meta (Facebook) login exclusively for the purpose
              of granting authenticated access to this demo experience. We reserve the
              right to modify, suspend, or discontinue any part of the Service at any
              time with or without notice.
            </p>
          </div>

          <div className="reveal d3">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              3. Account Registration
            </h2>
            <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">
              3.1 Creating an Account
            </h3>
            <p className="text-[15px] text-muted leading-[1.8]">
              To access the Service, you must log in using a supported third-party
              authentication provider. You agree to provide accurate, current, and
              complete information during registration and to keep your account
              information updated.
            </p>
            <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">
              3.2 Login via Google
            </h3>
            <p className="text-[15px] text-muted leading-[1.8]">
              We offer the option to log into the Service using your Google account via
              Google&apos;s OAuth 2.0 service. By choosing this option, you authorize us
              to access basic Google profile information (name, email address, and
              profile picture) as described in our Privacy Policy. Your use of Google
              Sign-In is also subject to Google&apos;s Terms of Service and Google&apos;s
              Privacy Policy. We will use your Google account data only for account
              creation and authentication on fivenodes.ai, in compliance with the
              Google API Services User Data Policy.
            </p>
            <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">
              3.3 Login via Meta (Facebook)
            </h3>
            <p className="text-[15px] text-muted leading-[1.8]">
              We also offer the option to log into the Service using your Meta
              (Facebook) account. By choosing this option, you authorize us to access
              basic Meta profile information (name, email address, and profile picture)
              as described in our Privacy Policy. Your use of Meta Login is subject to
              Meta&apos;s Terms of Service and Meta&apos;s Privacy Policy. We will use
              your Meta account data only for account creation and authentication on
              fivenodes.ai, in compliance with Meta&apos;s Platform Terms and Developer
              Policies.
            </p>
            <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">
              3.4 Account Security
            </h3>
            <p className="text-[15px] text-muted leading-[1.8]">
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account. You
              agree to notify us immediately of any unauthorized access or use of your
              account. We are not liable for any loss or damage arising from your
              failure to protect your account credentials.
            </p>
          </div>

          <div className="reveal d1">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              4. User Conduct
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              By using our Service, you agree not to:
            </p>
            <ul className="list-disc pl-5 mt-3 flex flex-col gap-2 text-[15px] text-muted leading-[1.8]">
              <li>
                Violate any applicable local, national, or international law or
                regulation
              </li>
              <li>
                Impersonate any person or entity or misrepresent your affiliation with
                any person or entity
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Service or its
                related systems or networks
              </li>
              <li>
                Use automated tools, bots, or scrapers to access the Service without our
                express written permission
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the Service
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble any part of the Service
              </li>
              <li>
                Use the Service to send unsolicited commercial communications (spam)
              </li>
            </ul>
          </div>

          <div className="reveal d2">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              The Service and all its content, features, and functionality — including
              but not limited to the FiveNodes AI Monitoring System demo, software,
              text, graphics, logos, and interface design — are the exclusive property
              of Five Nodes for Artificial Intelligence and its licensors. All rights
              are reserved. You are granted a limited, non-exclusive, non-transferable
              right to access and view the Service solely for the purpose described in
              these Terms.
            </p>
            <p className="text-[15px] text-muted leading-[1.8] mt-3">
              The Service is provided for viewing purposes only. You have no right to
              copy, reproduce, distribute, publish, display, perform, modify, create
              derivative works from, or otherwise exploit any part of the Service or its
              content without our express written permission.
            </p>
          </div>

          <div className="reveal d3">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              6. Privacy
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              Your use of the Service is subject to our Privacy Policy, which is
              incorporated into these Terms by reference. Our Privacy Policy describes
              how we collect, use, and share information about you, including
              information obtained through Google and Meta login integrations. By using
              the Service, you agree to the collection and use of your information as
              described in our Privacy Policy.
            </p>
          </div>

          <div className="reveal d1">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              7. Third-Party Services and Links
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              Our Service integrates with third-party services, including Google and
              Meta, for authentication purposes. We are not responsible for the
              practices of these third parties. Your interactions with Google and Meta
              are governed by their respective terms and privacy policies. Our Service
              may also contain links to third-party websites. We have no control over
              the content or privacy practices of those sites and accept no
              responsibility for them.
            </p>
          </div>

          <div className="reveal d2">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              8. Disclaimers
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              The Service is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without any warranties of any kind, either express
              or implied, including but not limited to warranties of merchantability,
              fitness for a particular purpose, or non-infringement. We do not warrant
              that the Service will be uninterrupted, error-free, or free of viruses or
              other harmful components.
            </p>
          </div>

          <div className="reveal d3">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              To the fullest extent permitted by applicable law, Five Nodes for
              Artificial Intelligence and its officers, directors, employees, and agents
              shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages, including loss of profits, data, use, goodwill, or
              other intangible losses, resulting from (i) your access to or use of (or
              inability to access or use) the Service; (ii) any conduct or content of
              any third party on the Service; (iii) any content obtained from the
              Service; or (iv) unauthorized access, use, or alteration of your
              transmissions or content.
            </p>
            <p className="text-[15px] text-muted leading-[1.8] mt-3">
              In no event shall our total liability to you exceed one hundred U.S.
              dollars ($100).
            </p>
          </div>

          <div className="reveal d1">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              10. Indemnification
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              You agree to defend, indemnify, and hold harmless Five Nodes for
              Artificial Intelligence and its officers, directors, employees, and agents
              from and against any claims, liabilities, damages, losses, and expenses,
              including reasonable legal and accounting fees, arising out of or in
              connection with your violation of these Terms or your use of the Service.
            </p>
          </div>

          <div className="reveal d2">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              11. Termination
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              We reserve the right to suspend or terminate your account and access to
              the Service at any time, with or without cause, and with or without
              notice. Upon termination, your right to use the Service will immediately
              cease. Provisions of these Terms that by their nature should survive
              termination shall survive, including ownership provisions, warranty
              disclaimers, indemnity, and limitations of liability.
            </p>
            <p className="text-[15px] text-muted leading-[1.8] mt-3">
              You may terminate your account at any time by contacting us at
              info@fivenodes.ai. Deleting your account via Google or Meta settings does
              not automatically delete your fivenodes.ai account.
            </p>
          </div>

          <div className="reveal d3">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              These Terms shall be governed by and construed in accordance with the laws
              of the State of Qatar, without regard to its conflict of law provisions.
              Any disputes arising out of or relating to these Terms or your use of the
              Service shall be subject to the exclusive jurisdiction of the competent
              courts of Qatar.
            </p>
            <p className="text-[15px] text-muted leading-[1.8] mt-3">
              Any dispute shall first be attempted to be resolved informally by
              contacting us at info@fivenodes.ai. If the dispute cannot be resolved
              informally within 30 days, you agree to submit to the exclusive
              jurisdiction of the courts of Qatar.
            </p>
          </div>

          <div className="reveal d1">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              13. Changes to These Terms
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              We reserve the right to modify these Terms at any time. When we make
              material changes, we will notify you by updating the &quot;Last
              Updated&quot; date and, where appropriate, by sending an email
              notification or displaying a prominent notice on the Service. Your
              continued use of the Service after any changes constitutes your acceptance
              of the revised Terms. If you do not agree to the revised Terms, you must
              stop using the Service.
            </p>
          </div>

          <div className="reveal d2">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              14. Severability and Waiver
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              If any provision of these Terms is found to be invalid or unenforceable,
              the remaining provisions will remain in full force and effect. Our failure
              to enforce any right or provision of these Terms will not be considered a
              waiver of those rights.
            </p>
          </div>

          <div className="reveal d3">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              15. Entire Agreement
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              These Terms, together with our Privacy Policy and any other legal notices
              published by us on the Service, constitute the entire agreement between
              you and Five Nodes for Artificial Intelligence concerning the Service and
              supersede all prior agreements and understandings.
            </p>
          </div>

          <div className="reveal d1">
            <h2 className="font-heading font-bold text-xl text-ink mb-3">
              16. Contact Us
            </h2>
            <p className="text-[15px] text-muted leading-[1.8]">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-[15px] text-muted leading-[1.8] mt-3">
              <strong className="text-ink">
                Five Nodes for Artificial Intelligence
              </strong>
              <br />
              Email: info@fivenodes.ai
              <br />
              Website: https://fivenodes.ai
              <br />
              Address: 3rd Floor, Al Muftah Plaza, Al Reem St, Doha, Qatar
            </p>
          </div>

          <p className="reveal text-sm text-muted-2 mt-4">
            Last updated: March 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
