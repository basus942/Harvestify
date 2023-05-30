/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.thespruceeats.com",
      "2.wlimg.com",
      "www.news-medical.net",
      "www.saberhealth.com",
      "gifdb.com",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig;
