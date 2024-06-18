---
sidebar_position: 1
---

# 构建本地环境
- [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
- [Node.js v18.x](https://nodejs.org/en) (不推荐最新的，可能有兼容问题)
- [pnpm](https://pnpm.io/) 版本 8.x.x
- Git

## 安装 Backend 文件
这里暂时不提供独立的 backend 服务，你可以安装懒人百宝箱后，将 assets/backend 目录下的文件解压到你的项目目录 assets/backend 目录下

然后修改下面这个文件的

```
src\main\system\backend.ts
```

把这块内容注释掉

```js
if (process.env.NODE_ENV === 'development') {
  this.port = 9999;
  return;
}
```

然后启动时会使用本地的 backend 服务，然后为它分配一个端口，以便启动服务

## 安装依赖
确定本地 Nodejs 环境没有问题后

先到 `package.json` 文件中删掉这行

```json
"postinstall": "ts-node .erb/scripts/check-native-dep.js && electron-builder install-app-deps && pnpm run build:dll",
```

然后运行以下命令，安装依赖

```bash
npm i -g pnpm
pnpm i


# 然后还需要到 app 目录下安装依赖
cd release/app
# 注意这里使用但是 npm 安装
# 因为下面会用到 node-gyp 编译，如果使用 pnpm 安装会导致编译时 link 出现问题
npm i
```

然后把上面的 `postinstall` 行加回去，然后运行以下命令，安装依赖，这是因为 pnpm 会干扰到 npm 的包管理


就可以使用 vscode 的 Debug 模式启动项目

下面是我的 vscode 配置文件，可以参考一下

```JSON
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Electron: Main",
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "start"],
      "env": {
        "MAIN_ARGS": "--inspect=5858 --remote-debugging-port=9223"
      }
    },
    {
      "name": "Electron: Renderer",
      "type": "chrome",
      "request": "attach",
      "port": 9223,
      "webRoot": "${workspaceFolder}",
      "timeout": 15000
    }
  ],
  "compounds": [
    {
      "name": "Electron: All",
      "configurations": ["Electron: Main", "Electron: Renderer"]
    }
  ]
}
```


## 构建 Electron 的 Sqlite3
注意 Electron 有个 Sqlite3 的坑，需要重新编译，可以参考以下命令

```bash
pnpm --prefix=node_modules/sqlite3 run rebuild

# https://registry.npmmirror.com
# 使用 Visual Studio 社区中的 Desktop development with C++ 组件安装 C++ 工具集

nvm use 18

npm install --global windows-build-tools

pnpm config set msvs_version=2022
npm config set msvs_version 2022

# 删除node_modules目录和package-lock.json文件：

rm -rf node_modules
rm package-lock.json

# 重新编译sqlite3模块：

npm i -g node-gyp

# 项目根目录下执行
pnpm i -D node-addon-api@7.0.0

cd node_modules/sqlite3


node-gyp rebuild --verbose
# 或者执行
node-gyp rebuild --target=26.2.1 --arch=x64 --target_platform=win32 --dist-url=https://electronjs.org/headers --module_name=node_sqlite3 --module_path=../lib/binding/electron-v26.2.1-win32-x64

# 注意检查一下报错，可能需要在下面路径创建 node-addon-api（复制过去）

pnpm i -D electron-builder
pnpm run postinstall
```

注意，关于这个依赖是有比较多的问题，建议自己去搜索一下，这里只是提供一个参考，不能保证每个人的环境都能打包成功

