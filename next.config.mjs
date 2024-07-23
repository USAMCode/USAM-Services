/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1nw187rmwcpt3.cloudfront.net',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
