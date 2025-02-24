// Using ES Module syntax since package.json has "type": "module"
/** @type {import('next').NextConfig} */
const config = {
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
}

export default config
