// src/components/Header.tsx
import { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/** Alt menü yolları (“Hizmetlerimiz” grubuna dâhil) */
const hizmetYollari = [
  '/arac-kaplama',
  '/cam-filmi',
  '/seramik-kaplama',
  '/boyasiz-gocuk',
  '/ppf-kaplama',
  '/renk-degisim',
  '/kisiye-ozel-tasarim',
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);      // kayar menü açık/kapalı
  const { pathname } = useLocation();

  /* Hizmetler sekmesi aktif mi? (alt sayfalardan biri ise) */
  const hizmetlerActive = useMemo(
    () => hizmetYollari.some((p) => pathname.startsWith(p)),
    [pathname]
  );

  /* NavLink ortak sınıf üreticisi */
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? ' nav-active' : ''}`;

  /* Küçük ekranda linke tıklayınca menüyü kapat */
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="site-header">
      {/* Burger / Sandwich ikon – sadece mobilde görünür */}
      <button
        className={`burger${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menüyü Aç / Kapat"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Logo – masaüstünde solda, mobilde ortada */}
      <div className="logo">
        {/* İsterseniz img kullanın */}
        {/* <img src="/assets/asd.png" alt="ZuCar Logo" /> */}
        <span>ZuCar</span>
      </div>

      {/* NAV
         • Masaüstü: inline (flex)   • Mobil: soldan kayan panel (CSS ile)
      */}
      <nav className={mobileOpen ? 'open' : ''}>
        <ul onClick={handleNavClick}>
          <li>
            <NavLink to="/" end className={linkClass}>
              Ana Sayfa
            </NavLink>
          </li>

          <li>
            {/* Hash link: <a> olarak kalır */}
            <a href="#kod-sorgulama" className="nav-link">
              Garanti Sorgulama
            </a>
          </li>

          {/* ---------- Hizmetlerimiz (dropdown) ---------- */}
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
