/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";
export default {
  output: "export",          // static HTML into /out for GitHub Pages
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};
