interface SiteTemplateProps {
  children: React.ReactNode;
}

export default function SiteTemplate({ children }: SiteTemplateProps) {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('active');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Header */}
      <header className="header">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
              <a href="https://www.adb.org/" className="top-link">ADB.org</a>
              <a href="https://www.adb.org/news" className="top-link">News & Events</a>
              <a href="https://www.adb.org/contacts" className="top-link">Contact ADB</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <a href="#" className="logo-link">
                <img src="https://dev-adb-digiasia.pantheonsite.io/themes/custom/digiasia_theme/logo.png" alt="ADB" className="logo-img" />
                <div className="logo-text">digiASIA Insights</div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <a href="#" className="nav-link">Home</a>
              <a href="#maps" className="nav-link">Maps</a>
              <a href="#dashboard" className="nav-link">Dashboard</a>
              <a href="#publications" className="nav-link">Publications</a>
              <a href="#ai-tool" className="nav-link">AI Tool</a>
              <a href="#blog" className="nav-link">Blog</a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="nav-mobile" id="mobileMenu">
            <a href="#" className="nav-link-mobile">Home</a>
            <a href="#maps" className="nav-link-mobile">Maps</a>
            <a href="#dashboard" className="nav-link-mobile">Dashboard</a>
            <a href="#publications" className="nav-link-mobile">Publications</a>
            <a href="#ai-tool" className="nav-link-mobile">AI Tool</a>
            <a href="#blog" className="nav-link-mobile">Blog</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="footer">
        {/* Main Footer Content */}
        <div className="container">
          <div className="row">
            {/* About ADB Section */}
            <div className="col-xs-12 col-sm-6 col-lg-6">
              <h4 className="footer-heading">About ADB</h4>
              <div className="footer-content">
                <p className="footer-text">
                  ADB is a leading multilateral development bank supporting sustainable, inclusive, and resilient growth across Asia and the Pacific. Working with its members and partners to solve complex challenges together, ADB harnesses innovative financial tools and strategic partnerships to transform lives, build quality infrastructure, and safeguard our planet.
                </p>
                <p className="footer-text">
                  Founded in 1966, ADB is owned by 69 members—50 from the region.
                </p>
                <div className="footer-headquarters">
                  <h5 className="footer-subheading">Headquarters</h5>
                  <p className="footer-text">
                    6 ADB Avenue, Mandaluyong City 1550, Metro Manila, Philippines
                  </p>
                  <p className="footer-text">
                    +63 2 8632 4444  +63 2 8636 2444
                  </p>
                </div>
              </div>
            </div>

            {/* Site Navigation Section */}
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <h4 className="footer-heading">Site Navigation</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#maps" className="footer-link">Maps</a></li>
                <li><a href="#dashboard" className="footer-link">Dashboard</a></li>
                <li><a href="#publications" className="footer-link">Publications</a></li>
                <li><a href="#ai-tool" className="footer-link">AI Tool</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
              </ul>
            </div>

            {/* Other ADB Sites Section */}
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <h4 className="footer-heading">Other ADB Sites</h4>
              <ul className="footer-links">
                <li><a href="https://blogs.adb.org/" className="footer-link" target="_blank" rel="noopener noreferrer">ADB Blogs</a></li>
                <li><a href="https://aric.adb.org/" className="footer-link" target="_blank" rel="noopener noreferrer">Asia Regional Integration Center</a></li>
                <li><a href="https://asianbondsonline.adb.org/" className="footer-link" target="_blank" rel="noopener noreferrer">Asian Bonds Online</a></li>
                <li><a href="https://data.adb.org/" className="footer-link" target="_blank" rel="noopener noreferrer">ADB Data Library</a></li>
                <li><a href="https://development.asia/" className="footer-link" target="_blank" rel="noopener noreferrer">Development Asia</a></li>
                <li><a href="https://events.development.asia/" className="footer-link" target="_blank" rel="noopener noreferrer">ADB Knowledge Events</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p className="footer-copyright">© {currentYear} digiASIA Insights. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Accessibility</a>
                <a href="#" className="footer-bottom-link">Site Map</a>
                <a href="#" className="footer-bottom-link">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}