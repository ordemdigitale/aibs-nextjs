import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "atlantique-ibs.net",
        port: "",
        pathname: "/media/uploads/vignettes/**",        
      },
      {
        protocol: "https",
        hostname: "www.atlantique-ibs.net",
        port: "",
        pathname: "/media/uploads/**",
      },
      {
        protocol: "https",
        hostname: "atlantique-ibs.net",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
