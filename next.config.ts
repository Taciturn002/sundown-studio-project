import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
     {
      protocol:'https',
      hostname: 'assets-global.website-files.com'

     } 
    ]
  }
};

export default nextConfig;
