import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import React from "react";

const PrivacyPolicy = () => {
  const privacyPolicyStyle = {
    // maxWidth: "800px",
    margin: "auto",
    padding: "50px 5% ",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    fontSize: "17px",
    color: "#888",
  };

  return (
    <React.Fragment>
      <Header />
      <style jsx>{`
        p {
          margin-top: 10px;
        }
      `}</style>
      <div style={privacyPolicyStyle}>
        <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how One08 Solutions ("we," "us," or "our")
          collects, uses, discloses, and safeguards the personal information of
          our website visitors and customers.
        </p>
        {/* Include sections for information collection, use, sharing, security, cookies, third-party links, etc. */}
        <p>
          Information about how we collect, use, and share your data will go
          here...
        </p>
        <p>Our website may use cookies and similar tracking technologies...</p>
        <p>Our website may contain links to third-party websites...</p>
        <p>
          We implement security measures to protect against unauthorized
          access...
        </p>
        <p>
          Our services are not intended for individuals under the age of 18...
        </p>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time...
        </p>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the handling of your personal information, please
          contact us at [your contact information].
        </p>
        <p>Last Modified: 19/11/2023</p>
        {/* Additional Points */}
        <p>
          - We do not sell or rent your personal information to third parties
          for marketing purposes.
        </p>
        <p>
          - You may request access to your personal information or ask for it to
          be updated or deleted.
        </p>
        <p>
          - Our employees and partners are trained to handle personal
          information securely and confidentially.
        </p>
        <p>
          - We may anonymize or aggregate collected data for analytical purposes
          or industry insights.
        </p>
        <p>
          - Your continued use of our website constitutes acceptance of this
          Privacy Policy.
        </p>
        <p>
          - We may disclose personal information if required by law or to
          protect our rights or safety.
        </p>
        <p>
          - We encourage users to review this Privacy Policy periodically for
          any updates or changes.
        </p>
        <p>
          - Our privacy practices may differ based on specific regional or legal
          requirements.
        </p>
        <p>
          - By contacting us or using our services, you consent to the terms of
          this Privacy Policy.
        </p>
        <p>
          - For any dispute regarding the handling of personal information, we
          aim to resolve it promptly.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
