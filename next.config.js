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
      "images.ctfassets.net",
      "unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
