# SimpleBlog

🥳 一个极简风格的前端博客项目，支持 Markdown 写作与本地运行部署。

## 功能特色

- ✍️ 博文采用 Markdown 格式，支持本地实时预览编辑
- 🗂️ 自动加载 `posts/` 目录下所有文章
- 🎨 响应式设计，适配手机和桌面端
- 🚀 一键运行或打包部署

## 快速开始

```bash
# 安装依赖
npm install

# 启动本地开发服务器
npm run serve

# 构建生产环境代码
npm run build

# 检查/修复语法问题
npm run lint
```

打开浏览器访问 [http://localhost:8080](http://localhost:8080) 开始体验。

## 目录结构说明

```text
.
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   └── main.js
├── posts/
│   └── hello-world.md     # 你的第一篇博客
├── package.json
└── README.md
```

## 如何写一篇新博客

1. 在 `posts/` 目录下新建一个 Markdown 文件，如 `2026-05-11-my-post.md`。
2. 推荐格式如下：

    ```markdown
    ---
    title: 我的第一篇博客
    date: 2026-05-11
    tags: [随笔, 前端]
    ---

    这里是正文内容，可以写Markdown语法。
    ```

3. 保存后刷新页面自动加载。

## 自定义配置

更多自定义内容参见 [Configuration Reference](https://cli.vuejs.org/config/).

## License

[MIT](LICENSE)
