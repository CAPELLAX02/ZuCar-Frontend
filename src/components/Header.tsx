// src/components/Header.tsx
import { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const hizmetYolları = [
  '/oto-kaplama',
  '/cam-filmi',
  '/seramik-kaplama',
  '/boyasiz-gocuk',
  '/ppf-kaplama',
  '/renk-degisim',
  '/kisiye-ozel-tasarim',
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  /** Alt menüdeki sayfalardan biri açıksa, üst “Hizmetlerimiz” sekmesini de aktif göster */
  const hizmetlerActive = useMemo(
    () => hizmetYolları.some((p) => pathname.startsWith(p)),
    [pathname],
  );

  /* Menü linkleri için ortak sınıf üretici */
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? ' nav-active' : ''}`;

  return (
    <header className="site-header">
      <div className="logo">
        <img src="./assets/asd.png" alt="" style={{
          width: '180px'
        }} />
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={linkClass}>
              Ana Sayfa
            </NavLink>
          </li>

          <li>
            {/* hash link dışarıdan <a> olarak kalıyor */}
            <a href="#kod-sorgulama" className="nav-link">
              Garanti Sorgulama
            </a>
          </li>

          {/* ---------- Hizmetlerimiz dropdown ---------- */}
          <li
            className="dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className={`dropdown-toggle${hizmetlerActive ? ' nav-active' : ''}`}>
              Hizmetlerimiz ▾
            </span>

            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/oto-kaplama" className={linkClass}>
                    Oto Kaplama Hizmeti
                  </NavLink>
                </li>
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
                  <NavLink to="/boyasiz-gocuk" className={linkClass}>
                    Boyasız Göçük Düzeltme
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
                <li>
                  <NavLink to="/kisiye-ozel-tasarim" className={linkClass}>
                    Kişiye Özel Tasarım
                  </NavLink>
                </li>
              </ul>
            )}
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
