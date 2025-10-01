/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    webpack: (config) => {
        config.cache = false;
        return config;
    },
    logging: {
        fetches: {
            fullUrl: false
        }
    }
}

module.exports = nextConfig