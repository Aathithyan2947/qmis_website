import React from "react";

export default function Cancellationrefund() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>CANCELLATION AND REFUNDS POLICY</h2>
        <p style={styles.updated}>Last updated on Sep 2nd 2024</p>

        <h3 style={styles.sectionTitle}>CANCELLATION POLICY</h3>
        <p style={styles.text}>
          Orders cannot be canceled once they have been placed. All sales are final.
        </p>

        <h3 style={styles.sectionTitle}>REFUNDS</h3>
        <p style={styles.text}>
          All sales are final and no refund will be issued.
        </p>

        <h3 style={styles.sectionTitle}>QUESTIONS</h3>
        <p style={styles.text}>
          If you have any questions concerning our return or cancellation policy,
          please contact us at: <strong>contact@queenmira.com</strong>
        </p>
      </div>
    </div>
  );
}

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
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif",
    color: "#000",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  updated: {
    marginBottom: "24px",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "700",
    marginTop: "24px",
    marginBottom: "6px",
  },
  text: {
    marginBottom: "12px",
  },
};
