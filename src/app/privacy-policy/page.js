import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.page}>
        <div style={styles.container}>
      {/* ---------- TITLE ---------- */}
      <h1 style={styles.title}>Privacy Policy for QMIS Admissions Website</h1>
      <p style={styles.date}>Effective Date: [11/10/2023]</p>

      {/* ---------- INTRO ---------- */}
      <p style={styles.text}>
        Welcome to the Queen Mira International School Admissions page. At QMIS,
        we are committed to protecting the privacy of our visitors. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard your
        personal information when you use our website and submit your data for
        admissions inquiries and requests for callbacks or school visits.
      </p>

      <p style={styles.text}>
        By using the website, you consent to the practices described in this
        Privacy Policy.
      </p>

      {/* ---------- INFORMATION WE COLLECT ---------- */}
      <h2 style={styles.sectionTitle}>Information We Collect</h2>

      <p style={styles.text}>
        We value your trust and are dedicated to safeguarding your privacy.{" "}
        <span style={{ color: "red", fontWeight: "600" }}>
          By submitting our web form, you agree to receive promotional calls on
          the number shared, and such calls and SMS would be coming from a
          third-party platform.
        </span>
      </p>

      <p style={styles.text}>
        We may collect the following types of information when you use our
        website:
      </p>

      {/* PERSONAL */}
      <h3 style={styles.subTitle}>Personal Information:</h3>
      <p style={styles.text}>
        When you interact with our admission forms or contact us for
        information, we may collect personal information including, but not
        limited to:
      </p>

      <ul style={styles.list}>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address</li>
        <li>Child's name and date of birth</li>
        <li>Any additional information you provide in the message or form</li>
      </ul>

      {/* AUTOMATIC */}
      <h3 style={styles.subTitle}>Automatically Collected Information:</h3>
      <p style={styles.text}>
        We may automatically collect information when you visit our website,
        including:
      </p>

      <ul style={styles.list}>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device type</li>
        <li>Pages you visit</li>
        <li>Date and time of your visit</li>
        <li>
          Cookies and similar tracking technologies (please see the "Cookies"
          section below)
        </li>
      </ul>

      {/* ---------- HOW WE USE YOUR INFORMATION ---------- */}
      <h2 style={styles.sectionTitle}>How We Use Your Information</h2>

      <p style={styles.text}>We may use the information we collect for:</p>

      <ul style={styles.list}>
        <li>
          <strong>Admissions Process:</strong> To process admissions inquiries,
          schedule school visits, provide program information, and contact you
          regarding admissions requests.
        </li>
        <li>
          <strong>Communications:</strong> To send updates, newsletters, and
          information about QMIS that may be relevant to you.
        </li>
        <li>
          <strong>Improvement:</strong> To enhance our website, services, and
          offerings based on feedback and information we collect.
        </li>
        <li>
          <strong>Analytics:</strong> To analyze user interactions, track
          trends, and monitor usage patterns to improve our services.
        </li>
      </ul>

      {/* ---------- COOKIES ---------- */}
      <h2 style={styles.sectionTitle}>Cookies</h2>

      <p style={styles.text}>
        We have implemented reasonable administrative, technical, and physical
        security measures to protect your personal information. However, no data
        transmission over the Internet is entirely secure. If you believe that
        your interaction with us is no longer secure, please contact us
        immediately.
      </p>

      {/* ---------- DATA SECURITY ---------- */}
      <h2 style={styles.sectionTitle}>Data Security</h2>

      <p style={styles.text}>
        We have implemented reasonable administrative, technical, and physical
        security measures to protect your personal information. However, no data
        transmission over the Internet is entirely secure. If you believe that
        your interaction with us is no longer secure, please contact us
        immediately.
      </p>

      {/* ---------- THIRD-PARTY ---------- */}
      <h2 style={styles.sectionTitle}>Third-Party Services and Links</h2>

      <p style={styles.text}>
        Our website may include links to third-party websites or services. We
        are not responsible for the privacy practices or content of these
        third-party sites. We encourage you to review the privacy policies of
        any third-party websites you visit.
      </p>

      {/* ---------- CHANGES ---------- */}
      <h2 style={styles.sectionTitle}>Changes to This Privacy Policy</h2>

      <p style={styles.text}>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, legal requirements, or other reasons. Any changes will
        be posted on this page with an updated effective date. Your continued
        use of the website after such changes will constitute acceptance of the
        updated Privacy Policy.
      </p>

      {/* ---------- CONTACT US ---------- */}
      <h2 style={styles.sectionTitle}>Contact Us</h2>

      <p style={styles.text}>
        If you have questions, concerns, or requests related to your personal
        information or this Privacy Policy, please contact us:
      </p>

      <p style={styles.text}>
        Email: info@qmis.edu.in <br />
        Phone: +91 78978 93938
      </p>

      <p style={styles.text}>Thank you for choosing QMIS.</p>

      <p style={styles.text}>
        <strong>Queen Mira International School</strong> <br />
        Sholavandan Road, <br />
        Melakkal Rd., <br />
        Kochadai, Madurai, <br />
        Tamil Nadu 625019
      </p>
    </div>
    </div>
  );
};

/* ---------- STYLES ---------- */
const styles = {
    page: {
    width: "100%",
    
    backgroundImage:
      "radial-gradient(#ccc 1px, transparent 1px), radial-gradient(#ccc 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 10px 10px",
    padding: "40px",
    boxSizing: "border-box",
  },  
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.7",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
  },
  date: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "18px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#B00000",
    marginTop: "25px",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "20px",
    fontWeight: "600",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "30px",
    fontSize: "18px",
    marginBottom: "20px",
  },
};

export default PrivacyPolicy;
