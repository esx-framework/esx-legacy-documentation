import { useTranslation } from "src/hooks/useTranslation";
import { ThemedImage } from "src/components/theme/themed-image";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="esx-footer">
      <div className="footer-content">
        {/* Logo and Main Footer Links */}
        <div className="footer-section footer-main">
          <a className="footer-logo" href="/" aria-label="ESX Framework Docs">
            <ThemedImage />
          </a>
          <p className="footer-description">
            The premier open-source framework for creating immersive FiveM roleplay servers.
            Trusted by thousands of servers worldwide.
          </p>
        </div>

        {/* Developer Resources */}
        <div className="footer-section">
          <h4>Developer Resources</h4>
          <div className="footer-links">
            <a href="https://github.com/esx-framework/esx_core" target="_blank" rel="noopener noreferrer">
              Core Repository
            </a>
            <a href="https://github.com/esx-framework/esx-legacy-addons" target="_blank" rel="noopener noreferrer">
              Addons Repository
            </a>
            <a href="/en/tutorial/developing" rel="noopener">Development Tutorial</a>
            <a href="/en/tutorial/coding_practices" rel="noopener">Best Practices</a>
          </div>
        </div>

        {/* Community */}
        <div className="footer-section">
          <h4>Community</h4>
          <div className="footer-links">
            <a href="https://discord.esx-framework.org/" target="_blank" rel="noopener noreferrer">
              Discord Server
            </a>
            <a href="https://github.com/esx-framework" target="_blank" rel="noopener noreferrer">
              GitHub Organization
            </a>
            <a href="https://www.esx-framework.org/" target="_blank" rel="noopener noreferrer">
              Official Website
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Start</h4>
          <div className="footer-links">
            <a href="/en/tutorial/install" rel="noopener">Installation Guide</a>
            <a href="/en/esx_addons/esx_policejob" rel="noopener">Police Job System</a>
            <a href="/en/esx_addons/esx_banking" rel="noopener">Banking System</a>
            <a href="/en/esx_addons/esx_vehicleshop" rel="noopener">Vehicle Shop</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <a href="https://www.esx-framework.org/" target="_blank" rel="noopener noreferrer">
              {t.copyright} {new Date().getFullYear()} ESX Framework. {t.allRightsReserved}
            </a>
          </div>
          <div className="footer-meta">
            <span>Built for the FiveM Community</span>
            <span>•</span>
            <span>Open Source & Free Forever</span>
            <span>•</span>
            <a href="/sitemap.xml" rel="noopener">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
