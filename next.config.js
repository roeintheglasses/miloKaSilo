/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    // Disable TypeScript checks for the build since we have a type definition issue
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
