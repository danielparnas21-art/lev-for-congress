import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Lev Parnas for Congress collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacy Policy"
      title="Your data. Our promise."
      lastUpdated="May 27, 2026"
    >
      <p>
        <strong>Lev Parnas for Congress</strong> (the <q>Campaign</q>, <q>we</q>, <q>us</q>) values your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
      </p>
      <p>
        By using this website ({" "}
        <a href="https://levparnas.org">levparnas.org</a>{" "}
        ) or signing up for our communications, you agree to the practices described below.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect information you provide directly to us when you:</p>
      <ul>
        <li>
          <strong>Subscribe to email or SMS updates</strong> — name, email address, mobile phone number, ZIP code.
        </li>
        <li>
          <strong>Volunteer</strong> — name, contact information, neighborhood, availability, and skills you choose to share.
        </li>
        <li>
          <strong>Make a contribution</strong> — name, postal address, employer, occupation, payment information (handled directly by our payment processor; we do not store full card numbers on our servers), and any optional notes you include.
        </li>
        <li>
          <strong>Contact the campaign</strong> — anything you send us by email, web form, or letter.
        </li>
      </ul>
      <p>
        We also automatically collect limited technical information when you visit the site — your IP address, browser type, device type, pages viewed, and referring URL — through standard server logs and analytics tools.
      </p>

      <h2>2. How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Send you campaign updates, event invitations, and direct asks (email and, with your consent, SMS).</li>
        <li>Process and acknowledge contributions, including verifying eligibility under federal election law.</li>
        <li>Match you to volunteer opportunities and events near you.</li>
        <li>Comply with applicable laws, including federal campaign finance reporting requirements.</li>
        <li>Improve the website and understand which messages and topics resonate with our supporters.</li>
      </ul>

      <h2>3. FEC reporting of contributions</h2>
      <p>
        <strong>Federal law requires us to report donor information.</strong> If you contribute to the Campaign, federal election law requires us to publicly report your name, mailing address, employer, and occupation if your aggregate contributions exceed $200 per election cycle. This information is filed with the Federal Election Commission (FEC) and becomes part of the public record. There is no way to contribute confidentially to a federal campaign above this threshold.
      </p>
      <p>
        Contributions below $200 are still recorded internally but are not individually reported by name to the FEC.
      </p>

      <h2>4. Service providers we share data with</h2>
      <p>
        We share information with vetted service providers strictly so they can perform services on our behalf. These include:
      </p>
      <ul>
        <li>
          <strong>Payment processing</strong> — contributions are currently processed by{" "}
          <strong>Squarespace Payments</strong> (Stripe). The Campaign is transitioning to{" "}
          <strong>Anedot, Inc.</strong>, a federally-aware donation platform, as the primary processor. Both partners store donor payment information under PCI-compliant encryption.
        </li>
        <li>
          <strong>Email and contact management</strong> — the Campaign uses{" "}
          <strong>Action Network</strong> and/or{" "}
          <strong>Mailchimp</strong> to deliver email and manage supporter records.
        </li>
        <li>
          <strong>SMS provider</strong> — if you opt in to text messages, delivery is handled by{" "}
          <strong>Twilio</strong> (directly or via Action Network's SMS infrastructure).
        </li>
        <li>
          <strong>Hosting and analytics</strong> —{" "}
          <strong>Vercel</strong> (hosting and CDN) and{" "}
          <strong>Vercel Analytics</strong> (aggregated, anonymous usage data). The Campaign does not use Google Analytics or third-party advertising trackers.
        </li>
      </ul>
      <p>
        Each provider is contractually obligated to use your information only to perform services for the Campaign and to protect it in accordance with their own privacy practices.
      </p>

      <h2>5. We do not sell or trade your information</h2>
      <p>
        The Campaign does <strong>not sell</strong> your personal information to data brokers, commercial third parties, or other campaigns.
      </p>
      <p>
        Federal political campaigns sometimes trade or share supporter lists with other candidates, committees, or party organizations. <strong>Lev Parnas for Congress does not engage in list-trading.</strong> The Campaign is Independent and does not share supporter contact information with party organizations, other federal candidates, or third-party causes. Your email and phone number stay with this Campaign.
      </p>

      <h2>6. Email and SMS communications</h2>
      <p>
        When you subscribe, you consent to receive periodic emails from the Campaign. You can unsubscribe at any time using the link in every email, or by writing to{" "}
        <a href="mailto:info@levparnas.org">info@levparnas.org</a>.
      </p>
      <p>
        If you provide a mobile phone number and check the SMS-consent box, you consent to receive recurring campaign text messages. Message and data rates may apply. Frequency varies. Reply <strong>HELP</strong> for help. Reply <strong>STOP</strong> at any time to opt out. See our full <a href="/terms#sms">SMS terms</a> for details.
      </p>

      <h2>7. Cookies and analytics</h2>
      <p>
        The site uses essential cookies necessary for functionality (e.g., remembering whether you've dismissed our exit-intent prompt). With your consent where required, we may also use analytics cookies to understand how visitors use the site.
      </p>
      <p>
        Most browsers let you refuse or delete cookies. The site will continue to work without them, though some features (e.g., remembered preferences) may not behave as expected.
      </p>

      <h2>8. Data retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfill the purposes described in this policy, including legal obligations for FEC recordkeeping (which generally require retention for at least three years after the election to which the contributions relate).
      </p>
      <p>
        You may request deletion of your information at any time by emailing{" "}
        <a href="mailto:info@levparnas.org">info@levparnas.org</a>. We will honor deletion requests except where retention is required by law (for example, FEC contribution records).
      </p>

      <h2>9. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or restrict the use of your personal information. To exercise these rights, contact us at{" "}
        <a href="mailto:info@levparnas.org">info@levparnas.org</a> and we will respond within a reasonable timeframe.
      </p>

      <h2>10. Children</h2>
      <p>
        This site is not directed to individuals under 18. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us with personal information, please contact us and we will delete it.
      </p>

      <h2>11. Security</h2>
      <p>
        We use industry-standard administrative, technical, and physical safeguards to protect your information. No system is perfectly secure, however, and we cannot guarantee absolute security of transmitted data.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above. Material changes will be highlighted at the top of this page for at least 30 days.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about this Privacy Policy or our data practices can be sent to{" "}
        <a href="mailto:info@levparnas.org">info@levparnas.org</a>, or by mail to:
      </p>
      <p>
        <strong>Lev Parnas for Congress</strong>
        <br />
        <span className="text-sm text-[var(--color-muted)]">
          [Official mailing address — provided by campaign treasurer; matches the address on file with the FEC]
        </span>
        <br />
        Miami-Dade County, Florida
      </p>
    </LegalPageShell>
  );
}
