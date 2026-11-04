# Hyunggil Kwak · 可视化编辑台

本目录包含一个免费、无需账号的 GrapesJS 可视化网页编辑器。GrapesJS 也是 Silex 所采用的核心拖拽编辑技术。此编辑器用于修改已有 GitHub Pages 主页，**不需要注册 GitLab，也不会在页面中索要 GitHub 密码或令牌**。

## 进入编辑器

公开地址：<https://hyunggilkwak581-ship-it.github.io/hyunggilkwakpersonal/studio/>

建议使用桌面版 Chrome/Edge/Firefox，编辑器依赖浏览器联网加载 GrapesJS 的固定版本 JavaScript 与 CSS。

## 修改页面

1. 在中央选择组件并拖动；双击文字直接输入。
2. 左侧添加文字、图片、两栏布局、讲义条目、图录专题。
3. 选中组件，在右侧“样式”调字体、颜色、宽度、边距等；“图层”可调整元素顺序；“属性”可更换链接和图片地址。
4. 使用“桌面 / 手机”查看不同屏幕宽度。
5. 点击“保存草稿”；也可以“备份项目”下载 JSON 文件，以便换浏览器恢复。

## 发布到 GitHub Pages

**方法 A：复制和粘贴（无需编辑 HTML 代码本身）**

1. 编辑台点击“复制页面代码”。
2. 点击“GitHub 发布”。打开的是本仓库的 `index.html` 编辑页面。
3. 在编辑框中按 Ctrl+A，然后 Ctrl+V，点击 Commit changes。
4. GitHub Actions 自动发布，仍使用原有域名。

**方法 B：交给 ChatGPT 发布**

点击“下载网站文件”生成 `index.html`，把这个文件上传到聊天中并要求替换网站主页。助手可以通过已连接的 GitHub 权限提交文件。

**注意：** 本版本生成完整的静态首页，不再依赖 `content.js` 自动生成讲义/图录条目。发布后，请继续在可视化编辑台中更新页面内容。上传 PDF、PPT 或图片时，可以先把文件放在仓库的 `files/` 或 `images/` 目录，再在编辑器里填写相应网址。

## 数据和安全

- 任何人都可以打开可视化编辑器，但编辑器无法直接写入 GitHub。只有拥有仓库提交权限的人才能发布。
- 草稿自动保存于**当前浏览器**，清理浏览器数据可能使它丢失；重要修改请使用“备份项目”下载 JSON。
- 此功能不是官方 Silex 在线服务。Silex v3 免费在线版目前以 GitLab 保存/部署为主，还不能直接导入此 GitHub 仓库的现有 HTML 项目。
- 公开上传书画图像及图录时请先确认相关图片与文字的使用许可。

技术参考：
- <https://silex.me/>
- <https://grapesjs.com/docs/>

## 重新发布说明

当 GitHub Pages 使用 GitHub Actions 作为 Source 时，即使之前点击了 Unpublish site，也不需要删除仓库或重新创建 Pages。向 `main` 提交一次更新便会触发 `.github/workflows/publish.yml`，该工作流运行成功后网站重新上线。若 GitHub 提示存在运行中的旧部署，先检查 Actions 页的运行记录，不要重复无意义的提交。
