/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https",
            },

            {
                hostname: "directus-production-8ad9.up.railway.app",
                protocol: "https",
            },
        ],
    },
    experimental: {
        serverActions: true,
    }
};

module.exports = nextConfig;
