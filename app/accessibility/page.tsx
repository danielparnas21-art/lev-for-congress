import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata = {
  title: "Accessibility Statement",
  description:
    "Lev Parnas for Congress is committed to making this site accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <LegalPageShell
      eyebrow="Accessibility"
      title="Built for every voter."
      lastUpdated="May 27, 2026"
    >
      <p>
        <strong>Lev Parnas for Congress</strong> is committed to making this website accessible to as many people as possible, including voters with disabilities. A campaign that says it's running <q>for us</q> has to be accessible to all of us.
      </p>

      <h2>1. Our standard</h2>
      <p>
        We aim to conform to the{" "}
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.1
        </a>{" "}
        at the AA level. WCAG is the international standard for making web content accessible to people with visual, auditory, motor, and cognitive disabilities.
      </p>

      <h2>2. What we've done</h2>
      <ul>
        <li>Semantic HTML throughout the site (headings, landmarks, lists).</li>
        <li>Alt text on meaningful images. (Decorative images are explicitly marked as such.)</li>
        <li>Keyboard navigation: every link, button, and form on the site can be operated without a mouse.</li>
        <li>Visible focus indicators on interactive elements.</li>
        <li>Color contrast that meets WCAG AA on body text. Decorative elements may use lower-contrast styling.</li>
        <li>Captions and transcripts for video content where available.</li>
        <li>Forms with proper labels and error messages that work with screen readers.</li>
        <li>Respect for users' motion-reduction preferences. Animations honor{" "}
          <code>prefers-reduced-motion</code>{" "}
          where possible.
        </li>
      </ul>

      <h2>3. Known limitations</h2>
      <p>
        We are actively working on the following:
      </p>
      <ul>
        <li>
          The embedded MSNBC Films trailer in the hero section is provided by a third party; we do not control its accessibility features. We will replace it with a captioned, fully-controllable version when possible.
        </li>
        <li>
          Third-party embeds (donation form, social media feeds) inherit the accessibility of the underlying providers. We choose vendors that prioritize accessibility but cannot guarantee complete WCAG conformance for third-party content.
        </li>
        <li>
          PDF documents linked from the press kit may not yet be fully tagged for screen readers. We are working to remediate them.
        </li>
      </ul>

      <h2>4. How to report issues</h2>
      <p>
        If you encounter an accessibility barrier on this site — anything that's hard to use, read, or interact with — please tell us so we can fix it. The fastest paths:
      </p>
      <ul>
        <li>
          Email{" "}
          <a href="mailto:accessibility@levparnas.org">
            accessibility@levparnas.org
          </a>
        </li>
        <li>
          Or write the general team at{" "}
          <a href="mailto:info@levparnas.org">info@levparnas.org</a>.
        </li>
      </ul>
      <p>
        Please include:
      </p>
      <ul>
        <li>The page where you encountered the issue (URL).</li>
        <li>What you were trying to do.</li>
        <li>What assistive technology you were using, if any (e.g., screen reader name + browser).</li>
        <li>Any error messages or screenshots, if you have them.</li>
      </ul>
      <p>
        We aim to respond to accessibility reports within five business days.
      </p>

      <h2>5. Alternative access</h2>
      <p>
        If you need information from this site in an alternative format — large print, plain text, audio — we will provide it on request. Email{" "}
        <a href="mailto:accessibility@levparnas.org">accessibility@levparnas.org</a>{" "}
        with what you need.
      </p>

      <h2>6. Voting access</h2>
      <p>
        Voters with disabilities have specific rights in Florida elections, including accessible polling places and accessible voting machines. For information on accessible voting in Florida 27, contact your county Supervisor of Elections directly. For Miami-Dade County, visit{" "}
        <a
          href="https://www.miamidade.gov/global/government/elections"
          target="_blank"
          rel="noopener noreferrer"
        >
          miamidade.gov/elections
        </a>
        .
      </p>

      <h2>7. Ongoing commitment</h2>
      <p>
        Accessibility is not a one-time fix; it's an ongoing commitment. As we add new content, features, and pages to this site, we will work to maintain WCAG 2.1 AA conformance and to incorporate feedback from voters who use assistive technology.
      </p>
    </LegalPageShell>
  );
}
