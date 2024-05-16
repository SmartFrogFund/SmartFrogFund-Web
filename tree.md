├── next-env.d.ts           # Next.js 自动生成的文件，用于类型定义。
├── next.config.js          # Next.js 的配置文件，用于自定义 Next.js 的行为。
├── node_modules            # 存放项目的所有 npm 包及其依赖项。
├── package.json            # 项目的配置文件，包含项目的依赖、脚本和其他项目信息。
├── pnpm-lock.yaml          # pnpm 包管理器的锁定文件，确保在不同环境中安装相同的依赖版本。
├── postcss.config.js       # PostCSS 的配置文件，用于处理 CSS。
├── prisma                  # Prisma 相关文件夹，定义数据库模式。
|  └── schema.prisma        # Prisma 的模式定义文件，描述数据库结构和模型关系。
├── README.md               # 项目的自述文件，提供项目说明和使用指南。
├── src                     # 源代码目录。
|  ├── app                  # 应用程序主要文件夹。
|  |  ├── admin             # 管理员相关页面和组件。
|  |  ├── api               # 服务层，处理 API 请求和业务逻辑。
|  |  ├── layout.tsx        # 布局组件，定义页面的整体布局。
|  |  ├── owner             # 出租方（卖家）相关页面和组件。
|  |  ├── page.tsx          # 首页组件。
|  |  ├── providers.tsx     # 用于提供全局状态或依赖注入的组件。
|  |  └── user              # 承租方（买家）相关页面和组件。
|  ├── consts               # 存放项目中的常量。
|  ├── hooks                # 自定义的 React hooks。
|  |  └── index.ts
|  ├── lib                  # 自用库，存放项目自定义的库函数。
|  |  ├── index.ts
|  |  ├── prismaDB.ts       # 初始化和配置 Prisma 客户端。
|  |  ├── server.ts         # 服务器相关的实用函数。
|  |  └── swagger.js        # Swagger 配置文件，用于 API 文档。
|  ├── middleware.ts        # 中间件，处理请求和响应的中间逻辑。
|  ├── stores               # mobx 的 store 文件夹，存放全局状态管理。
|  |  └── main.store.ts
|  ├── styles               # 样式文件夹，存放全局和模块化的 CSS。
|  |  └── global.css
|  ├── types                # 类型定义文件夹，存放 TypeScript 类型。
|  └── utils                # 工具类文件夹，存放常用的工具函数。
|     └── HttpUtils.ts      # HTTP 工具类，封装常用的 HTTP 请求函数。
├── tailwind.config.js      # Tailwind CSS 的配置文件。
└── tsconfig.json           # TypeScript 的配置文件，定义编译选项。