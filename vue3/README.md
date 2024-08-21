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

# vite创建vue3工程目录
.vscode/
├── extensions.json # vscode插件配置文件

src/
├── App.vue # 根组件
├── main.ts # 入口文件
├── assets # 静态资源目录
├── components # 组件目录
├── vite-env.d.ts # 类型声明文件

vite.config.ts # vite配置文件
package.json # 项目配置文件

vue文件中有三种标签
- `<template>`：模板
- `<script>`：脚本
- `<style>`：样式

## vue2 选项式：弊端
Options类型的API，数据，方法，计算属性等，是分散在：data，methods，computed中的，若想新增或者修改一个需求，
就需要分别修改：data, methods, computed中的代码，不方便维护。

## vue3 组合式：优势
组合式API，将数据，方法，计算属性等全部集中在一个地方，通过函数调用的方式来实现，可以更方便的管理代码，

# 拉开序幕的setup
setup函数是Composition API的核心，它可以帮助我们更好地管理组件的状态，它是一个函数，它接收两个参数：props和context。
组件中所用到的：数据，方法，计算属性，监视等等，都配置在setup中。