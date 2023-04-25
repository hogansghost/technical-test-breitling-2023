/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['prod.demo.saleor.cloud', 'demo.saleor.io'],
  },
};

module.exports = nextConfig;
