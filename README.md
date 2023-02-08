# c-util

#### 介绍
JavaScript工具库

#### 技术栈
- 基础语言：JavaScript
- 打包工具：rollup
- 单元测试：jest
- 文档生成：jsdoc
## 目录介绍
```                                                                                   
├─ src                                  
│  ├─ xxxx.js                     // 工具库方法文件
├─ test                              
│  ├─ xxxx.test.js                // 单元测试
├─ .gitignore
├─ babel.config.js                // es6兼容
├─ index.js                       // 打包入口文件
├─ package.json 
├─ README.md                            
└─ rollup.config.js               // rollup打包配置文件                        
```

### 安装
```shell
npm i c-util
```
### 打包
```shell
npm run build
```
### 单元测试
```shell
npm run test
```
### 生成文档
```shell
npm run docs # 浏览器访问docs下的index.html
```


### 发布到npm
```shell
npm login
npm publish
```