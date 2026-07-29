/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide Next.js's on-screen dev-mode indicator (never appears in production)
  devIndicators: false,
  images: {
    // Serve modern formats (AVIF/WebP) — far smaller than the source PNGs
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
