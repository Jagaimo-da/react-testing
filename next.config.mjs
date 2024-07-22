/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/react-testing',
    assetPrefix: '/react-testing/',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
