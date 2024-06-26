---
sidebar_position: 6
---

# 分享应用
当前用户创建好的应用，可以分享给其他用户使用。

## 创建应用
点击「应用」，然后选择之前创建的应用，进入应用详情页面。

![](https://image.quicktoolset.top/img202401181156999.png)

点击「外部使用」按钮，即可分享应用

![](https://image.quicktoolset.top/img202401181157966.png)

![](https://image.quicktoolset.top/img202401181157141.png)

目前分享应用的方式有以下几种：

### 免登录窗口

免登录窗口是一种简单的分享方式，可以直接将应用分享给其他用户使用，不需要登录平台。

![](https://image.quicktoolset.top/img202401181202738.png)

* QPM：每个 IP 每分钟最多可以访问的次数，超过这个次数后，这个 IP 会被限制访问。
* 最大金额：这个分享的应用最多可以消耗的金额，超过这个金额后，该应用会被限制访问。（-1 表示不做限制）
* 过期时间：这个分享的应用的过期时间，超过这个时间后，该应用会被限制访问。（默认没有过期时间）
* 返回详情：会返回应用调用的详细信息，包括请求和返回的内容。（对外分享一般不建议开启）

创建后，点击右边的按钮后，再点击「使用」，会允许你选择分享的类型，目前支持的分享类型有：

* 链接：用户打开这个链接后，会直接进入到应用的对话界面。
* iframe：用户可以将这个 iframe 嵌入到自己的网站中，这样用户就可以在自己的网站中使用这个应用了。
* 侧边栏对话框：用户可以将这个侧边栏嵌入到自己的网站中，可以作为 AI 客服使用。

![](https://image.quicktoolset.top/img202401181207356.png)

侧边栏对话框的效果如下（再次点击可以收起）：

![](https://image.quicktoolset.top/img202401181217540.png)

### API 访问
主要面向开发者，可以通过 API 访问应用，适用于内容各种后台内部系统集成。

![](https://image.quicktoolset.top/img202401181218649.png)

这里使用和 OpenAI 的 API 一致的方式来访问应用，具体可以参考 [OpenAI 的 API 文档](https://platform.openai.com/docs/api-reference/chat/create)。

## 查看使用日志
![](https://image.quicktoolset.top/img202401181220898.png)

点击后可以查看对话日志，包括请求和返回的内容。

![](https://image.quicktoolset.top/img202401181220264.png)

## 使用数据统计
点击「使用统计」，可以查看应用的使用情况。

![](https://image.quicktoolset.top/img202401181222292.png)













