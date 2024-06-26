---
sidebar_position: 5
---

# 电商知识库
用户可以自己上传资料，来让应用能获取特定和个性化的回答。

## 创建知识库
首先，准备一份电子文档作为测试材料，这可以是任何非机密性的文件，比如公司的休假政策、销售脚本、产品说明等。举例来说，我们这里使用 “致命公司” 这款最近爆火的游戏说明文件进行演示。

import React from 'react';

export const DownloadButton = ({ url, label }) => {
  return (
    <a href={url} download className="button button--primary">
      {label}
    </a>
  );
};

<DownloadButton url="https://lazybox.oss-cn-shenzhen.aliyuncs.com/file/%E8%87%B4%E5%91%BD%E5%85%AC%E5%8F%B8.docx" label="下载测试文件" />


点击按钮下载测试文件

步骤一：首先，在 “懒人百宝箱” 中创建一个新的知识库。

![](https://image.quicktoolset.top/img202401111125124.png)

步骤二：接下来，需要向这个知识库中上传内容。上传内容有四种不同的模式可供选择：

* 手动输入：这种方式允许你手动输入问题和答案，这是最精准的方法。
* QA 拆分：通过选择一个文本文件，让 AI 自动根据内容生成问答对（比较慢）。
* 直接分段：选择文本文件后，系统会直接按照文件中的段落进行分割处理。
* CSV 导入：如果你有大量的问答数据，可以通过 CSV 文件批量导入。

在这个例子中，我们选择 “QA拆分” 模式，让 AI 自动生成问答对。这个过程中，如果 AI 生成的问答对质量不高，你可以在之后进行手动修改和优化。

![](https://image.quicktoolset.top/img202401111127555.png)

步骤三：完成文件上传后，系统会开始处理数据。你需要等待直到上传的文件状态变为“可用”，这意味着文件已被成功处理并且可以被用来回答问题。

![](https://image.quicktoolset.top/img202401111127113.png)

现在可以点进去查看生成的 QA 问答对：

![](https://image.quicktoolset.top/img202401111128331.png)

## 创建知识库应用
继续之前的步骤，我们已经在 “懒人百宝箱” 中创建并上传了内容到知识库。接下来是将知识库应用到实际的对话中。

步骤四：在 “懒人百宝箱” 中，点击「应用」按钮来创建一个新的应用。在创建应用的过程中，会出现四个预设的模板选项。在这里，我们选择「知识库 + 对话引导」模板，因为这个模板能结合我们刚刚创建的知识库来进行智能对话。

![](https://image.quicktoolset.top/img202401111130511.png)

步骤五：应用创建完成后，进入应用详情页面，在这里找到「知识库」模块。然后，将我们之前创建的知识库添加到这个应用中。

![](https://image.quicktoolset.top/img202401111131721.png)

步骤六：添加知识库之后，别忘了点击「保存并预览」按钮。这一步是非常重要的，因为它确保了我们的应用与知识库成功关联，从而使应用能够利用知识库中的内容进行对话。

![](https://image.quicktoolset.top/img202401111132706.png)

步骤七：一切设置完成后，我们就可以开始使用这个应用进行对话了。现在，你可以测试这个应用，看看它是如何利用我们上传的知识库内容来回答相关问题的。

![](https://image.quicktoolset.top/img202401111133161.png)

![](https://image.quicktoolset.top/img202401111134772.png)

通过这些步骤，我们成功地将“懒人百宝箱”中的知识库与一个对话应用关联起来，可以开始愉快地探索和使用它了。

## 在懒人客服中使用知识库
然后复制这个 API 的根地址

![](https://image.quicktoolset.top/img202406262347403.png)

再新建一个 Key 用于访问 API

![](https://image.quicktoolset.top/img202406262351723.png)

将它们粘贴到你的懒人客服的设置中

![](https://image.quicktoolset.top/img202406262352805.png)









