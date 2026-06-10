export function Testimonials() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>What Our Customers Say</h1>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h2>⭐⭐⭐⭐⭐</h2>
          <p>
            Excellent products and fast delivery. Highly recommended for tech
            lovers.
          </p>
          <h4>Rahul Sharma</h4>
        </div>

        <div style={styles.card}>
          <h2>⭐⭐⭐⭐⭐</h2>
          <p>
            Best prices for gaming accessories. Quality is really impressive.
          </p>
          <h4>Priya Patel</h4>
        </div>

        <div style={styles.card}>
          <h2>⭐⭐⭐⭐⭐</h2>
          <p>
            Amazing shopping experience. Customer support was very helpful.
          </p>
          <h4>Amit Verma</h4>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#f8fafc",
  },

  heading: {
    marginBottom: "30px",
    color: "#111827",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    width: "280px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};