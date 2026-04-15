import LegalLayout from "@/components/LegalLayout";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const metadata = { title: "Community Standards — Corneroom" };

export default function CommunityStandardsPage() {
  return (
    <LegalLayout title="Community Standards" lastUpdated="April 15, 2026">
      <p>
        These Community Standards describe conduct that is prohibited on the Corneroom Platform.
        They apply to all users, in all interactions on the Platform, including messages between
        hosts and guests, listing content, reviews, and profile information.
      </p>

      <p>
        Corneroom uses automated content review and human moderation to enforce these Standards.
        Conduct that violates these Standards may be subject to warnings, suspension, or permanent
        removal from the Platform. These Standards form part of, and should be read alongside, the{" "}
        <a href="/terms">Corneroom Terms of Service</a>.
      </p>

      <h2 id="off-platform-payment">Off-Platform Payments</h2>
      <p>
        Corneroom requires all bookings and related payments to be processed through the Platform.
        Soliciting or arranging payment outside Corneroom — including through third-party payment
        services, bank transfers, cash, money orders, gift cards, or cryptocurrency — is prohibited.
      </p>
      <p>
        Payments made outside Corneroom are not protected by our payout, refund, cancellation, or
        dispute resolution policies. Off-platform payment requests are also a leading indicator of
        fraud. Violations may result in warnings, suspension of payouts, or termination of your
        account.
      </p>

      <h2 id="contact-exchange">Contact Information Sharing</h2>
      <p>
        Sharing personal contact information for the purpose of moving conversations off the
        Platform is prohibited. This includes phone numbers, email addresses, social media handles,
        messaging app usernames, and external links shared with the intent of continuing
        communication outside Corneroom.
      </p>
      <p>
        This restriction exists so that Corneroom can support, mediate, and protect both parties
        throughout a booking. Communication conducted on the Platform is subject to our trust and
        safety processes; communication conducted elsewhere is not. Repeated or deliberate attempts
        to circumvent this policy may result in account suspension or termination.
      </p>

      <h2 id="scam-prevention">Fraud and Scam Prevention</h2>
      <p>
        Corneroom prohibits any conduct intended to deceive other users for financial or personal
        gain. This includes requesting payment in advance of a confirmed booking, soliciting
        identification documents or financial credentials, applying false urgency to a transaction,
        and impersonating Corneroom or any other party.
      </p>
      <p>
        Conduct identified as fraudulent will result in immediate account suspension. Corneroom may
        report fraud to relevant law enforcement and financial institutions where appropriate.
      </p>

      <h2 id="offensive-language">Hate Speech, Harassment, and Threats</h2>
      <p>
        Corneroom prohibits messages that target, demean, or threaten any user. This includes
        language directed at a person&apos;s race, ethnicity, national origin, religion, sexual
        orientation, gender identity, disability, or any other protected characteristic; threats of
        physical or sexual harm; sexually explicit content directed at another user; and sustained
        harassment.
      </p>
      <p>
        Reported violations are reviewed by our trust and safety team. Confirmed violations result
        in account suspension or removal from the Platform.
      </p>

      <h2 id="discrimination">Discrimination</h2>
      <p>
        Corneroom prohibits any discrimination, refusal of service, or denial of access on the basis
        of race, ethnicity, national origin, religion, sexual orientation, gender identity, gender
        expression, marital status, family status, disability, or age.
      </p>
      <p>
        This policy applies to listings, search filters, messages, and all other interactions on the
        Platform. Any host or guest who violates this policy is subject to immediate review and
        potential account removal. Corneroom complies with all applicable anti-discrimination laws
        in the jurisdictions in which it operates.
      </p>

      <h2 id="booking-integrity">Booking Integrity</h2>
      <p>
        Corneroom prohibits conduct that undermines the integrity of bookings or reviews on the
        Platform. This includes arranging bookings off-platform after initial contact, manipulating
        reservation timing or duration to circumvent fees, soliciting or providing reviews in
        exchange for compensation, and posting reviews that do not reflect a genuine stay.
      </p>
      <p>
        Violations may result in removal of affected reviews, cancellation of associated bookings,
        suspension of payouts, or account termination.
      </p>

      <h2 id="minor-safety">Minor Safety</h2>
      <p>
        Corneroom has zero tolerance for content or conduct that endangers minors. This includes
        content that sexualizes minors in any form, attempts to contact minors through the Platform
        for inappropriate purposes, and any other conduct that places a minor at risk of harm.
      </p>
      <p>
        Confirmed violations result in immediate and permanent account removal. Corneroom reports
        such violations to law enforcement and to relevant child safety authorities, including the
        National Center for Missing &amp; Exploited Children (NCMEC) where applicable.
      </p>

      <h2 id="reporting">Reporting Violations</h2>
      <p>
        If you encounter conduct that violates these Standards, you can report it from within the
        Corneroom app or by contacting our trust and safety team at{" "}
        <ObfuscatedEmail user="trust" />. Reports are reviewed by our
        moderation team and treated confidentially.
      </p>

      <h2 id="appeals">Appeals</h2>
      <p>
        If your account is suspended or content is removed under these Standards and you believe
        the action was taken in error, you may request a review by contacting{" "}
        <ObfuscatedEmail user="appeals" />. Appeals are reviewed by a
        team independent of the original moderation decision.
      </p>

      <h2 id="changes">Changes to These Standards</h2>
      <p>
        Corneroom may update these Standards from time to time. Material changes will be
        communicated via in-app notification or email. Continued use of the Platform after changes
        take effect constitutes acceptance.
      </p>
    </LegalLayout>
  );
}
