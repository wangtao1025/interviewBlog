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
    
- rollup.config.js的简单配置
- ```js
  import ts from 'rollup-plugin-typescript2'; // 解析ts的插件
  import {nodeResolve} from '@rollup/plugin-node-resolve'; // 解析第三方模块的插件
  import serve from 'rollup-plugin-serve'; // 启动一个本地服务的插件
  import path from 'path';
  
  // rollup支持es6写法
  export default {
      input:'src/index.ts',
      output:{
          format:'iife', // 立即执行，表示打包后的结果是一个自执行函数，常用的还有umd主要是为了弄一个全局变量，我们只是为了看到ts转义为js的效果
          file: path.resolve(__dirname,'dist/bundle.js'), // 出口文件
          sourcemap:true, //根据源码产生映射文件
      },
      plugins:[
          nodeResolve({ // 第三方文件的解析，比如使用各jq等等
              extensions:['.js','.ts']
          }),
          ts({
              tsconfig:path.resolve(__dirname, 'tsconfig.json') // 表示ts使用哪个配置文件
          }),
          serve({ // 本地开启一个服务实时看到打包后的效果
              open:true,
              openPage:'/public/index.html',
              contentBase:'',
              port:8080
          })
      ]
  }
  ```

- 修改package.json

- ```json
  "scripts": {
      "serve": "rollup -c -w"
  }
  ```

## QA

- 什么时候需要标识类型？什么时候不需要？
  - 当一个变量没有赋值的时候，默认是any。
  - 如果一个变量声明的时候进行了赋值，也就会进行类型推导，那就并不是一定需要标识类型
- 12..toString(),为什么使用两个点？
  - 因为js中数字可能带有小数，所以只有一个小数点，js会以为后面是小数，会报错