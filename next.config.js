/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.byteabsorb.com',
            port: '',
            pathname: '/',
          },
          {
            protocol: 'https',
            hostname: 'api.byteabsorb.com',
            port: '',
            pathname: '/uploads',
          },
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '1337',
            pathname: '/',
          },
            {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '1337',
            pathname: '/uploads',
            },
        ],
    },
}

module.exports = nextConfig
