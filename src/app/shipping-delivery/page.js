import React from "react";

const ShippingDeliveryPolicy = () => {
  return (
    <div style={styles.page}>
        <div style={styles.container}>
      <h1 style={styles.title}>Shipping & Delivery Policy</h1>
      <p style={styles.updated}>Last updated on Sep 2nd 2024</p>
      <p style={styles.text}>Shipping is not applicable for business.</p>
    </div>
    </div>
    
  );
};

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
    color: "#222",
    backgroundImage:
      "radial-gradient(#ccc 1px, transparent 1px), radial-gradient(#ccc 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 10px 10px",
    padding: "40px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  updated: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#555",
  },
  text: {
    fontSize: "16px",
  },
};

export default ShippingDeliveryPolicy;
