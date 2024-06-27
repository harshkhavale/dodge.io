/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ucarecdn.com',
        },
        {
          protocol: 'https',
          hostname: 'wordpress-1289306-4676677.cloudwaysapps.com',
        },
      ],
    },
  }
  
  export default nextConfig