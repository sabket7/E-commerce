export function Categories() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shop By Category</h1>

      <div style={styles.cards}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
            alt=""
            style={styles.image}
          />
          <h3>Laptops</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500"
            alt=""
            style={styles.image}
          />
          <h3>Gaming</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            alt=""
            style={styles.image}
          />
          <h3>Smartphones</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500"
            alt=""
            style={styles.image}
          />
          <h3>Accessories</h3>
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
    marginBottom: "30px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

 card: {
  width: "240px",
  borderRadius: "15px",
  overflow: "hidden",
  backgroundColor: "white",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
},

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};