// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    // This ensures 'fs' module isn't bundled on the client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Add this line to handle 'fs' module errors
      };
    }
    return config;
  },
};
