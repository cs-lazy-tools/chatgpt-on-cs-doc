---
title: 内置的模块
date: 2024-01-18 11:23:59
tags: []
categories: []
updated: 2024-01-18 11:23:59
cover: https://image.quicktoolset.top/img/202203022250694.jpg
---

# 内置的模块
当前插件系统主要内置以下几个模块

```js
fs    // 文件系统
path  // 路径
axios // HTTP 请求
os    // 操作系统
url   // URL
crypto // 加密
config_srv // 配置服务
reply_srv // 回复服务
```

如果要在插件中使用这些模块，如下所示：

```js
const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function main(ctx, messages) {
  const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
  const res = await axios.get('https://api.github.com/users/alsritter');
  console.log(res.data);
  return {
    content: '你好这是一个测试插件',
    type: 'TEXT',
  };
}
```

这里只重点介绍一下 `config_srv` 和 `reply_srv` 模块。

## 配置服务模块
默认代码，我们可以看到 `config_srv` 模块的使用方法如下：

```js
const cc = require('config_srv');
const rp = require('reply_srv');

/**
 * 插件主函数
 * @param {AppContext} ctx - 上下文信息
 * @param {Message[]} messages - 消息数组
 * @returns {Reply} 插件执行结果
 */
async function main(ctx, messages) {
  const cfg = await cc.get(ctx);
  return await rp.getDefaultReply(cfg, ctx, messages);
}
```

其中这个 cfg 的结构如下：

```js
export class Config extends Model {
    id: number; // 配置 ID
    extract_phone: boolean; // 是否提取手机号
    extract_product: boolean; // 是否提取商品
    save_path: string; // 保存路径
    reply_speed: number; // 回复速度
    reply_random_speed: number; // 随机回复速度
    context_count: number; // 上下文数量
    wait_humans_time: number; // 等待人工客服时间
    default_reply: string; // 默认回复
    base_url: string; // 基础 URL
    key: string; // 密钥
    llm_type: string; // LLM 类型
    model: string; // 模型
    activation_code: string; // 激活码
    version: string; // 版本
    has_paused: boolean; // 是否暂停
    has_keyword_match: boolean; // 是否关键词匹配
    has_use_gpt: boolean; // 是否使用 GPT
    has_mouse_close: boolean; // 鼠标移动时是否自动关闭
}
```

上面的代码中，我们通过 `cc.get(ctx)` 获取了当前的配置信息，这里的 ctx 里面携带了当前实例的信息，它会自动取得当前实例的配置信息。


## 回复服务模块









