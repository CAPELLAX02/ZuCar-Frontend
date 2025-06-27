import React from 'react';

const Harita: React.FC = () => {
  /* En-lem, boy-lam: 41.029910 , 29.240241 (yaklaşık) */
  const lat = 41.029910;
  const lng = 29.240241;

  const src = `https://maps.google.com/maps?`;
  const params = new URLSearchParams({
    q: `${lat},${lng}`,
    z: '17',                      // zoom
    output: 'embed',
    markers: `color:red|${lat},${lng}`, // 🔴 pin
  }).toString();

  return (
    <section className="harita-section">
      <div className="harita-container">
        <div className="harita-header">
          <h3>Bizi Nerede Bulabilirsiniz?</h3>
          <p>Merkezi konumumuzda sizleri bekliyoruz</p>
        </div>

        <div className="harita-wrapper">
          <iframe
            title="ZuCar Araç Kaplama Konum"
            src={src + params}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
              </div>
              
          </div>
          
          <div className="harita-address">
              <h4>
                  Ekşioğlu Mah. Kuran Kursu Cd. 30. Sk. No: 14B, Çekmeköy / İstanbul
          </h4>
        </div>
    </section>
  );
};

export default Harita;
