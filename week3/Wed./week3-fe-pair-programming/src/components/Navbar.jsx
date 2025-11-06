import logo from "../assets/images/logo.svg";
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Page Links (for navigation) */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        {/* Social Links (for social icons) */}
        <SocialLinks parentClass="nav-icon" itemClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
