import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav style={styles.nav}>
         <h2>QuickPaste</h2>
         <Link to="/" style={styles.link}>New Paste</Link>
      </nav>
   );
}

const styles = {
   nav: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
      background: "#111",
      color: "#fff"
   },
   link: {
      color: "#fff",
      textDecoration: "none"
   }
};

export default Navbar;