import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Delete Account — Corneroom" };

export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Account Deletion" lastUpdated="March 31, 2026">
      <p>
        You can delete your Corneroom account at any time. This will permanently remove your
        account and associated personal data from our platform.
      </p>

      <h2>How to Delete Your Account</h2>

      <h3>Option 1: In the App</h3>
      <ul>
        <li>Open the Corneroom app</li>
        <li>Go to <strong>Settings</strong> (gear icon)</li>
        <li>Tap <strong>Account</strong></li>
        <li>Tap <strong>Delete Account</strong></li>
        <li>Confirm your decision</li>
      </ul>

      <h3>Option 2: Via Email</h3>
      <p>
        Send an email to <a href="mailto:privacy@corneroom.com">privacy@corneroom.com</a> from
        the email address associated with your account, with the subject line &ldquo;Delete My Account.&rdquo;
        We will process your request within 7 business days.
      </p>

      <h2>What Gets Deleted</h2>
      <ul>
        <li>Your profile information (name, email, phone, photo)</li>
        <li>Your listings (if you are a host)</li>
        <li>Your booking history</li>
        <li>Your messages and conversations</li>
        <li>Your reviews (both written and received)</li>
        <li>Your saved searches and wishlists</li>
        <li>Your verification documents</li>
      </ul>

      <h2>What We May Retain</h2>
      <p>
        Certain information may be retained for a limited period after account deletion as required
        by law or for legitimate business purposes:
      </p>
      <ul>
        <li><strong>Financial transaction records</strong> — retained for up to 7 years for tax and accounting compliance</li>
        <li><strong>Fraud prevention data</strong> — retained for up to 90 days to prevent abuse</li>
        <li><strong>Legal hold data</strong> — if involved in an active dispute or legal proceeding</li>
      </ul>
      <p>
        Retained data is stored securely and is not used for marketing or profiling purposes.
      </p>

      <h2>Before You Delete</h2>
      <p>Please note:</p>
      <ul>
        <li><strong>Active bookings:</strong> Complete or cancel all active bookings before deleting your account. Deleting your account does not automatically cancel confirmed bookings.</li>
        <li><strong>Pending payouts:</strong> If you are a host with pending payouts, ensure all payouts have been processed before deletion.</li>
        <li><strong>This action is irreversible.</strong> Once deleted, your account cannot be recovered. You would need to create a new account to use Corneroom again.</li>
      </ul>

      <h2>Data Portability</h2>
      <p>
        Before deleting your account, you may request a copy of your personal data. Contact{" "}
        <a href="mailto:privacy@corneroom.com">privacy@corneroom.com</a> with the subject line
        &ldquo;Data Export Request&rdquo; and we will provide your data in a portable format within
        30 days.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have questions about account deletion or data retention, contact us at{" "}
        <a href="mailto:privacy@corneroom.com">privacy@corneroom.com</a> or visit our{" "}
        <a href="/support">Support page</a>.
      </p>
    </LegalLayout>
  );
}
