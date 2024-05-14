// src/lib/server.ts
const express = require("express");
// const next = require("next");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
const server = express();

// Swagger UI 路由
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 所有其他 Next.js 路由
//   server.all("*", (req:any, res:any) => handle(req, res));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});
// });
