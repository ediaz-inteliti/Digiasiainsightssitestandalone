export default function Home() {
  const handleCardHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const card = e.currentTarget;
    const borderColor = card.getAttribute('data-color');
    if (isEnter && borderColor) {
      card.style.borderColor = borderColor;
    } else {
      card.style.borderColor = 'white';
    }
  };

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Colorful Rainbow Top Separator */}
        <div className="rainbow-separator"></div>
        
        {/* Hero Content */}
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <div className="hero-text">
                  <h1 className="hero-title">Welcome to <br /> digiASIA Insights</h1>
                  <p className="hero-description">Your central platform for project data analysis, visualizations, and AI tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="modules-title">Explore Modules</h2>
            </div>
          </div>
          
          <div className="row">
            <div className="col-xs-12 col-lg-10">
              <div className="row">
                {/* Maps Module */}
                <div className="col-xs-12 col-sm-6">
                  <a 
                    href="#maps" 
                    className="module-card maps-card" 
                    data-color="#3b82f6"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <div className="module-icon" style={{ color: 'white' }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                            <line x1="9" y1="3" x2="9" y2="18"></line>
                            <line x1="15" y1="6" x2="15" y2="21"></line>
                          </svg>
                        </div>
                        <h4 className="module-title">Maps</h4>
                      </div>
                      <p className="module-description">Visualize projects geographically, explore data by location, and interact with the QGIS map.</p>
                    </div>
                  </a>
                </div>

                {/* Dashboard Module */}
                <div className="col-xs-12 col-sm-6">
                  <a 
                    href="#dashboard" 
                    className="module-card indicators-card" 
                    data-color="#6366f1"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <div className="module-icon" style={{ color: 'white' }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                          </svg>
                        </div>
                        <h4 className="module-title">External Indicators</h4>
                      </div>
                      <p className="module-description">View comprehensive analytics, key performance indicators, and real-time data insights.</p>
                    </div>
                  </a>
                </div>

                {/* Publications Module */}
                <div className="col-xs-12 col-sm-6">
                  <a 
                    href="#publications" 
                    className="module-card publications-card" 
                    data-color="#8b5cf6"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <div className="module-icon" style={{ color: 'white' }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <h4 className="module-title">Publications</h4>
                      </div>
                      <p className="module-description">Access research reports, policy documents, and technical publications from our library.</p>
                    </div>
                  </a>
                </div>

                {/* AI Tool Module */}
                <div className="col-xs-12 col-sm-6">
                  <a 
                    href="#ai-tool" 
                    className="module-card inventory-card" 
                    data-color="#a855f7"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <div className="module-icon" style={{ color: 'white' }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                          </svg>
                        </div>
                        <h4 className="module-title">Inventory of International Capacity Infrastructure</h4>
                      </div>
                      <p className="module-description">View comprehensive analytics, key performance indicators, and real-time data insights.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}