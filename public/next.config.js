/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // ✅ Add this section
  allowedDevOrigins: [
    "10.111.97.98",   // your LAN IP (from warning)
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
