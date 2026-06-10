export function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About EliteMart</h1>

      <p style={styles.text}>
        Welcome to EliteMart, your trusted destination for premium electronics,
        gaming accessories, laptops, smartphones and the latest tech products.
      </p>

      <p style={styles.text}>
        Our mission is to provide high-quality products at affordable prices
        while delivering an excellent shopping experience to our customers.
      </p>

      <div style={styles.boxContainer}>
        <div style={styles.box}>
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div style={styles.box}>
          <h2>100+</h2>
          <p>Tech Products</p>
        </div>

        <div style={styles.box}>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
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
    marginBottom: "20px",
    color: "#2563eb",
  },

  text: {
    fontSize: "18px",
    lineHeight: "30px",
    maxWidth: "800px",
    margin: "20px auto",
  },

  boxContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
  },

  box: {
    padding: "25px",
    width: "200px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};