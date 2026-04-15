import LegalLayout from "@/components/LegalLayout";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const metadata = { title: "Safety — Corneroom" };

export default function SafetyPage() {
  return (
    <LegalLayout title="Safety at Corneroom" lastUpdated="March 30, 2026">
      <p>
        When strangers share spaces, trust is everything. At Corneroom, safety is not an
        afterthought &mdash; it is the foundation our platform is built on. Every feature, policy,
        and process exists to ensure that both guests and hosts feel secure, respected, and
        protected every time they use Corneroom.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2>1. Our Commitment to Safety</h2>
      <p>
        Corneroom connects people around the world with shared spaces &mdash; from desks and
        meeting rooms to creative studios and event venues. We understand that inviting someone
        into your space, or stepping into someone else&rsquo;s, requires a leap of faith. Our job
        is to make that leap as small as possible.
      </p>
      <p>We do this through:</p>
      <ul>
        <li>Rigorous identity and location verification for hosts</li>
        <li>Guest identity verification before booking</li>
        <li>Secure, PCI-compliant payment processing</li>
        <li>A transparent review and rating system</li>
        <li>In-app messaging that keeps personal contact information private</li>
        <li>24/7 safety support from a dedicated team</li>
        <li>Clear community guidelines with zero tolerance for abuse</li>
      </ul>

      {/* ------------------------------------------------------------------ */}
      <h2>2. For Guests: How We Keep You Safe</h2>

      <h3>2.1 Verified Hosts Only</h3>
      <p>
        Every host on Corneroom completes a multi-step verification process before they can list a
        space. This includes government-issued ID verification, a live selfie match, and GPS-based
        location confirmation. You will always see a verification badge on verified host profiles,
        so you know exactly who you are booking with.
      </p>

      <h3>2.2 Honest Reviews You Can Trust</h3>
      <p>
        After every booking, guests can leave a review and rating for the space and the host.
        Reviews are tied to confirmed bookings and cannot be removed by the host. This creates an
        honest, community-driven record that helps you make informed decisions.
      </p>

      <h3>2.3 Secure Payments</h3>
      <p>
        All payments are processed through <strong>Stripe</strong>, a PCI DSS Level 1 certified
        payment processor &mdash; the highest level of security certification in the payments
        industry. Your card details are never stored on Corneroom servers. Funds are held securely
        and only released to the host after your booking is confirmed and check-in begins.
      </p>

      <h3>2.4 Private Communication</h3>
      <p>
        Our in-app messaging system lets you communicate with hosts before, during, and after your
        booking without sharing your phone number, email address, or any other personal contact
        information. All messages are logged and available to our safety team in the event of a
        dispute.
      </p>

      <h3>2.5 Inclusive Spaces</h3>
      <p>
        We believe everyone deserves a safe and welcoming experience. Corneroom features:
      </p>
      <ul>
        <li>
          <strong>LGBTQ+ friendly badges:</strong> Hosts can mark their spaces as LGBTQ+ friendly,
          making it easy for guests to find welcoming environments.
        </li>
        <li>
          <strong>Female-only accommodation options:</strong> Dedicated spaces listed exclusively
          for women, verified and monitored by our team.
        </li>
        <li>
          <strong>Non-discrimination policy:</strong> Hosts and guests are prohibited from
          discriminating based on race, ethnicity, national origin, religion, gender, gender
          identity, sexual orientation, disability, or age.
        </li>
      </ul>

      <h3>2.6 Booking Protection</h3>
      <p>
        If you arrive at a space and it does not match its listing &mdash; or if the host cancels
        at the last minute &mdash; our support team will help you find an alternative space or
        issue a full refund. You are never left stranded.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2>3. For Hosts: How We Protect You and Your Space</h2>

      <h3>3.1 Guest Identity Verification</h3>
      <p>
        Guests are required to verify their identity before they can book a space. This includes
        providing a valid government-issued ID and completing a selfie check. You always know who
        is entering your space.
      </p>

      <h3>3.2 Review System Works Both Ways</h3>
      <p>
        Just as guests review hosts, you can review your guests after every booking. Guests with
        poor reviews or policy violations may be flagged or removed from the platform, protecting
        the broader host community.
      </p>

      <h3>3.3 Secure, Guaranteed Payouts</h3>
      <p>
        Payments are collected upfront and held in escrow via Stripe. Payouts are released to your
        account according to our standard payout schedule. You never need to handle cash or chase
        payments.
      </p>

      <h3>3.4 Control Over Your Space</h3>
      <p>
        You set your own house rules, availability, pricing, and guest requirements. You can
        require guests to have a verified profile, a minimum number of positive reviews, or meet
        other criteria before they can book your space.
      </p>

      <h3>3.5 Damage and Liability Support</h3>
      <p>
        If a guest causes damage to your space, report it through the app within 48 hours of
        checkout. Our resolution centre will work with both parties to reach a fair outcome. We are
        actively developing host protection coverage to provide additional peace of mind.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2>4. Verification Process Explained</h2>
      <p>
        Trust starts with knowing who you are dealing with. Here is how our verification process
        works:
      </p>

      <h3>4.1 Host Verification (Required)</h3>
      <ul>
        <li>
          <strong>Government ID upload:</strong> Hosts submit a photo of a valid, government-issued
          identification document (passport, national ID card, or driver&rsquo;s licence).
        </li>
        <li>
          <strong>Selfie verification:</strong> Hosts take a live selfie that is matched against
          their ID photo using secure facial-recognition technology. This confirms the person
          creating the listing is the same person on the ID.
        </li>
        <li>
          <strong>Location verification:</strong> Hosts confirm their space&rsquo;s location via
          GPS. This ensures the listed address is accurate and the host has physical access to the
          space.
        </li>
      </ul>
      <p>
        All verification data is encrypted in transit and at rest, and handled in accordance with
        our{" "}
        <a href="/privacy">Privacy Policy</a>. ID images are used solely for verification and are
        not shared with other users.
      </p>

      <h3>4.2 Guest Verification</h3>
      <ul>
        <li>
          <strong>Government ID upload:</strong> Guests provide a valid ID to confirm their
          identity.
        </li>
        <li>
          <strong>Selfie match:</strong> A live selfie is compared to the ID photo for an
          additional layer of assurance.
        </li>
        <li>
          <strong>Email and phone confirmation:</strong> Both are verified during account creation.
        </li>
      </ul>

      <h3>4.3 Verification Badges</h3>
      <p>
        Once verification is complete, a badge appears on the user&rsquo;s profile. Verified
        profiles build trust and typically receive more bookings. Hosts can choose to only accept
        bookings from verified guests.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2>5. Community Guidelines</h2>
      <p>
        Every person on Corneroom &mdash; host or guest &mdash; agrees to our Community Guidelines.
        These guidelines exist to create a respectful, safe, and enjoyable experience for everyone.
      </p>

      <h3>5.1 Respect</h3>
      <ul>
        <li>Treat every person with dignity and courtesy.</li>
        <li>Respect the space you are using as if it were your own.</li>
        <li>Follow the host&rsquo;s house rules at all times.</li>
        <li>Communicate honestly and promptly through the app.</li>
      </ul>

      <h3>5.2 Honesty</h3>
      <ul>
        <li>Listings must accurately represent the space, amenities, and location.</li>
        <li>Profile information must be truthful and up to date.</li>
        <li>Reviews must reflect genuine experiences &mdash; fake or incentivised reviews are prohibited.</li>
        <li>Pricing must be transparent with no hidden fees outside the platform.</li>
      </ul>

      <h3>5.3 Non-Discrimination</h3>
      <p>
        Corneroom has a strict non-discrimination policy. All users must treat others without
        regard to race, colour, ethnicity, national origin, religion, sexual orientation, gender
        identity, marital status, disability, age, or any other characteristic protected by law.
        Violations will result in immediate account suspension and potential permanent removal.
      </p>

      <h3>5.4 Prohibited Conduct</h3>
      <ul>
        <li>Harassment, threats, or intimidation of any kind</li>
        <li>Illegal activity on or through the platform</li>
        <li>Attempting to take transactions off-platform to avoid safety protections</li>
        <li>Creating fake accounts or listings</li>
        <li>Damaging or stealing from a host&rsquo;s space</li>
        <li>Sharing explicit, violent, or hateful content</li>
        <li>Photographing or recording others without consent</li>
      </ul>

      {/* ------------------------------------------------------------------ */}
      <h2>6. What to Do If Something Goes Wrong</h2>
      <p>
        We hope every experience on Corneroom is a positive one, but we are prepared for situations
        where things do not go as planned.
      </p>

      <h3>6.1 During a Booking</h3>
      <ul>
        <li>
          <strong>Contact the host or guest:</strong> Many issues can be resolved through a quick
          in-app message. Start there.
        </li>
        <li>
          <strong>Contact Corneroom support:</strong> If you cannot resolve the issue directly, tap
          the &ldquo;Get Help&rdquo; button in the app or email us. Our team is available 24/7.
        </li>
        <li>
          <strong>If you feel unsafe:</strong> Leave the space immediately and contact local
          emergency services. Then reach out to our safety team right away.
        </li>
      </ul>

      <h3>6.2 After a Booking</h3>
      <ul>
        <li>
          <strong>Leave an honest review:</strong> Your feedback protects future guests and hosts.
        </li>
        <li>
          <strong>Report damage:</strong> Hosts should report any damage within 48 hours through the
          resolution centre in the app.
        </li>
        <li>
          <strong>Request a refund:</strong> If the space did not match its listing or the host
          cancelled unexpectedly, submit a refund request through the app.
        </li>
      </ul>

      {/* ------------------------------------------------------------------ */}
      <h2>7. Reporting Concerns</h2>
      <p>
        If you witness or experience anything that violates our community guidelines, makes you
        feel unsafe, or seems suspicious, we want to hear about it.
      </p>

      <h3>7.1 How to Report</h3>
      <ul>
        <li>
          <strong>In the app:</strong> Tap the flag or &ldquo;Report&rdquo; button on any listing,
          profile, or message.
        </li>
        <li>
          <strong>Email:</strong> Send a detailed report to{" "}
          <ObfuscatedEmail user="safety" />.
        </li>
        <li>
          <strong>Support chat:</strong> Available 24/7 in the app under Settings &rarr; Help &amp;
          Support.
        </li>
      </ul>

      <h3>7.2 What Happens After You Report</h3>
      <ul>
        <li>You will receive an acknowledgement within 1 hour.</li>
        <li>Our safety team investigates every report thoroughly and confidentially.</li>
        <li>
          Depending on severity, we may suspend the reported account during investigation, restrict
          booking capabilities, or escalate to law enforcement.
        </li>
        <li>You will be updated on the outcome of your report.</li>
      </ul>

      <h3>7.3 No Retaliation</h3>
      <p>
        Corneroom prohibits retaliation against anyone who reports a concern in good faith. If you
        experience retaliation after making a report, contact{" "}
        <ObfuscatedEmail user="safety" /> immediately.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2>8. Emergency Contacts</h2>
      <p>
        Your physical safety always comes first. In an emergency, contact local authorities before
        reaching out to Corneroom.
      </p>
      <ul>
        <li>
          <strong>Local emergency services:</strong> Dial your country&rsquo;s emergency number
          (e.g. 911 in the US, 999 in the UK, 112 in the EU, 000 in Australia).
        </li>
        <li>
          <strong>Corneroom 24/7 Safety Line:</strong>{" "}
          <ObfuscatedEmail user="safety" /> &mdash; monitored around
          the clock, every day of the year.
        </li>
        <li>
          <strong>In-app emergency button:</strong> Available during active bookings for immediate
          escalation to our safety team.
        </li>
      </ul>
      <p>
        When contacting our safety team, include your booking reference number, the nature of the
        emergency, and your current location if relevant. This helps us respond as quickly as
        possible.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2>9. Our Ongoing Investment in Safety</h2>
      <p>
        Safety is not a checkbox &mdash; it is an ongoing commitment. We continuously invest in:
      </p>
      <ul>
        <li>Improving our verification technology and fraud-detection systems</li>
        <li>Training our support and safety teams on emerging risks</li>
        <li>Listening to community feedback to identify gaps in our safety measures</li>
        <li>Partnering with safety organisations and local authorities</li>
        <li>Regular third-party security audits of our platform and infrastructure</li>
      </ul>
      <p>
        If you have suggestions for how we can make Corneroom safer, we welcome your input at{" "}
        <ObfuscatedEmail user="safety" />.
      </p>
    </LegalLayout>
  );
}
