---
title: 千牛商品识别
date: 2024-06-17 9:49:16
tags: []
categories: []
updated: 2024-06-17 9:49:16
cover: https://image.alsritter.icu/img/202203022251008.jpg
---

## 千牛商品识别
千牛可以携带商品信息，插件可以通过 `ctx.get('CTX_CURRENT_GOODS_ID')` 获取当前商品 ID

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
  const goodsId = ctx.get('CTX_CURRENT_GOODS_ID');
  const goodsName = ctx.get('CTX_CURRENT_GOODS');

  // 取得用户最后一条消息
  const lastMessage = messages[messages.length - 1];

  // 构建一个消息
  const msg = {
    sender: 'SYSTEM',
    role: 'OTHER',
    content: `当前客户询问的商品 ID：${goodsId}，商品名称：${goodsName}, 当前用户最后一条消息：${lastMessage.content}`,
    type: 'TEXT',
  };

  // 替换用户的这条消息
  messages[messages.length - 1] = msg;

  return await rp.getDefaultReply(cfg, ctx, messages);
}
```