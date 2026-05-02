/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Alleen een basePath als we op GitHub Pages (productie) draaien
  basePath: isProd ? '/ANB-TUINWERKEN' : '', 
  // Dit zorgt dat ook de interne links (zoals afbeeldingen) meeschalen
  assetPrefix: isProd ? '/ANB-TUINWERKEN/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;