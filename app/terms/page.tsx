import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use and SMS communication terms for levparnas.org.",
};

export default function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Terms of Use"
      title="Ground rules for the site."
      lastUpdated="May 27, 2026"
    >
      <p>
        These Terms of Use govern your access to and use of{" "}
        <a href="https://levparnas.org">levparnas.org</a> and its features (the <q>Site</q>), operated by <strong>Lev Parnas for Congress</strong> (the <q>Campaign</q>). By using the Site you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        The Site is intended for individuals 18 years of age or older. By using the Site you represent that you are at least 18 and have the capacity to enter into a binding agreement.
      </p>
      <p>
        Federal law restricts who can contribute to a federal political campaign. By contributing, you affirm that you are a U.S. citizen or lawfully admitted permanent resident, that the contribution is from your own funds, and that you are not a federal contractor, corporation, labor union, or foreign national. See our <a href="/donate">donate page</a> for the full contribution attestation.
      </p>

      <h2>2. Permitted use</h2>
      <p>You may use the Site to:</p>
      <ul>
        <li>Learn about the Campaign and Lev Parnas's platform.</li>
        <li>Sign up for email or SMS updates.</li>
        <li>Volunteer or RSVP to events.</li>
        <li>Make lawful contributions.</li>
        <li>Share Site content on social media and elsewhere consistent with these Terms.</li>
      </ul>

      <h2>3. Prohibited conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site for any unlawful purpose or in violation of federal, state, or local law.</li>
        <li>Submit false, misleading, or fraudulent information (including in connection with contributions).</li>
        <li>Attempt to gain unauthorized access to the Site, any related systems, or other users' accounts.</li>
        <li>Interfere with the Site's operation — for example, through automated scraping, denial-of-service, or malicious code.</li>
        <li>Impersonate any person or misrepresent your affiliation with the Campaign.</li>
        <li>Use the Site to harass, threaten, or harm others.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        All content on the Site — text, photographs, video, graphics, logos, the campaign signature, and design — is the property of the Campaign or used with permission, and is protected by U.S. and international copyright and trademark laws.
      </p>
      <p>
        You may share Site content on social media and quote it in news reporting, commentary, or non-commercial contexts consistent with fair use. For other reuses, contact{" "}
        <a href="mailto:press@levparnas.org">press@levparnas.org</a>.
      </p>

      <h2>5. Third-party links and content</h2>
      <p>
        The Site links to third-party websites and embeds third-party content (e.g., YouTube videos, MSNBC documentary trailer, the Lev Remembers Shop). The Campaign is not responsible for the content, terms, or privacy practices of those third parties.
      </p>

      <h2>6. Lev Remembers Shop (separate entity)</h2>
      <p>
        <strong>levremembers.com is Lev Parnas's personal apparel and book site.</strong> It is operated separately from the Campaign. Sales on that site support Ukraine relief, <em>not the Campaign committee</em>. Purchases made at levremembers.com are not contributions to the Campaign and are not subject to federal campaign finance laws.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The Site is provided <q>as is</q>. The Campaign makes no warranties — express or implied — regarding the accuracy, completeness, reliability, or availability of the Site. Information on the Site is for informational and educational purposes and does not constitute legal, financial, or tax advice.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, the Campaign and its volunteers, vendors, and affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, even if advised of the possibility of such damages.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless the Campaign, its officers, volunteers, vendors, and affiliates from any claim, loss, or expense (including reasonable attorneys' fees) arising out of your violation of these Terms or your misuse of the Site.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the <strong>State of Florida</strong>, without regard to its conflict-of-laws principles, and by applicable federal election law. Any dispute will be resolved exclusively in the state or federal courts located in Miami-Dade County, Florida.
      </p>

      <h2>11. Changes</h2>
      <p>
        The Campaign may update these Terms from time to time. Material changes will be reflected in the "Last updated" date above and, where appropriate, highlighted on this page.
      </p>

      <h2 id="sms">12. SMS / text-message terms</h2>
      <p>
        If you provide a mobile phone number and consent to receive text messages from the Campaign, the following terms apply:
      </p>
      <ul>
        <li>
          <strong>Consent.</strong> By submitting your number and checking the SMS-consent box on any Campaign form, you agree to receive recurring text messages from the Campaign at the number you provided. Consent is not a condition of contribution.
        </li>
        <li>
          <strong>Message frequency.</strong> Up to 8 messages per month, varying based on news, events, and FEC reporting deadlines. Frequency may temporarily increase in the final weeks before the November 3, 2026 election.
        </li>
        <li>
          <strong>Message and data rates.</strong> Standard message and data rates may apply, depending on your wireless plan.
        </li>
        <li>
          <strong>Opt-out.</strong> Reply <strong>STOP</strong> to any Campaign text to unsubscribe immediately. You may receive a final confirmation message after replying STOP.
        </li>
        <li>
          <strong>Help.</strong> Reply <strong>HELP</strong> for instructions, or email{" "}
          <a href="mailto:info@levparnas.org">info@levparnas.org</a>.
        </li>
        <li>
          <strong>Carrier liability.</strong> Wireless carriers are not liable for delayed or undelivered messages.
        </li>
        <li>
          <strong>Supported carriers.</strong> AT&amp;T, Verizon, T-Mobile, Sprint, U.S. Cellular, and most regional and smaller carriers.
        </li>
      </ul>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:info@levparnas.org">info@levparnas.org</a>.
      </p>
    </LegalPageShell>
  );
}
