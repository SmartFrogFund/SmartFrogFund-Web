/** @type {import('next').NextConfig} */
const path = require("path");
const dotenv = require('dotenv');

const {ASSETT_PREFIX,BASE_PATH} = process.env;
// 手动指定环境变量文件
const env = process.env.NODE_ENV; // 'test' 或 'production' 或 'development'
console.log('111111111', env)
const envPath = path.resolve(__dirname, `.env.${env}`);
dotenv.config({ path: envPath });

const nextConfig = {
  // output: "export",
  assetPrefix: ASSETT_PREFIX,
  basePath: BASE_PATH,
  transpilePackages: ["react-syntax-highlighter", "swagger-client", "swagger-ui-react"],
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  //   webpack: (config) => {
  //     config.externals.push("pino-pretty", "lokijs", "encoding");
  //     return config;
  //   },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
