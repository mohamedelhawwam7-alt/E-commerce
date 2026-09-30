/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/E-commerce" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
