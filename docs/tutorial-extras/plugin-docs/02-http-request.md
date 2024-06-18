---
title: 网络请求
date: 2024-06-17 9:47:9
tags: []
categories: []
updated: 2024-06-17 9:47:9
cover: https://image.alsritter.icu/img/202203022251008.jpg
---

## 网络请求
如果需要用到网络请求，可以使用 `axios` 模块，如下所示：

```js
const axios = require('axios');
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

  // 过滤消息，获取最后一条文本消息
  const lastMessage = messages.filter(m => m.type === 'TEXT').pop();

  // 如果没有找到文本消息，返回一个默认回复
  if (!lastMessage) {
    return {
      content: '未找到文本消息',
      type: 'TEXT',
    };
  }

  try {
    // 使用 axios 进行 HTTP GET 请求
    const response = await axios.get('https://api.example.com/data', {
      params: {
        query: lastMessage.content,
      },
    });

    // 处理响应并返回回复
    return {
      content: `API响应: ${response.data}`,
      type: 'TEXT',
    };
  } catch (error) {
    console.error('请求出错:', error);

    // 返回错误回复
    return {
      content: '请求出错，请稍后再试',
      type: 'TEXT',
    };
  }
}
```