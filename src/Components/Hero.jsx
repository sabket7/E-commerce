export function Hero() {
  return (
    <div style={styles.hero}>
      <div style={styles.left}>
        <h1 style={styles.heading}>
          Level Up Your Tech Experience
        </h1>

        <p style={styles.text}>
          Explore premium laptops, gaming gear, smartphones and accessories
          at unbeatable prices only on EliteMart.
        </p>

        <button style={styles.button}>
          Explore Products
        </button>
      </div>

      <div style={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
          alt="Tech Products"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "70px 80px",
    background:
      "linear-gradient(135deg,#e8f1ff,#ffffff)",
  },

  left: {
    width: "50%",
  },

 heading: {
  fontSize: "60px",
  fontWeight: "bold",
  color: "#111827",
},

  text: {
    fontSize: "18px",
    lineHeight: "30px",
    color: "#4b5563",
    marginBottom: "25px",
  },

 button: {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "15px 35px",
  borderRadius: "12px",
  fontSize: "18px",
},

  right: {
    width: "45%",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
  },
};