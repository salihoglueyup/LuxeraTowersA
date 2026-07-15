// Merkezi indirme yardımcıları.
// Gerçek tip-bazlı PDF'ler gelene kadar genel katalog fallback olarak kullanılır.

export const CATALOG_URL = '/catalog/luxera-catalog.pdf';

/**
 * Verilen dosyayı tarayıcıda indirmeyi tetikler.
 * @param {string} url  İndirilecek dosyanın yolu (public/ göreli)
 * @param {string} [filename] Kaydedilecek dosya adı
 */
export const downloadFile = (url, filename = 'Luxera-Towers.pdf') => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/** Proje kataloğunu indirir. */
export const downloadCatalog = () =>
  downloadFile(CATALOG_URL, 'Luxera-Towers-Katalog.pdf');
