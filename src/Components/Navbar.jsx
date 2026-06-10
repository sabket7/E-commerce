export function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>EliteMart</h2>

      <div style={styles.menu}>
        <span style={styles.item}>Home</span>
        <span style={styles.item}>Products</span>
        <span style={styles.item}>About</span>
        <span style={styles.item}>Contact</span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
  backgroundColor: "#111827",
  color: "white",
  padding: "18px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
},

  menu: {
    display: "flex",
    gap: "20px",
  },

  item: {
    fontWeight: "bold",
  },
};