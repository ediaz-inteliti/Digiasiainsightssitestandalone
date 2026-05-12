export default function Home() {
  const handleCardHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const card = e.currentTarget;
    const borderColor = card.getAttribute('data-color');
    if (isEnter && borderColor) {
      card.style.borderColor = borderColor;
    } else {
      card.style.borderColor = 'transparent';
    }
  };

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <div className="hero-text">
                  <h1 className="hero-title">Welcome to digiASIA Insights</h1>
                  <div className="hero-rule"></div>
                  <p className="hero-description">An integrated platform leveraging data, visuals, and maps to track digital transformation across ADB's developing member countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        <div className="container">
          <div className="modules-header">
            <p className="modules-eyebrow">Platform Modules</p>
            <p className="modules-description">Select a module to explore data, maps and benchmarks for ADB's developing member countries.</p>
          </div>
          <div className="row">
                {/* Digital Reach Map Module */}
                <div className="col-xs-12 col-sm-4">
                  <a
                    href="#maps"
                    className="module-card maps-card"
                    data-color="#3b82f6"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <span className="module-number">01</span>
                        <h4 className="module-title">Digital Reach Map</h4>
                      </div>
                      <p className="module-description">Explore project concentration, infrastructure coverage, and digital access using interactive maps and geographic visualizations to target interventions.</p>
                    </div>
                  </a>
                </div>

                {/* Capacity Tracker Module */}
                <div className="col-xs-12 col-sm-4">
                  <a
                    href="#ai-tool"
                    className="module-card inventory-card"
                    data-color="#a855f7"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <span className="module-number">02</span>
                        <h4 className="module-title">Capacity Tracker</h4>
                      </div>
                      <p className="module-description">Leverage data and statistics to evaluate digital capacity across connectivity, data infrastructure, and human readiness.</p>
                    </div>
                  </a>
                </div>

                {/* Development Index Module */}
                <div className="col-xs-12 col-sm-4">
                  <a
                    href="#dashboard"
                    className="module-card indicators-card"
                    data-color="#6366f1"
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="module-content">
                      <div className="module-header">
                        <span className="module-number">03</span>
                        <h4 className="module-title">Development Index</h4>
                      </div>
                      <p className="module-description">Benchmark digital transformation against regional and global indices to identify gaps.</p>
                    </div>
                  </a>
                </div>
          </div>
        </div>
      </section>
    </main>
  );
}