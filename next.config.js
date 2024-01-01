/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gcdnb.pbrd.co'], // Updated to the correct domain
    },
    experimental: {
        serverActions: true
    }
};

module.exports = nextConfig;
