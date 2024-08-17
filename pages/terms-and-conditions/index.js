import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import React from "react";

const TermsAndConditions = () => {
  const termsStyle = {
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
      <div style={termsStyle}>
        <h1 style={{ textAlign: "center" }}>Terms and Conditions</h1>
        <p>
          By accessing this website, you agree to comply with these Terms and
          Conditions, our Privacy Policy, and all applicable laws and
          regulations. If you disagree with any part of these terms, please do
          not use our website.
        </p>
        {/* Include sections for acceptance, use of the website, user responsibilities, intellectual property, limitations, etc. */}
        <p>
          - The content of this website is for general information purposes
          only. It is subject to change without notice.
        </p>
        <p>
          - Your use of any information or materials on this website is entirely
          at your own risk, for which we shall not be liable.
        </p>
        <p>
          - This website may include links to other websites. These links are
          provided for your convenience to provide further information. They do
          not signify that we endorse the website(s).
        </p>
        <p>
          - We do not guarantee the accuracy, completeness, or timeliness of the
          information and materials found on this website.
        </p>
        <p>
          - Your use of this website and any dispute arising out of such use is
          subject to the laws of [Your Country/Region].
        </p>
        <p>
          - Unauthorized use of this website may give rise to a claim for
          damages and/or be a criminal offense.
        </p>
        <p>
          - From time to time, this website may also include links to other
          websites. These links are provided for your convenience to provide
          further information.
        </p>
        <p>
          - We reserve the right to modify or terminate the website or any
          service at any time without notice.
        </p>
        <p>
          - Your use of this website signifies acceptance of these terms and any
          future modifications.
        </p>
        <p>
          - Every effort is made to keep the website up and running smoothly.
          However, we take no responsibility for, and will not be liable for,
          the website being temporarily unavailable due to technical issues
          beyond our control.
        </p>
        <p>
          If you have any questions or concerns about our Terms and Conditions,
          please contact us at [your contact information].
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default TermsAndConditions;
