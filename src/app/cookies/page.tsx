import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Cookie Policy — Corneroom",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="March 31, 2026">
      <section>
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device (computer,
          tablet, or mobile phone) when you visit a website. They are widely used
          to make websites work more efficiently, provide a better browsing
          experience, and supply information to the site owners. Corneroom
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and
          similar tracking technologies across our platform and website to
          deliver, improve, and protect our services.
        </p>
      </section>

      <section>
        <h2>2. How We Use Cookies</h2>
        <p>
          We use cookies for the following purposes:
        </p>
        <ul>
          <li>
            <strong>Authentication and security</strong> — to verify your
            identity, keep your session active, and protect your account from
            unauthorized access.
          </li>
          <li>
            <strong>Preferences and functionality</strong> — to remember your
            settings, language preferences, and other choices you make on our
            platform.
          </li>
          <li>
            <strong>Analytics and performance</strong> — to understand how
            visitors interact with our platform so we can improve features,
            navigation, and overall experience.
          </li>
          <li>
            <strong>Third-party integrations</strong> — to enable essential
            services such as payments, maps, and social authentication.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Essential Cookies</h2>
        <p>
          Essential cookies are strictly necessary for the operation of our
          platform. Without these cookies, core functionality such as signing in,
          processing bookings, and maintaining security cannot work. These
          cookies cannot be disabled.
        </p>

        <h3>3.1 Authentication Cookies</h3>
        <p>
          We use <strong>Firebase Authentication</strong> to manage user sign-in
          sessions. Firebase sets cookies and local storage tokens to
          authenticate your identity when you sign in via email, Google Sign-In,
          or Apple Sign-In. These tokens persist your login session so you do not
          need to re-enter your credentials on every page.
        </p>

        <h3>3.2 Security Cookies</h3>
        <p>
          Security cookies help us detect and prevent fraudulent activity, abuse,
          and unauthorized access. They include cross-site request forgery
          (CSRF) tokens and device-identification tokens that protect your
          account and transactions.
        </p>

        <h3>3.3 Preference Cookies</h3>
        <p>
          Preference cookies store choices you make on our platform, such as your
          preferred currency, language, notification settings, and display
          preferences. These ensure a consistent experience across sessions.
        </p>
      </section>

      <section>
        <h2>4. Analytics Cookies</h2>
        <p>
          We use <strong>Firebase Analytics</strong> (powered by Google Analytics
          infrastructure) to collect anonymized, aggregated data about how users
          interact with our platform. This includes information such as pages
          visited, session duration, device type, geographic region, and feature
          usage. Analytics cookies help us:
        </p>
        <ul>
          <li>Identify popular features and areas for improvement.</li>
          <li>Measure the effectiveness of updates and new functionality.</li>
          <li>Understand traffic patterns and platform performance.</li>
          <li>Diagnose technical issues and improve reliability.</li>
        </ul>
        <p>
          Firebase Analytics may assign a unique identifier to your device. This
          identifier does not personally identify you and is used solely for
          statistical analysis. You can opt out of analytics cookies through your
          browser settings or by using the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
      </section>

      <section>
        <h2>5. Third-Party Cookies</h2>
        <p>
          Certain third-party services integrated into our platform may set their
          own cookies. We do not control the cookies placed by these providers
          and recommend reviewing their respective privacy policies.
        </p>

        <h3>5.1 Stripe (Payments)</h3>
        <p>
          We use <strong>Stripe</strong> to process payments securely. When you
          make or receive a payment, Stripe may place cookies on your device for
          fraud detection, transaction authentication, and compliance with
          financial regulations. For details, see{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe&apos;s Privacy Policy
          </a>
          .
        </p>

        <h3>5.2 Google Maps</h3>
        <p>
          Our platform embeds <strong>Google Maps</strong> to display space
          locations and nearby amenities. Google may set cookies to load map
          tiles, remember your map interactions, and gather usage data. For
          details, see{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>

        <h3>5.3 Google Sign-In</h3>
        <p>
          If you choose to sign in using your Google account, Google may place
          cookies related to authentication and session management. These cookies
          are governed by{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>

        <h3>5.4 Apple Sign-In</h3>
        <p>
          If you choose to sign in using your Apple ID, Apple may place cookies
          related to authentication. These cookies are governed by{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple&apos;s Privacy Policy
          </a>
          .
        </p>

        <h3>5.5 Firebase Cloud Messaging</h3>
        <p>
          We use <strong>Firebase Cloud Messaging</strong> to deliver push
          notifications. Firebase may store tokens on your device to route
          notifications to the correct browser or app instance. These tokens are
          essential for the notification service to function.
        </p>
      </section>

      <section>
        <h2>6. How to Manage and Disable Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings.
          You can typically find these controls in the &quot;Settings,&quot;
          &quot;Preferences,&quot; or &quot;Privacy&quot; section of your
          browser. Common options include:
        </p>
        <ul>
          <li>Viewing and deleting cookies already stored on your device.</li>
          <li>Blocking all cookies or only third-party cookies.</li>
          <li>Configuring your browser to notify you when a cookie is set.</li>
          <li>
            Using private or incognito mode, which typically does not persist
            cookies after the session ends.
          </li>
        </ul>
        <p>
          Below are links to cookie management instructions for popular
          browsers:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          <strong>Please note:</strong> disabling essential cookies may prevent
          you from signing in, making payments, or using other core features of
          the Corneroom platform. We strongly recommend keeping essential cookies
          enabled.
        </p>
      </section>

      <section>
        <h2>7. GDPR and Your Rights</h2>
        <p>
          If you are located in the European Economic Area (EEA), the United
          Kingdom, or another jurisdiction with applicable data protection laws,
          you have specific rights regarding cookies and the personal data they
          process:
        </p>
        <ul>
          <li>
            <strong>Right to be informed</strong> — you have the right to know
            what cookies we use and why. This policy fulfills that obligation.
          </li>
          <li>
            <strong>Right to consent</strong> — we will obtain your consent
            before setting non-essential cookies (analytics and third-party
            cookies) where required by law. You can withdraw consent at any time
            by adjusting your cookie preferences or browser settings.
          </li>
          <li>
            <strong>Right of access</strong> — you can request details about the
            personal data collected through cookies.
          </li>
          <li>
            <strong>Right to erasure</strong> — you can request the deletion of
            personal data collected through cookies by contacting us or clearing
            cookies from your browser.
          </li>
          <li>
            <strong>Right to restrict processing</strong> — you can object to or
            restrict how we process data collected through cookies.
          </li>
          <li>
            <strong>Right to lodge a complaint</strong> — you have the right to
            file a complaint with your local data protection authority if you
            believe your rights have been violated.
          </li>
        </ul>
        <p>
          We process cookie data under the following legal bases as defined by
          the General Data Protection Regulation (GDPR):
        </p>
        <ul>
          <li>
            <strong>Legitimate interest</strong> — for essential cookies
            necessary to operate and secure our platform.
          </li>
          <li>
            <strong>Consent</strong> — for analytics and third-party cookies
            where required by applicable law.
          </li>
        </ul>
        <p>
          For users in jurisdictions outside the EEA, we comply with applicable
          local data protection laws, including the California Consumer Privacy
          Act (CCPA) and similar regulations.
        </p>
      </section>

      <section>
        <h2>8. Cookie Retention</h2>
        <p>
          Cookies have varying lifespans depending on their purpose:
        </p>
        <ul>
          <li>
            <strong>Session cookies</strong> — expire when you close your
            browser and are used for temporary tasks such as maintaining your
            login state during a single visit.
          </li>
          <li>
            <strong>Persistent cookies</strong> — remain on your device for a
            set period (ranging from days to up to two years) and are used for
            preferences, analytics, and authentication.
          </li>
        </ul>
        <p>
          You can delete persistent cookies at any time through your browser
          settings.
        </p>
      </section>

      <section>
        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices, technology, legal requirements, or other factors. When
          we make material changes, we will update the &quot;Last updated&quot;
          date at the top of this page and, where appropriate, notify you through
          the platform or via email. We encourage you to review this policy
          periodically to stay informed about how we use cookies.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Cookie
          Policy or our use of cookies, please contact us at:
        </p>
        <p>
          <ObfuscatedEmail user="privacy" />
        </p>
      </section>
    </LegalLayout>
  );
}
