---
slug: /
sidebar_position: 1
---

# 懒人客服是什么？
本项目是基于大模型的智能对话客服工具，支持多平台接入，可选择 GPT3.5/GPT4.0/[懒人百宝箱](https://chat.lazaytools.top/)/FastGPT/DifyAI/通义千问/文心一言 等平台大模型，能处理文本、语音和图片，通过插件访问操作系统和互联网等外部资源，支持基于自有知识库定制企业 AI 应用.

* [GitHub] https://github.com/cs-lazy-tools/ChatGPT-On-CS
* [Gitee] https://gitee.com/alsritter/ChatGPT-On-CS (国内用户推荐)

下面视频简单的介绍了一下本项目的主要功能和使用方法，详细的使用方法请查看[文档](/docs/intro.md)。

export const MyIframe = () => (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <iframe 
    src="//player.bilibili.com/player.html?isOutside=true&aid=1351547477&bvid=BV1qz421Q73S&cid=1464452528&p=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true"
    style={{ width: '80%', height: '80%' }}
  ></iframe>
</div>
);

<MyIframe />

## 主要功能
- [x] 多平台支持，并且未来将不断扩展支持更多社交媒体平台.
- [x] 预设回复内容：允许用户设置自定义回复，以应对常见问题，提高回复效率.
- [x] 接入ChatGPT接口，根据客户的咨询内容智能生成回复，适用于处理复杂或者个性化的客户咨询.
- [x] 发送图片和二进制文件：支持发送图片等二进制文件，满足多样化的客户服务需求.
- [x] 知识库： 通过上传知识库文件自定义专属机器人，可作为数字分身、智能客服、私域助手使用.
- [x] 各个平台独立的插件系统，支持插件访问操作系统和互联网等外部资源，支持基于自有知识库定制企业 AI 应用.
