// src/lib/swagger.ts
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
  },
  apis: [path.join(__dirname, "../app/api/**/*.ts")], // 确保路径指向你的 API 路由
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
