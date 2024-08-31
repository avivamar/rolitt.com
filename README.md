# Next JS 14+、Tailwind CSS 3.4 和 TypeScript 的样板和启动器


🚀 Next.js 的样板和启动器，支持 App Router，Tailwind CSS 和 TypeScript ⚡️ 以开发者体验为先：Next.js，TypeScript，ESLint，Prettier，Husky，Lint-Staged，Vitest（替代 Jest），Testing Library，Commitlint，VSCode，PostCSS，Tailwind CSS，[Clerk](https://go.clerk.com/zGlzydF) 认证，DrizzleORM 数据库（PostgreSQL，SQLite 和 MySQL），[Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) 错误监控，Pino.js 日志记录和日志管理，监控即代码，Storybook，多语言（i18n）等。准备好了 Next.js 15。

克隆此项目并使用它创建您自己的 SaaS。您可以在 [SaaS Boilerplate](https://react-saas.com) 上查看实时演示。


### 特点

开发者体验优先，代码结构极其灵活，只保留您需要的：

- ⚡ [Next.js](https://nextjs.org) 支持 App Router
- 🔥 类型检查 [TypeScript](https://www.typescriptlang.org)
- 💎 集成 [Tailwind CSS](https://tailwindcss.com) 和 Shadcn UI
- ✅ TypeScript 和 React 18 的严格模式
- 🔒 [Clerk](https://go.clerk.com/zGlzydF) 认证：注册，登录，退出，忘记密码，重置密码等。
- 👤 无密码认证：Magic Links，多因素认证（MFA），社交认证（Google，Facebook，Twitter，GitHub，Apple 等），Passkeys 无密码登录，用户模拟
- 👥 多租户和团队支持：创建，切换，更新组织和邀请团队成员
- 📝 基于角色的访问控制和权限
- 👤 多因素认证（MFA），社交认证（Google，Facebook，Twitter，GitHub，Apple 等），用户模拟
- 📦 与 DrizzleORM 的类型安全 ORM，兼容 PostgreSQL，SQLite 和 MySQL
- 🌐 多语言（i18n）与 [next-intl](https://next-intl-docs.vercel.app/) 和 [Crowdin](https://l.crowdin.com/next-js) 
- ♻️ 使用 T3 Env 的类型安全环境变量
- ⌨️ 使用 React Hook Form 的表单
- 🔴 使用 Zod 的验证库
- 📏 使用 [ESLint](https://eslint.org) 的 Linter（默认 NextJS，NextJS Core Web Vitals，Tailwind CSS 和 Airbnb 配置）
- 💖 使用 [Prettier](https://prettier.io) 的代码格式化器
- 🦊 使用 Husky 进行 Git 钩子
- 🚫 使用 Lint-staged 在 Git 暂存文件上运行 linters
- 🚓 使用 Commitlint 对 git 提交进行 Lint
- 📓 使用 Commitizen 编写符合标准的提交消息
- 🦺 使用 Vitest 和 React Testing Library 进行单元测试
- 🧪 使用 Playwright 进行集成和 E2E 测试
- 👷 使用 GitHub Actions 在拉取请求上运行测试
- 🎉 使用 Semantic Release 自动生成自动更新日志
- 🔍 使用 Percy 进行可视化测试（可选）
- 💡 使用 `@` 前缀进行绝对导入
- 🗂 VSCode 配置：调试，设置，任务和扩展
- 🤖 SEO 元数据，JSON-LD 和 Open Graph 标签
- 🗺️ Sitemap.xml 和 robots.txt
- ⌘ 使用 Drizzle Studio 进行数据库探索和使用 Drizzle Kit 进行 CLI 迁移工具
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 包含一个免费的极简主题
- 💯 最大化 lighthouse 分数

内置功能来自 Next.js：

- ☕ 压缩 HTML 和 CSS
- 💨 实时重新加载
- ✅ 缓存破坏

### 哲学

- 没有任何东西对您隐藏，因此您有自由进行必要的调整，以适应您的需求和偏好。
- 依赖项每月更新一次
- 易于定制
- 最小代码
- SEO 友好
- 🚀 适用于生产

### 要求

- Node.js 20+ 和 npm

### 入门

在本地环境上运行以下命令：

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

您需要知道的是，所有依赖项每月更新一次。

然后，您可以通过执行以下命令在开发模式下本地运行项目，实时重新加载：

```shell
npm run dev
```

使用您喜欢的浏览器打开 http://localhost:3000 查看您的项目。

### 设置认证

在 [Clerk.com](https://go.clerk.com/zGlzydF) 创建 Clerk 账户，并在 Clerk Dashboard 中创建一个新应用程序。然后，将 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` 和 `CLERK_SECRET_KEY` 复制到 `.env.local` 文件中（不由 Git 跽追踪）：

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

现在，您已经具有了一个完全工作的 Next.js 认证系统：注册，登录，退出，忘记密码，重置密码，更新个人资料，更新密码，更新电子邮件，删除帐户等。

### 设置远程数据库

该项目使用 DrizzleORM，一种与 PostgreSQL，SQLite 和 MySQL 数据库兼容的类型安全 ORM。默认情况下，该项目已设置为与 PostgreSQL 无缝工作，您可以轻松选择任何 PostgreSQL 数据库提供商。

### 设置翻译（i18n）

对于翻译，该项目使用 `next-intl` 结合 [Crowdin](https://l.crowdin.com/next-js)。作为开发者，您只需要关注默认语言的英语版本。其他语言将由 Crowdin 自动生成和处理。您可以使用 Crowdin 与翻译团队协作，或者使用机器翻译自行翻译消息。

要设置翻译（i18n），请在 [Crowdin.com](https://l.crowdin.com/next-js) 创建一个帐户，并创建一个新项目。在新创建的项目中，您将能够找到项目 ID。您还需要创建一个新的个人访问令牌，方法是转到帐户设置 > API。然后，在您的 GitHub Actions 中，您需要定义以下环境变量 `CROWDIN_PROJECT_ID` 和 `CROWDIN_PERSONAL_TOKEN`。

在定义了 GitHub Actions 中的环境变量后，每次您将新提交推送到 `main` 分支时，您的本地化文件将与 Crowdin 同步。

### 项目结构

```shell
.
├── README.md                       # README 文件
├── .github                         # GitHub 文件夹
├── .husky                          # Husky 配置
├── .storybook                      # Storybook 文件夹
├── .vscode                         # VSCode 配置
├── migrations                      # 数据库迁移
├── public                          # 公共资产文件夹
├── scripts                         # 脚本文件夹
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # 可重用组件
│   ├── features                    # 特定于功能的组件
│   ├── libs                        # 第三方库配置
│   ├── locales                     # 本地化文件夹（i18n 消息）
│   ├── models                      # 数据库模型
│   ├── styles                      # 样式文件夹
│   ├── templates                   # 模板文件夹
│   ├── types                       # 类型定义
│   └── utils                       # 实用程序文件夹
├── tests
│   └── e2e                         # E2E 测试，也包括监控即代码
├── tailwind.config.js              # Tailwind CSS 配置
└── tsconfig.json                   # TypeScript 配置
```

### 自定义

您可以通过在整个项目中使用 `FIXME:` 进行快速定制来轻松配置 Next.js SaaS Boilerplate。以下是一些最重要的文件进行定制：

- `public/apple-touch-icon.png`，`public/favicon.ico`，`public/favicon-16x16.png` 和 `public/favicon-32x32.png`：您的网站图标，您可以从 https://favicon.io/favicon-converter/ 生成
- `src/utils/AppConfig.ts`：配置文件
- `src/templates/BaseTemplate.tsx`：默认主题
- `next.config.mjs`：Next.js 配置
- `.env`：默认环境变量

如果需要进一步定制，您可以访问整个代码源。提供的代码只是您开始项目的示例。天空是极限 🚀。

### 提交消息格式

该项目强制执行 [Conventional Commits](https://www.conventionalcommits.org/) 规范。这意味着您的所有提交消息必须按照规范格式化。为了帮助您编写提交消息，该项目使用 [Commitizen](https://github.com/commitizen/cz-cli)，一个交互式 CLI，可指导您完成提交过程。要使用它，请运行以下命令：

```shell
npm run commit
```

使用 Conventional Commits 的好处之一是，它允许我们自动生成 `CHANGELOG` 文件。它还允许我们根据包含在发布中的提交类型自动确定下一个版本号。

### 测试

所有单元测试都位于源代码内的相同目录中。因此，更容易找到它们。该项目使用 Vitest 和 React Testing Library 进行单元测试。您可以使用以下命令运行测试：

```shell
npm run test
```

### 集成和 E2E 测试

该项目使用 Playwright 进行集成和 E2E 测试。您可以使用以下命令运行测试：

```shell
npx playwright install # 仅在新环境中的第一次运行
npm run test:e2e
```

### 启用 Edge 运行时（可选）

App Router 文件夹与 Edge 运行时兼容。您可以通过在 `src/app/layouts.tsx` 中添加以下行来启用它：

```tsx
export const runtime = 'edge';
```

您需要知道的是，数据库迁移与 Edge 运行时不兼容。因此，您需要在 `src/libs/DB.ts` 中禁用自动迁移：

```tsx
await migrate(db, { migrationsFolder: './migrations' });
```

在禁用它后，您需要手动运行迁移命令：

```shell
npm run db:migrate
```

每次您想要更新数据库架构时，您也需要运行该命令。

### 部署到生产

在构建过程中，数据库迁移会自动执行。因此，您无需手动运行迁移。但是，在您的环境变量中，需要定义 `DATABASE_URL`。

然后，您可以使用以下命令生成样板的生产构建：

```shell
$ npm run build
```

它会生成一个优化的样板生产构建。要测试生成的构建，您可以运行：

```shell
$ npm run start
```

它会在本地启动一个带有生产构建的本地服务器。然后，您现在可以使用您喜欢的浏览器打开 http://localhost:3000 查看项目。

### 错误监控

该项目使用 [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) 监控错误。对于开发环境，您无需做任何操作：NextJS SaaS Boilerplate 已经配置为使用 Sentry 和 Spotlight（Sentry for Development）。所有错误将自动发送到您的本地 Spotlight 实例。因此，您可以在本地尝试 Sentry 体验。

该项目使用 [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) 来监控错误。对于开发环境，您无需做任何操作：NextJS SaaS Boilerplate 已经配置为使用 Sentry 和 Spotlight（Sentry for Development）。所有错误将自动发送到您的本地 Spotlight 实例。因此，您可以在本地尝试 Sentry 体验。

对于生产环境，您需要创建一个 Sentry 账户并创建一个新项目。然后，在 `next.config.mjs` 中，您需要更新 `withSentryConfig` 函数中的 `org` 和 `project` 属性。您还需要在 `sentry.client.config.ts`, `sentry.edge.config.ts` 和 `sentry.server.config.ts` 中添加您的 Sentry DSN。

### 代码覆盖率

NextJS Boilerplate 依赖于 [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) 进行代码覆盖率报告解决方案。要使用 Codecov，创建一个 Codecov 账户并连接到您的 GitHub 账户。在您的 Codecov 仪表盘上，应该显示您仓库的列表。选择您要为其启用 Codecov 的仓库，并复制令牌。然后，在您的 GitHub Actions 中，您需要定义 `CODECOV_TOKEN` 环境变量，并粘贴您复制的令牌。

确保将 `CODECOV_TOKEN` 作为 GitHub Actions 秘密，不要直接将其粘贴到您的源代码中。

### 日志记录

该项目使用 Pino.js 进行日志记录。默认情况下，对于开发环境，日志将显示在控制台中。

对于生产环境，该项目已经与 [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) 集成，以使用 SQL 管理和查询您的日志。要使用 Better Stack，您需要创建一个 [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) 账户，并创建一个新源：去您的 Better Stack 日志仪表盘 > 源 > 连接源。然后，您需要为您的源命名，并选择 Node.js 作为平台。

创建源后，您将能够看到您的源令牌并复制它。然后，在您的环境变量中，您可以将令牌粘贴到 `LOGTAIL_SOURCE_TOKEN` 变量中。现在，所有您的日志将自动发送并被 Better Stack 接收。

### Checkly 监控

该项目使用 [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) 确保您的生产环境始终运行。定期，Checkly 运行以 `*.check.spec.ts` 结尾的测试，并在任何测试失败时通知您。此外，您有执行测试跨多个位置的灵活性，以确保您的应用程序在全球范围内可用。

要使用 Checkly，您必须首先在 [他们的网站](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) 上创建一个账户。创建账户后，您可以在 GitHub Actions 中设置 `CHECKLY_API_KEY` 环境变量，方法是生成 Checkly 仪表盘中的新 API 密钥。此外，您还需要定义 `CHECKLY_ACCOUNT_ID`，它也可以在 Checkly 仪表盘的用户设置 > 通用下找到。

要完成设置，确保更新 `checkly.config.ts` 文件，使用您自己的电子邮件地址和生产 URL。

### 有用的命令

#### 包分析器

SaaS Boilerplate 带有一个内置的包分析器。它可以用来分析您的 JavaScript 包的大小。要开始，运行以下命令：

```shell
npm run build-stats
```

运行命令后，它将自动打开一个新浏览器窗口，显示结果。

#### 数据库工作室

该项目已经与 Drizzle Studio 配置，以探索数据库。您可以运行以下命令来打开数据库工作室：

```shell
npm run db:studio
```

然后，您可以打开 https://local.drizzle.studio 使用您喜欢的浏览器来探索您的数据库。

### VSCode 信息（可选）

如果您是 VSCode 用户，您可以通过安装 `.vscode/extension.json` 中建议的扩展来与 VSCode 进行更好的集成。起始代码带来了与 VSCode 的无缝集成的设置。前端和后端调试体验的调试配置也已提供。

使用 VSCode 插件，您可以自动修复代码并显示错误。同样，对于测试，您可以安装 VSCode Vitest 扩展，以自动运行您的测试，并显示代码覆盖率在上下文中。

专业提示：如果您需要项目范围内的类型检查，可以使用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> 在 Mac 上运行构建。

### 贡献

每个人都欢迎贡献这个项目。请随时打开一个问题，如果您有问题或发现了错误。完全欢迎任何建议和改进建议。

### 许可

根据 MIT 许可证授权，版权所有 © 2024

请参阅 [LICENSE](LICENSE) 以获取更多信息。

