# 创建vue3工程
虽然vue-cli也可以创建vue3工程，但官方推荐基于vite创建项目。

## vue-clic创建vue3工程
```bash
# 查看@vue/cli版本，确保@vue/cli版本>=4.5.13
vue --version
# 安装或升级@vue/cli
npm install -g @vue/cli
# 创建vue3工程
vue create my-project
```

## vite创建vue3工程（`推荐`）htt`ps://vitejs.cn
vite是新一代前端构建工具，它基于Rollup打包，可以快速启动，并且支持Vue3。vite的优势如下：
- 快速启动：vite启动速度快，启动时间仅为原生Webpack的1/3，并且支持热更新，即使是大型项目也能保持较快的开发速度。
- 零配置：vite不需要任何配置，它会自动检测项目依赖并自动配置，不需要手动配置。
- Vue3支持：vite支持Vue3，并且可以直接导入Vue3的包。
```bash
# 创建vite项目
pnpm create vite
```

