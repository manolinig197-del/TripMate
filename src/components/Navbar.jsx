
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plane, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Plane size={22} />
        </span>
        <span>TripMate<span className="brand-dot">.</span></span>
      </Link>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#destinations" onClick={() => setMenuOpen(false)}>Explore</a>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="login-link">Log in</Link>
        <Link to="/register" className="nav-cta">Get Started</Link>
      </div>

      <button
        className="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}

export default Navbar;
