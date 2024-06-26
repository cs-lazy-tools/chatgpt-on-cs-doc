import React from 'react';
import Layout from '@theme/Layout';
import ReactMarkdown from 'react-markdown';

// Markdown 内容
const markdown = `
## 联系客服
任何问题或建议都可以联系我们，扫码添加客服微信，期待您的反馈：

![](https://image.quicktoolset.top/img202405181639301.png)

或者扫码进 QQ 群：

![](https://image.quicktoolset.top/img202406240045121.png)

## 关于我们
倾力打造的懒人客服平台，致力于向企业和开发者提供全方位的AI应用解决方案。我们的目标是帮助每一家企业轻松创建属于自己的数字化员工，同时让每位开发者和用户都能获得个性化的数字代理。凭借在众多垂直行业中积累的丰富AI应用实施经验，懒人客服平台诚邀各界行业伙伴加入，共同探索AI技术的无限可能。
`;

const ContactPage: React.FC = () => {
  return (
    <Layout title="联系我们">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
