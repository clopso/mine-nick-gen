import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <main className="privacy-container">
      <h1>Privacy Policy - Nick2Pic</h1>
      <p>
        Nick2Pic values the privacy of its users. This Privacy Policy explains
        how we collect, use, and protect your information when using our site.
      </p>

      <h2>1. Information Collection</h2>
      <p>
        Our site does not automatically collect personal data. However, we may
        collect information through:
      </p>
      <ul>
        <li>Cookies and similar technologies to improve the user experience.</li>
        <li>User-provided data, such as email in contact forms (if available).</li>
      </ul>

      <h2>2. Use of Information</h2>
      <p>The collected information is used to:</p>
      <ul>
        <li>Improve the website functionality.</li>
        <li>Analyze traffic and user interactions.</li>
        <li>Display relevant ads (if Google AdSense is enabled).</li>
      </ul>

      <h2>3. Contact</h2>
      <p>
        If you have any questions about this policy, please <a href="/contact">contact</a> us.
      </p>
    </main>
  );
}
