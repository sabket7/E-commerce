export function ProductCard() {
  return (
    <div style={styles.container}>
      <h1>Featured Products</h1>

      <div style={styles.products}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500"
            alt=""
            style={styles.img}
          />
          <h3>ASUS TUF A15</h3>
          <p
  style={{
    color:"#2563eb",
    fontWeight:"bold",
    fontSize:"20px"
  }}
>
  ₹65,999
</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
            alt=""
            style={styles.img}
          />
          <h3>Gaming Mouse</h3>
          <p
  style={{
    color:"#2563eb",
    fontWeight:"bold",
    fontSize:"20px"
  }}
>
  ₹6,999
</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
            alt=""
            style={styles.img}
          />
          <h3>Mechanical Keyboard</h3>
          <p
  style={{
    color:"#2563eb",
    fontWeight:"bold",
    fontSize:"20px"
  }}
>
  ₹5,999
</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            alt=""
            style={styles.img}
          />
          <h3>Gaming Headset</h3>
                   <p
  style={{
    color:"#2563eb",
    fontWeight:"bold",
    fontSize:"20px"
  }}
>
  ₹2,000
</p>
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

  products: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },

card: {
  width: "270px",
  backgroundColor: "white",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
},

  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
};