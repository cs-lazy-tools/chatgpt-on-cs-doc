---
title: 关键词过滤
date: 2024-06-17 9:47:9
tags: []
categories: []
updated: 2024-06-17 9:47:9
cover: https://image.quicktoolset.top/img/202203022251008.jpg
---

## 关键词过滤示例

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

  // 定义关键词列表
  const keywords = ['关键词1', '关键词2', '关键词3'];

  // 检查消息内容是否包含关键词
  const containsKeyword = keywords.some(keyword => lastMessage.content.includes(keyword));

  // 如果包含关键词，返回提示信息
  if (containsKeyword) {
    return {
      content: '您的消息包含敏感词，请修改后再试。',
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


## 字符串替换示例

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

    // 字符串替换映射
    const replacements = {
      '你': '您',
      '你好': '您好',
      '请问': '请',
      '帮忙': '帮助',
      '谢谢': '感谢'
    };

    let replyContent = `API响应: ${response.data}`;

    // 进行字符串替换
    for (const [key, value] of Object.entries(replacements)) {
      replyContent = replyContent.replace(new RegExp(key, 'g'), value);
    }

    // 返回处理后的回复
    return {
      content: replyContent,
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