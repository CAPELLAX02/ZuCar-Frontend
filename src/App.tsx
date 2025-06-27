import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Hakkimizda from './pages/Hakkimizda';
import AdminPanel from './pages/admin/AdminPanel';

import OtoKaplama from './pages/OtoKaplama';
import CamFilmi from './pages/CamFilmi';
import SeramikKaplama from './pages/SeramikKaplama';
import BoyasizGocuk from './pages/BoyasizGocuk';
import PpfKaplama from './pages/PpfKaplama';
import RenkDegisim from './pages/RenkDegisim';
import KisiyeOzelTasarim from './pages/KisiyeOzelTasarim';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/oto-kaplama" element={<OtoKaplama />} />
        <Route path="/cam-filmi" element={<CamFilmi />} />
        <Route path="/seramik-kaplama" element={<SeramikKaplama />} />
        <Route path="/boyasiz-gocuk" element={<BoyasizGocuk />} />
        <Route path="/ppf-kaplama" element={<PpfKaplama />} />
        <Route path="/renk-degisim" element={<RenkDegisim />} />
        <Route path="/kisiye-ozel-tasarim" element={<KisiyeOzelTasarim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
