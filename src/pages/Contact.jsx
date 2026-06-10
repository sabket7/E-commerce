export function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <div style={styles.card}>
        <h3>📧 Email</h3>
        <p>support@elitemart.com</p>

        <h3>📞 Phone</h3>
        <p>+91 9876543210</p>

        <h3>📍 Address</h3>
        <p>Nagpur, Maharashtra, India</p>

        <h3>🕒 Working Hours</h3>
        <p>Monday - Saturday : 9 AM - 8 PM</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    textAlign: "center",
  },

  heading: {
    color: "#2563eb",
    marginBottom: "30px",
  },

  card: {
    maxWidth: "500px",
    margin: "auto",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    lineHeight: "30px",
  },
};