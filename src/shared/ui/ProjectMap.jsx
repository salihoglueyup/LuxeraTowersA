import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../data/site';

// Harita için özel ikon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const ProjectMap = () => {
  const { t } = useTranslation();
  
  // Luxera Towers'ın yaklaşık koordinatları (Güneşli, Basın Ekspres)
  const position = [41.0366, 28.8156];

  return (
    <div className="w-full h-full relative group">
      <MapContainer 
        center={position} 
        zoom={14} 
        scrollWheelZoom={false}
        className="w-full h-full rounded-3xl z-10"
      >
        {/* CartoDB Dark Matter katmanı (Sitenin Navy renklerine uyumlu lüks karanlık tema) */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        <Marker position={position} icon={customIcon}>
          <Popup className="font-serif">
            <div className="text-center p-2">
              <h3 className="font-bold text-lg text-luxera-navy mb-1">Luxera Towers</h3>
              <p className="text-sm text-gray-600 mb-2">{contactInfo.salesOffice}</p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-luxera-gold text-white px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider hover:bg-luxera-navy transition-colors"
              >
                {t('pageLocation.map.getDirections', 'Yol Tarifi Al')}
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Harita üzerine ek lüks bir overlay efekti (kenarlara gölge/karartma) */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-20"></div>
    </div>
  );
};

export default ProjectMap;
