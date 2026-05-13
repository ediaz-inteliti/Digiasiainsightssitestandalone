import { useState } from 'react';

interface SiteTemplateProps {
  children: React.ReactNode;
}

export default function SiteTemplate({ children }: SiteTemplateProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-layout">
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      {/* Header */}
      <header className="header">
        {/* Main Header */}
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <a href="#" className="logo-link">
                <div className="logotype">
                  <span className="logotype-primary">digiASIA</span>
                  <span className="logotype-secondary">Insights Platform</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <a href="#" className="nav-link">Home</a>
              <a href="#maps" className="nav-link">Digital Reach Map</a>
              <a href="#ai-tool" className="nav-link">Capacity Tracker</a>
              <a href="#dashboard" className="nav-link">Development Index</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`nav-mobile${menuOpen ? ' active' : ''}`}
            id="mobileMenu"
            aria-hidden={!menuOpen}
          >
            <a href="#" className="nav-link-mobile" tabIndex={menuOpen ? 0 : -1}>Home</a>
            <a href="#maps" className="nav-link-mobile" tabIndex={menuOpen ? 0 : -1}>Digital Reach Map</a>
            <a href="#ai-tool" className="nav-link-mobile" tabIndex={menuOpen ? 0 : -1}>Capacity Tracker</a>
            <a href="#dashboard" className="nav-link-mobile" tabIndex={menuOpen ? 0 : -1}>Development Index</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div id="main-content" className="site-main">
        {children}
      </div>

      {/* Footer */}
      <footer className="footer">
        {/* Main Footer Content */}
        <div className="container">
          <div className="row footer-columns">
            {/* digiASIA Identity Column */}
            <div className="col-xs-12 col-lg-7 footer-brand-col">
              <div className="footer-brand-logotype">
                <span className="footer-brand-primary">digiASIA</span>
                <span className="footer-brand-secondary">Insights Platform</span>
              </div>
              <p className="footer-brand-desc">
                An integrated platform leveraging data, visuals, and maps to track digital transformation across ADB's developing member countries.
              </p>
            </div>

            {/* About ADB Section */}
            <div className="col-xs-12 col-lg-5 footer-adb-col">
              <h4 className="footer-heading">About ADB</h4>
              <div className="footer-content">
                <p className="footer-text">
                  Learn more about ADB's work in the digital sector by visiting <a href="#" className="footer-link">Digital Technology in Asia and the Pacific</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p className="footer-copyright">For more information on the digiASIA platform, please contact <a href="mailto:ikwon@adb.org" className="footer-bottom-link">ikwon@adb.org</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}