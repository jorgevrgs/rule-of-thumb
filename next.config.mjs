import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [join(__dirname, 'src/assets/styles')],
  },
  images: {
    domains: ['celebrities-v2.s3.amazonaws.com'],
  },
  env: {
    NEXT_FRONTEND_URL: process.env.NEXT_FRONTEND_URL,
    NEXT_MONGO_URL: process.env.NEXT_MONGO_URL,
  },
  poweredByHeader: false,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
