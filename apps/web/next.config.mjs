/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@steady/shared', '@steady/config'],
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
