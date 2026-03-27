import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pfps.gg',
        port: '',
        pathname: '/**', // Permite cualquier imagen dentro de este dominio
      },
    ],
  },
};

export default nextConfig;
