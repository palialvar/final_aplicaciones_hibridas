const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export function getLibroImageSrc(img) {
  if (!img) return "/images/mh.png"
  if (img.startsWith("http")) return img
  if (img.startsWith("/images/")) return img
  if (img.startsWith("/uploads/")) return BACKEND_URL + "/uploads/" + img
  return BACKEND_URL + "/uploads/" + img
}
