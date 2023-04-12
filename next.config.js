/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    movieKey: 'd31ccc62253ac4e1f5fdf6fba2c7305e',
  },
};

module.exports = nextConfig
