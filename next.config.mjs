/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats (AVIF/WebP) — far smaller than the source PNGs
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
