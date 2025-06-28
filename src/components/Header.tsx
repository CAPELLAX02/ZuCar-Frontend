import { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const hizmetYollari = [
  '/cam-filmi',
  '/seramik-kaplama',
  '/ppf-kaplama',
  '/renk-degisim',
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);      
  const { pathname } = useLocation();

  const hizmetlerActive = useMemo(
    () => hizmetYollari.some((p) => pathname.startsWith(p)),
    [pathname]
  );

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? ' nav-active' : ''}`;

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <button
        className={`burger${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menüyü Aç / Kapat"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="logo">
        {/* <img src="/assets/asd.png" alt="ZuCar Logo" /> */}
        <span>ZuCar</span>
      </div>

      <nav className={mobileOpen ? 'open' : ''}>
        <ul onClick={handleNavClick}>
          <li>
            <NavLink to="/" end className={linkClass}>
              Ana Sayfa
            </NavLink>
          </li>

          <li>
            <a href="#kod-sorgulama" className="nav-link">
              Garanti Sorgulama
            </a>
          </li>

          <li className="dropdown">
            <span className={`dropdown-toggle${hizmetlerActive ? ' nav-active' : ''}`}>
              Hizmetlerimiz ▾
            </span>

            <ul className="dropdown-menu">
              <li>
                <NavLink to="/cam-filmi" className={linkClass}>
                  Cam Filmi Hizmeti
                </NavLink>
              </li>
              <li>
                <NavLink to="/seramik-kaplama" className={linkClass}>
                  Seramik Kaplama Hizmeti
                </NavLink>
              </li>
              <li>
                <NavLink to="/ppf-kaplama" className={linkClass}>
                  PPF Kaplama Hizmeti
                </NavLink>
              </li>
              <li>
                <NavLink to="/renk-degisim" className={linkClass}>
                  Renk Değişim Hizmeti
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <a href="/#iletisim" className="nav-link">
              İletişim
            </a>
          </li>

          <li>
            <NavLink to="/hakkimizda" className={linkClass}>
              Hakkımızda
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
