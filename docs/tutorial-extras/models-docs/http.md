---
title: HTTP 网络请求模块
date: 2024-01-18 11:24:41
tags: []
categories: []
updated: 2024-01-18 11:24:41
cover: https://image.alsritter.icu/img/202203022250694.jpg
---

因为 LLM 本身是不包含网络请求能力的，所以如果需要网络请求的话，需要引入网络请求模块，HTTP 模块会向对应的地址发送一个 POST/GET 请求，携带部分系统参数及自定义参数，并接收一个 JSON 响应值，字段也是自定义。

* 你还可以通过 JSON 传入自定义的请求头。
* POST 请求中，数据会被放置在 body 中。
* GET 请求中，数据会被放置在 query 中。
* 在出入参数中，你都可以通过 xxx.xxx 来代表嵌套的对象。

除此之外，系统预制了一些参数（这些参数）：

* appId: 应用的ID
* chatId: 当前对话的ID，测试模式下不存在。
* responseChatItemId: 当前对话中，响应的消息ID，测试模式下不存在。
* variables: 当前对话的全局变量。
* data: 自定义传递的参数。


### 一个简单的例子
为了示范，这里选择 [开源的工具接口](https://api.vvhan.com/) 的知乎热搜接口

```
https://api.vvhan.com/api/hotlist?type=zhihuHot
```

接口的响应如下所示：

```json
{
    "success": true,
    "title": "知乎热榜",
    "subtitle": "热度",
    "update_time": "2024-01-15 12:56:03",
    "data": [
        {
            "index": 1,
            "title": "美英对也门胡塞武装目标发动袭击，是美国自2016年以来首次对胡塞武装发起袭击，释放了哪些信号？",
            "desc": ".....",
            "pic": "https://picx.zhimg.com/80/v2-b3d75780043ebd9e97e928922f3143e0_1440w.webp?source=1def8aca",
            "hot": "1171万热度",
            "url": "https://www.zhihu.com/question/639169153",
            "mobilUrl": "https://www.zhihu.com/question/639169153"
        },
        {
            "index": 2,
            "title": "「早教第一股」美吉姆深圳门店近日全部停业，有家长还剩近2万元课时费，哪些信息值得关注？",
            "desc": ".....",
            "pic": "https://picx.zhimg.com/80/v2-0a0b941ca4fb03379b0b964abf9ace46_1440w.webp?source=1def8aca",
            "hot": "802万热度",
            "url": "https://www.zhihu.com/question/639492194",
            "mobilUrl": "https://www.zhihu.com/question/639492194"
        },
        // .....
    ]
}
```

只需要简单的几步就可以完成网络请求的操作

![](https://image.alsritter.icu/img202401151433893.png)

然后设置这个模块的输出参数，因为这里的响应是数组，所以我们需要设置一个数组的参数 `data.0.desc` 这样就可以获取到第一个元素的描述了

![](https://image.alsritter.icu/img202401151553034.png)


### 如果响应是个数组
假设我们的响应是一个数组

```json
{
  "users": [
    { "name": "Alice", "age": 30 },
    { "name": "Bob", "age": 25 }
  ]
}
```

那么这里可以通过下面这种方式访问到（把对象打平成 key-value）：

```json
{
  "users.0.name": "Alice",
  "users.0.age": 30,
  "users.1.name": "Bob",
  "users.1.age": 25
}
```












