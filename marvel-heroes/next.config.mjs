/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images:{
        domains: ['i.annihil.us']
    }
};

export default nextConfig;
