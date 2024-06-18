const path = require('path');

// 获取项目的根目录路径
const projectDir = path.resolve(__dirname);
module.exports = {
	apps: [
		{
			name: 'frog-fund-web',
			script: "npm",
      args: "run start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
		},
	],
};
