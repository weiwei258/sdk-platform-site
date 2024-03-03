const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

// 设置静态文件夹的路径为 dist
const staticPath = path.join(__dirname, 'dist');

// 使用 koa-static 中间件
app.use(static(staticPath));

// 启动服务器，监听端口
const port = 7002; // 可以根据需要修改端口号
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at ${port}/`);
});
