/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1nw187rmwcpt3.cloudfront.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'portfolio20072023.s3.ap-south-1.amazonaws.com',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
