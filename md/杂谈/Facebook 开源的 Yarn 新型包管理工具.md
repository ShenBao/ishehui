
# Facebook 开源的 Yarn 新型包管理工具

Facebook 发布了新的 node.js 包管理器 Yarn 用以替代 npm .

官网：https://yarnpkg.com/lang/en/

## 特性

- Yarn 除了让安装过程变得更快与更可靠，还添加了一些额外的特性，从而进一步简化依赖管理的工作流。

- 同时兼容 npm 与 bower 工作流，并支持两种软件仓库混合使用

- 可以限制已安装模块的协议，并提供方法输出协议信息

- 提供一套稳定的公有 JS API，用于记录构建工具的输出信息

- 可读、最小化、美观的 CLI 输出信息

## 亮点

- 极致的快速—会缓存已经下载过的包，避免重复下载~~~这特性比npm好多了，不用每次都请求下载（离线模式 — 之前下载过的包，可以离线再次安装）

- 安全 — 下载前会检查签名及包的完整性

- 可靠可确定性 ， 保证各平台依赖的一致性

- 网络优化 — 力求网络资源最大利用化，让资源下载完美队列执行，避免大量的无用请求，下载失败会自动重新请求，避免整个安装过程失败

- 扁平化模式 — 对于不匹配的依赖版本的包创立一个独立的包，避免创建重复的。

## 安装

好多方式。。。  

```
windows
npm install -g yarn

MacOS
brew install yarn
```


npm install → yarn

不需要带参数，yarn 命令会读取 package.json 文件，然后从 npm 仓库中抓取软件包，并放置到 node_modules 目录中。等价于运行 npm install。

npm install --save <name> → yarn add <name>

我们避免了 npm install <name> 命令中安装“不可见的依赖”的行为，并分离出一个新命令。运行 yarn add <name> 等价于运行 npm install --save <name>。


## 命令解释

### 初始化

yarn init #初始化package.json – 和npm一致 

### 添加依赖

yarn add [package] — 添加包，会自动安装最新版本，注意会覆盖指定版本号！！！

yarn add [package]@[version] — 带版本号安装

yarn add [package]@[tag] — tag，是指代git上的推送的tag【no release!!】，看图

### 更新依赖

tips: 估计管理器还有些不完善，不能单独升级某个依赖。会提示error This command doesn’t require any arguments. — 意思就是该命令不需要任何参数【不带参数】

```
yarn upgrade [package] — 更新某个包

yarn upgrade [package]@[version] — 指定更新到某个版本

yarn upgrade [package]@[tag] — 指定更新版本到某个标签
```

以上不能使用， 唯一能用的是在项目下执行，yarn upgarde, 会遍历所有依赖，然后全部更新

### 移除依赖

yarn remove [package] — 移除某个包 


## 其他命令

yarn -v   查看版本

yarn add webpack

yarn upgrade webpack

yarn add tty-browserify --offline 目前有bug

yarn cache ls   列出缓存中的模块

yarn cache dir  package在本地的路径

yarn cache clean  强制清除

yarn config

yarn config list 

yarn config set registry registry.npm.taobao,org

yarn info react

yarn global add webpack

yarn self-update

yarn why webpack

yarn run shell

yarn ls

yarn link [package...]

yarn unlink [package...]

yarn login






## yarn.lock
yarn管理器有一个很重要的文件需要注意，就是yarn.lock，这个是用来依赖的正确性，快速可靠安装的；是执行cli的时候自动生成的，在项目的根目录下，需要保留！！！！不要编辑它，这是自动生成的



## 与NPM对比

|   NPM	                        |   YARN	                |   说明                                  |
|------------------------------ |-------------------------- |  -------------------------------- |
|   npm init	                |   yarn init	            |   初始化某个项目                         |
|   npm install/link	        |   yarn install/link	    |   默认的安装依赖操作                       |
|   npm install taco —save	    |   yarn add taco	        |   安装某个依赖，并且默认保存到package.      |
|   npm uninstall taco —save	|   yarn remove taco	    |   移除某个依赖项目                        |
|   npm install taco —save-dev	|   yarn add taco —dev	    |   安装某个开发时依赖项目                     |
|   npm update taco —save	    |   yarn upgrade taco	    |   更新某个依赖项目                            |
|   npm install taco --global	|   yarn global add taco	|   安装某个全局依赖项目                          |
|   npm publish/login/logout	|   yarn publish/login/logout	|   发布/登录/登出，一系列NPM Registry操作  |
|   npm run/test	            |   yarn run/test	        |   运行某个命令                              |










[全文完]