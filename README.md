# vue-ts

npm vite创建的vue ts router axios eslint prettier开箱即用的模板

IDE：个人用WebStorm



## 使用

```powershell
# 可选：先删除package-lock.json
npm install --save-dev eslint
npm i
```



## 特性

1. eslint

2. router

3. axios

4. element-plus按需导入



## 展望

后续可能添加的特性：

1. prettier
2. vuex
3. sass



## 配置步骤

本模板的生成步骤

### 初始化vite项目

```powershell
npm create vite@latest vue-ts --template vue-ts
# vue
# vue-ts
```



### 配置eslint


```powershell
npm install --save-dev eslint
```

```powershell
npx eslint --init
# To check syntax, find problems, and enforce code style
# JavaScript modules (import/export)
# Vue.js
# (ts? )Yes
# Browser
# Use a popular style guide
# Standard
# JavaScript
```

配置.eslintrc.js，`plugin:vue/vue3-recommended` 以及禁用var，配置.eslintignore

~~package.json添加eslint脚本~~



### 配置@别名等项目设置

```powershell
npm install -D @types/node
```

配置tsconfig.json、vite.config.ts，@别名路径

配置tsconfig.json，设置exclude



### 配置router

```powershell
npm install vue-router@4
```

编写`@/router/index.ts`



### 配置axios

```powershell
npm install axios
```

配置`@/axios`，拦截器、通用错误处理函数



### 按需导入Element-plus

```powershell
npm install element-plus --save
npm install -D unplugin-vue-components unplugin-auto-import
```

配置`vite.config.ts`和`.gitignore`
