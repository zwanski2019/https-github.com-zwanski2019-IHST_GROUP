module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      process: require.resolve("process/browser")
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5002"
  }
};
