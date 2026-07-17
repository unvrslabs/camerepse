import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sito interamente statico: export in ./out (drop-in per l'hosting attuale di camerepse.it).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
