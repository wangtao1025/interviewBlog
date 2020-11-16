# Typescript

## 运行环境的搭建

学习ts，因为并不可以直接在浏览器看到效果，而且使用tsc编译成js，或者使用tsc --watch等方法都不算方便，考虑到平时使用ts，基本都是在构建工具中，所以首先第一步我们需要创建一个rollup的构建环境来学习ts

- 为什么选择rollup而不是webpack？

  - 因为rollup打包出来的js代码相对更干净纯粹，适合来打包纯js代码

- 需要配置哪些？

  - ```js
    // 首先需要npm init -y
    // 然后下载rollup typescript等
    npm install rollup typescript rollup-plugin-typescipt2 @rollup/plugin-node-resolve rollup-plugin-serve -D
    // rollup-plugin-typescript2 是帮助在rollup中使用ts
    // rollup/plugin-node-resolve 是帮助在rollup中使用第三方模块
    // rollup-plugin-serve 是帮助在本地启动服务
    
    // 然后需要执行tsc --init 产生一个tsconfig.json，记得将module改成rollup支持的es2015或者esnext
    ```

## [基础类型](./basicType.md)
## [变量声明](./variable.md)

