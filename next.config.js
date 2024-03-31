/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ['localhost', 'i.ytimg.com', '127.0.0.1'] },
    env: {
        API_URL: process.env.REACT_APP_URL,
        API_ENV: process.env.REACT_APP_ENV
    },
    output: 'export'
}

module.exports = nextConfig
