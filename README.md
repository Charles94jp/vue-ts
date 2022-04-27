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



## 展望

后续可能添加的特性：

1. prettier
2. vuex
3. sass



## 配置步骤

本模板的生成步骤

```powershell
npm create vite@latest vue-ts --template vue-ts
# vue
# vue-ts
```


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

配置eslint，`plugin:vue/vue3-recommended` 以及禁用var

~~package.json添加eslint脚本~~

配置tsconfig.json，设置`'@'`路径、exclude

