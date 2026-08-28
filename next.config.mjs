/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [new URL("https://kurino096.shop/**")],
  },
};

export default nextConfig;
