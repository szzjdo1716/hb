window.GITHUB_DATA = {
  categories: [
    { slug: "setup", name_en: "Setup & identity", name_zh: "安装与身份" },
    { slug: "local", name_en: "Local repo", name_zh: "本机仓库" },
    { slug: "remote", name_en: "Remote & push", name_zh: "远程与推送" },
    { slug: "branch", name_en: "Branches", name_zh: "分支" },
    { slug: "github-web", name_en: "GitHub website", name_zh: "GitHub 网站" },
    { slug: "pages", name_en: "GitHub Pages", name_zh: "网站发布" },
    { slug: "ipad", name_en: "iPad & cloud edit", name_zh: "iPad 与云端编辑" },
    { slug: "safety", name_en: "Safety", name_zh: "安全" },
  ],
  commands: [
    {
      name: "git config",
      category: "setup",
      summary_en: "Sets your commit author name and email. This is a label on commits, not your GitHub login.",
      summary_zh: "设置提交时显示的作者名和邮箱。这是提交上的署名，不是 GitHub 登录名。",
      example: "git config --global user.name \"YOUR_NAME\"\ngit config --global user.email \"you@example.com\"",
      options: [
        { flag: "--global", meaning_en: "Apply to all repos on this computer", meaning_zh: "对本机所有仓库生效" },
        { flag: "user.name", meaning_en: "Author name on commits", meaning_zh: "提交上的作者名" },
        { flag: "user.email", meaning_en: "Author email on commits", meaning_zh: "提交上的作者邮箱" },
        { flag: "--list", meaning_en: "Show current config", meaning_zh: "查看当前配置" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-config" },
      ],
    },
    {
      name: "gh",
      category: "setup",
      summary_en: "GitHub’s official command-line tool. Install it, then sign in with gh auth login.",
      summary_zh: "GitHub 官方命令行工具。装好后用 gh auth login 登录。",
      example: "gh --version",
      options: [
        { flag: "gh --version", meaning_en: "Check that gh is installed", meaning_zh: "确认已安装 gh" },
        { flag: "gh help", meaning_en: "List common gh commands", meaning_zh: "列出常用 gh 命令" },
      ],
      links: [
        { label: "cli.github.com", url: "https://cli.github.com/manual/" },
      ],
    },
    {
      name: "gh auth login",
      category: "setup",
      summary_en: "Signs the GitHub CLI into your account. Prefer HTTPS and the browser or token flow.",
      summary_zh: "让 GitHub CLI 登录你的账号。建议选 HTTPS，并用浏览器或令牌完成验证。",
      example: "gh auth login",
      options: [
        { flag: "gh auth login", meaning_en: "Start the sign-in wizard", meaning_zh: "开始登录向导" },
        { flag: "GitHub.com", meaning_en: "Choose github.com, not Enterprise, unless you use that", meaning_zh: "选 github.com（除非你用企业版）" },
        { flag: "HTTPS", meaning_en: "Use HTTPS for git remotes", meaning_zh: "远程仓库用 HTTPS" },
      ],
      links: [
        { label: "gh auth login", url: "https://cli.github.com/manual/gh_auth_login" },
      ],
    },
    {
      name: "gh auth status",
      category: "setup",
      summary_en: "Shows whether gh is logged in and which account it will use.",
      summary_zh: "查看 gh 是否已登录，以及会用哪个账号。",
      example: "gh auth status",
      options: [
        { flag: "gh auth status", meaning_en: "Print login status", meaning_zh: "打印登录状态" },
      ],
      links: [
        { label: "gh auth status", url: "https://cli.github.com/manual/gh_auth_status" },
      ],
    },
    {
      name: "git init",
      category: "local",
      summary_en: "Creates a new git repository in the current folder. Run this once at the project root.",
      summary_zh: "在当前文件夹里新建 git 仓库。在项目根目录运行一次即可。",
      example: "git init",
      options: [
        { flag: "git init", meaning_en: "Start a repo here", meaning_zh: "在这里开始一个仓库" },
        { flag: "-b main", meaning_en: "Create with branch name main", meaning_zh: "初始分支名为 main" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-init" },
      ],
    },
    {
      name: "git status",
      category: "local",
      summary_en: "Shows changed, staged, and untracked files. Run this often before add or commit.",
      summary_zh: "显示改过、已暂存和未跟踪的文件。add 或 commit 之前多看一眼。",
      example: "git status",
      options: [
        { flag: "git status", meaning_en: "Full status", meaning_zh: "完整状态" },
        { flag: "-s", meaning_en: "Short status", meaning_zh: "简短状态" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-status" },
      ],
    },
    {
      name: "git add",
      category: "local",
      summary_en: "Stages files for the next commit. Only staged files go into git commit.",
      summary_zh: "把文件放进暂存区，下次 commit 才会记下它们。",
      example: "git add index.html app.js\ngit add .",
      options: [
        { flag: "git add FILE", meaning_en: "Stage one file", meaning_zh: "暂存一个文件" },
        { flag: "git add .", meaning_en: "Stage everything in this folder", meaning_zh: "暂存当前目录下的改动" },
        { flag: "-p", meaning_en: "Stage hunks interactively", meaning_zh: "一块一块选择暂存" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-add" },
      ],
    },
    {
      name: "git commit",
      category: "local",
      summary_en: "Records the staged snapshot with a message. This is a save point in history.",
      summary_zh: "把已暂存的内容记成一次提交，并写说明。这是历史上的一个保存点。",
      example: "git commit -m \"Describe this change\"",
      options: [
        { flag: "-m \"msg\"", meaning_en: "Commit message on the command line", meaning_zh: "在命令行写提交说明" },
        { flag: "--amend", meaning_en: "Fix the last commit (use before push)", meaning_zh: "改上一次提交（请在 push 前用）" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-commit" },
      ],
    },
    {
      name: "git diff",
      category: "local",
      summary_en: "Shows line-by-line changes. Unstaged by default; --staged shows what you added.",
      summary_zh: "按行显示改动。默认看未暂存的；--staged 看已经 add 的。",
      example: "git diff\ngit diff --staged",
      options: [
        { flag: "git diff", meaning_en: "Unstaged changes", meaning_zh: "未暂存的改动" },
        { flag: "--staged", meaning_en: "Changes already in the index", meaning_zh: "已暂存的改动" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-diff" },
      ],
    },
    {
      name: "git log",
      category: "local",
      summary_en: "Lists recent commits. Use this to see what you already saved.",
      summary_zh: "列出最近的提交。用来查看已经保存过什么。",
      example: "git log --oneline -10",
      options: [
        { flag: "--oneline", meaning_en: "One line per commit", meaning_zh: "每个提交一行" },
        { flag: "-n 10", meaning_en: "Show 10 commits", meaning_zh: "只看 10 条" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-log" },
      ],
    },
    {
      name: "git restore",
      category: "local",
      summary_en: "Discards unstaged edits in a file, putting the last committed version back.",
      summary_zh: "丢掉工作区里未暂存的修改，恢复成上次提交的样子。",
      example: "git restore app.js",
      options: [
        { flag: "git restore FILE", meaning_en: "Throw away unstaged edits in FILE", meaning_zh: "丢掉 FILE 里未暂存的修改" },
        { flag: "--staged FILE", meaning_en: "Unstage FILE, keep the edits", meaning_zh: "取消暂存，但保留修改" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-restore" },
      ],
    },
    {
      name: "git rm",
      category: "local",
      summary_en: "Removes a file from the folder and stages that deletion for commit.",
      summary_zh: "从文件夹删掉文件，并把这次删除放进暂存区。",
      example: "git rm old-notes.txt",
      options: [
        { flag: "git rm FILE", meaning_en: "Delete and stage", meaning_zh: "删除并暂存" },
        { flag: "--cached FILE", meaning_en: "Stop tracking, keep the file on disk", meaning_zh: "不再跟踪，但硬盘上的文件留下" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-rm" },
      ],
    },
    {
      name: "git clone",
      category: "remote",
      summary_en: "Copies a remote repository onto this computer, including history.",
      summary_zh: "把远程仓库连同历史一起复制到本机。",
      example: "git clone https://github.com/OWNER/REPO.git",
      options: [
        { flag: "git clone URL", meaning_en: "Clone into a new folder named REPO", meaning_zh: "克隆到名为 REPO 的新文件夹" },
        { flag: "git clone URL DIR", meaning_en: "Clone into folder DIR", meaning_zh: "克隆到文件夹 DIR" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-clone" },
      ],
    },
    {
      name: "git remote",
      category: "remote",
      summary_en: "Shows or edits nicknames for remote URLs. origin is the usual name for GitHub.",
      summary_zh: "查看或修改远程地址的昵称。GitHub 上通常叫 origin。",
      example: "git remote -v",
      options: [
        { flag: "-v", meaning_en: "Show fetch and push URLs", meaning_zh: "显示拉取和推送地址" },
        { flag: "add origin URL", meaning_en: "Name this GitHub repo origin", meaning_zh: "把这个 GitHub 仓库叫做 origin" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-remote" },
      ],
    },
    {
      name: "origin",
      category: "remote",
      summary_en: "The usual remote name for your GitHub repository. Push and pull talk to origin unless you say otherwise.",
      summary_zh: "指向 GitHub 仓库时最常用的远程名。不特别指定时，push 和 pull 都走 origin。",
      example: "git remote -v\ngit push origin main",
      options: [
        { flag: "origin", meaning_en: "Default remote nickname", meaning_zh: "默认远程昵称" },
        { flag: "git remote add origin URL", meaning_en: "Set origin for the first time", meaning_zh: "第一次设置 origin" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-remote" },
      ],
    },
    {
      name: "git fetch",
      category: "remote",
      summary_en: "Downloads new commits from the remote without changing your files yet.",
      summary_zh: "从远程下载新提交，但先不改你手头的文件。",
      example: "git fetch origin",
      options: [
        { flag: "git fetch", meaning_en: "Update remote-tracking branches", meaning_zh: "更新远程跟踪分支" },
        { flag: "origin", meaning_en: "Fetch from origin", meaning_zh: "从 origin 获取" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-fetch" },
      ],
    },
    {
      name: "git pull",
      category: "remote",
      summary_en: "Fetches and then merges (or rebases) remote changes into your current branch.",
      summary_zh: "先 fetch，再把远程改动合并进你当前分支。",
      example: "git pull origin main",
      options: [
        { flag: "git pull", meaning_en: "Update the current branch", meaning_zh: "更新当前分支" },
        { flag: "--ff-only", meaning_en: "Only pull if it can fast-forward", meaning_zh: "只能快进时才拉取" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-pull" },
      ],
    },
    {
      name: "git push",
      category: "remote",
      summary_en: "Uploads your commits to GitHub. After the first time, git push is often enough.",
      summary_zh: "把本地提交上传到 GitHub。设好上游之后，常常只要 git push。",
      example: "git push origin main",
      options: [
        { flag: "git push", meaning_en: "Push the current branch if upstream is set", meaning_zh: "已设上游时推送当前分支" },
        { flag: "origin main", meaning_en: "Push main to origin", meaning_zh: "把 main 推到 origin" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-push" },
      ],
    },
    {
      name: "git push -u",
      category: "remote",
      summary_en: "Pushes and remembers the upstream. Use this the first time you publish a branch.",
      summary_zh: "推送并记住上游。第一次发布某个分支时用。",
      example: "git push -u origin main",
      options: [
        { flag: "-u origin main", meaning_en: "Push main and set upstream to origin/main", meaning_zh: "推送 main，并把上游设为 origin/main" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-push" },
      ],
    },
    {
      name: "git branch",
      category: "branch",
      summary_en: "Lists branches, or creates a new one. The current branch is marked with *.",
      summary_zh: "列出分支，或新建分支。当前分支前面有 *。",
      example: "git branch\ngit branch -M main",
      options: [
        { flag: "git branch", meaning_en: "List local branches", meaning_zh: "列出本地分支" },
        { flag: "-M main", meaning_en: "Rename the current branch to main", meaning_zh: "把当前分支改名为 main" },
        { flag: "-d NAME", meaning_en: "Delete a merged branch", meaning_zh: "删除已合并的分支" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-branch" },
      ],
    },
    {
      name: "main",
      category: "branch",
      summary_en: "The default branch name on new GitHub repos. Your first push is usually origin main.",
      summary_zh: "新 GitHub 仓库的默认分支名。第一次推送通常是 origin main。",
      example: "git branch -M main\ngit push -u origin main",
      options: [
        { flag: "git branch -M main", meaning_en: "Use main as the branch name", meaning_zh: "把分支名改成 main" },
        { flag: "git push -u origin main", meaning_en: "Publish main", meaning_zh: "发布 main" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-branch" },
      ],
    },
    {
      name: "git switch",
      category: "branch",
      summary_en: "Switches to another branch. Prefer this over older git checkout for changing branches.",
      summary_zh: "切换到另一个分支。换分支请优先用它，而不是旧的 git checkout。",
      example: "git switch -c feature\ngit switch main",
      options: [
        { flag: "git switch NAME", meaning_en: "Move to branch NAME", meaning_zh: "切到分支 NAME" },
        { flag: "-c NAME", meaning_en: "Create NAME and switch to it", meaning_zh: "新建 NAME 并切过去" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-switch" },
      ],
    },
    {
      name: "git merge",
      category: "branch",
      summary_en: "Joins another branch into the branch you are on now.",
      summary_zh: "把另一个分支合并进你现在所在的分支。",
      example: "git switch main\ngit merge feature",
      options: [
        { flag: "git merge NAME", meaning_en: "Merge NAME into the current branch", meaning_zh: "把 NAME 合并进当前分支" },
        { flag: "--abort", meaning_en: "Cancel a merge in progress", meaning_zh: "取消正在进行的合并" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-merge" },
      ],
    },
    {
      name: "git stash",
      category: "branch",
      summary_en: "Temporarily shelves uncommitted work so you can switch branches cleanly.",
      summary_zh: "把还没提交的改动暂时收起来，方便干净地换分支。",
      example: "git stash\ngit stash pop",
      options: [
        { flag: "git stash", meaning_en: "Save uncommitted changes", meaning_zh: "收起未提交的改动" },
        { flag: "pop", meaning_en: "Restore the latest stash", meaning_zh: "恢复最近一次收起的改动" },
        { flag: "list", meaning_en: "Show stashes", meaning_zh: "列出收起的记录" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-stash" },
      ],
    },
    {
      name: "repository",
      category: "github-web",
      summary_en: "A GitHub project at owner/name. Private hides it; public is visible. The Code tab is the files; the Pages URL is the published site.",
      summary_zh: "GitHub 上的项目，地址是 所有者/名字。私有仓库外人看不到，公开仓库谁都能看。Code 标签是文件；Pages 网址才是发布后的网站。",
      example: "https://github.com/OWNER/REPO",
      options: [
        { flag: "owner/name", meaning_en: "Full repo id, e.g. szzjdo1716/hello-web", meaning_zh: "完整仓库名，例如 szzjdo1716/hello-web" },
        { flag: "private", meaning_en: "Only people you invite", meaning_zh: "只有你邀请的人能看" },
        { flag: "public", meaning_en: "Anyone can view", meaning_zh: "任何人都能查看" },
        { flag: "Code vs Pages", meaning_en: "Code is source; Pages is the live website", meaning_zh: "Code 是源码；Pages 是上线后的网站" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" },
      ],
    },
    {
      name: "README",
      category: "github-web",
      summary_en: "The README.md file GitHub shows on the repo home. Write what the project is and how to open it.",
      summary_zh: "GitHub 在仓库首页展示的 README.md。写清这是什么项目、怎么打开。",
      example: "echo \"# hello-web\" > README.md\ngit add README.md",
      options: [
        { flag: "README.md", meaning_en: "Markdown file at the repo root", meaning_zh: "仓库根目录的 Markdown 文件" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" },
      ],
    },
    {
      name: "Issues",
      category: "github-web",
      summary_en: "A list of tasks or bugs on GitHub. Useful even if you work alone, as a to-do on the repo.",
      summary_zh: "GitHub 上的任务或缺陷列表。一个人用也可以，当作仓库里的待办。",
      example: "https://github.com/OWNER/REPO/issues",
      options: [
        { flag: "New issue", meaning_en: "Open a titled note with a body", meaning_zh: "新建一条带标题和正文的记录" },
        { flag: "Close", meaning_en: "Mark the work as done", meaning_zh: "把这件事标成完成" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues" },
      ],
    },
    {
      name: "Pull Request",
      category: "github-web",
      summary_en: "A proposal to merge one branch into another, with discussion. You can still use PRs later even if you work alone today.",
      summary_zh: "提议把一个分支合并进另一个分支，并可讨论。现在即使一个人做，以后也可以用。",
      example: "https://github.com/OWNER/REPO/pulls",
      options: [
        { flag: "base", meaning_en: "Branch you merge into, often main", meaning_zh: "要合进去的分支，常常是 main" },
        { flag: "compare", meaning_en: "Branch with your new work", meaning_zh: "放新改动的分支" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" },
      ],
    },
    {
      name: "gh repo create",
      category: "github-web",
      summary_en: "Creates a GitHub repo from this folder and can push it. If the name already exists, add a remote and push instead.",
      summary_zh: "用当前文件夹在 GitHub 上建仓库，并可立刻推送。如果名字已经存在，改成添加 remote 再 push。",
      example: "gh repo create REPO --private --source=. --remote=origin --push",
      options: [
        { flag: "--private", meaning_en: "Create a private repo", meaning_zh: "建成私有仓库" },
        { flag: "--source=.", meaning_en: "Use the current folder", meaning_zh: "使用当前文件夹" },
        { flag: "--remote=origin", meaning_en: "Name the remote origin", meaning_zh: "远程名叫做 origin" },
        { flag: "--push", meaning_en: "Push after create", meaning_zh: "创建后立刻推送" },
        { flag: "name exists", meaning_en: "Then: git remote add origin URL && git push -u origin main", meaning_zh: "若已存在：git remote add origin URL && git push -u origin main" },
      ],
      links: [
        { label: "gh repo create", url: "https://cli.github.com/manual/gh_repo_create" },
      ],
    },
    {
      name: ".gitignore",
      category: "github-web",
      summary_en: "A file that lists paths git should not track, such as .env or node_modules.",
      summary_zh: "列出 git 不要跟踪的路径，例如 .env 或 node_modules。",
      example: "printf '%s\\n' '.env' 'node_modules/' >> .gitignore",
      options: [
        { flag: ".env", meaning_en: "Ignore env files with secrets", meaning_zh: "忽略含密钥的环境文件" },
        { flag: "node_modules/", meaning_en: "Ignore installed packages", meaning_zh: "忽略已安装的依赖目录" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/get-started/git-basics/ignoring-files" },
      ],
    },
    {
      name: "fork",
      category: "github-web",
      summary_en: "Your copy of someone else’s GitHub repo, under your account. Optional when you only maintain your own project.",
      summary_zh: "把别人的仓库复制到你的账号下。如果只维护自己的项目，可以先不用。",
      example: "https://github.com/OWNER/REPO/fork",
      options: [
        { flag: "Fork", meaning_en: "Button on the source repo", meaning_zh: "源仓库上的 Fork 按钮" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo" },
      ],
    },
    {
      name: "GitHub Pages",
      category: "pages",
      summary_en: "Hosts a website from this repo. Settings → Pages → Deploy from branch → main → / (root). After a push, wait 1–2 minutes, then hard refresh (Cmd+Shift+R). Live URL: https://USERNAME.github.io/REPO/",
      summary_zh: "用这个仓库发布网站。路径：Settings → Pages → Deploy from branch → main → /（根目录）。push 之后等 1–2 分钟，再强制刷新（Cmd+Shift+R）。网址形如 https://USERNAME.github.io/REPO/",
      example: "https://USERNAME.github.io/REPO/",
      options: [
        { flag: "Deploy from branch", meaning_en: "Publish the selected branch", meaning_zh: "发布所选分支" },
        { flag: "main / (root)", meaning_en: "Use the repo root as the site root", meaning_zh: "用仓库根目录当网站根目录" },
        { flag: "Cmd+Shift+R", meaning_en: "Hard refresh after a wait", meaning_zh: "等一会儿后强制刷新" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site" },
      ],
    },
    {
      name: "index.html",
      category: "pages",
      summary_en: "GitHub Pages serves index.html as the site home. Put the hub page at the repo root if that is what visitors should see first.",
      summary_zh: "GitHub Pages 把 index.html 当作网站首页。若希望访客先看到总览，就把总览页放在仓库根目录。",
      example: "index.html",
      options: [
        { flag: "repo root", meaning_en: "index.html next to linux.html and github.html", meaning_zh: "index.html 和 linux.html、github.html 放在一起" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site" },
      ],
    },
    {
      name: "git push pages",
      category: "pages",
      summary_en: "Publishing is just a normal git push to the branch Pages uses (usually main). The site rebuilds after GitHub receives the commit.",
      summary_zh: "发布网站就是把 Pages 使用的分支（通常是 main）正常 git push。GitHub 收到提交后会重新生成站点。",
      example: "git add -A\ngit commit -m \"Update site\"\ngit push origin main",
      options: [
        { flag: "git push origin main", meaning_en: "Send commits; Pages rebuilds", meaning_zh: "送出提交；Pages 会重建" },
        { flag: "wait 1–2 min", meaning_en: "Then hard-refresh the live URL", meaning_zh: "然后强制刷新线上地址" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site" },
      ],
    },
    {
      name: "hard refresh",
      category: "pages",
      summary_en: "After Pages updates, your browser may show an old copy. On a Mac, Cmd+Shift+R reloads without cache.",
      summary_zh: "Pages 更新后，浏览器可能还显示旧页面。Mac 上用 Cmd+Shift+R 可绕过缓存刷新。",
      example: "Cmd+Shift+R",
      options: [
        { flag: "Cmd+Shift+R", meaning_en: "Hard refresh in Safari or Chrome on Mac", meaning_zh: "Mac 上 Safari 或 Chrome 的强制刷新" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site" },
      ],
    },
    {
      name: "github.com",
      category: "ipad",
      summary_en: "The GitHub website. Browse the repo, files, commits, and Settings. Works well in iPad Safari.",
      summary_zh: "GitHub 网站。可浏览仓库、文件、提交和 Settings。iPad 上的 Safari 也能用。",
      example: "https://github.com/OWNER/REPO",
      options: [
        { flag: "Code", meaning_en: "Browse files", meaning_zh: "浏览文件" },
        { flag: "Commits", meaning_en: "History of saves", meaning_zh: "保存历史" },
        { flag: "Settings", meaning_en: "Pages, secrets, danger zone", meaning_zh: "Pages、密钥、危险操作区" },
      ],
      links: [
        { label: "github.com", url: "https://github.com" },
      ],
    },
    {
      name: "github.dev",
      category: "ipad",
      summary_en: "In-browser VS Code. On a repo page press . (period), or open https://github.dev/OWNER/REPO. Edit, commit, and push. This is the practical iPad path.",
      summary_zh: "浏览器里的 VS Code。在仓库页面按 .（句点），或打开 https://github.dev/OWNER/REPO。可编辑、提交、推送。这是 iPad 上最实用的改代码方式。",
      example: "https://github.dev/OWNER/REPO",
      options: [
        { flag: ".", meaning_en: "From github.com, press period to open the editor", meaning_zh: "在 github.com 上按句点打开编辑器" },
        { flag: "commit + push", meaning_en: "Save on GitHub from the web editor", meaning_zh: "在网页编辑器里提交并推送到 GitHub" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/codespaces/the-githubdev-web-based-editor" },
      ],
    },
    {
      name: "Codespaces",
      category: "ipad",
      summary_en: "Optional cloud virtual machine in the browser. It can cost money. You do not need it for this static site.",
      summary_zh: "可选的云端虚拟机，在浏览器里用。可能产生费用。做这个静态网站不必用它。",
      example: "https://github.com/codespaces",
      options: [
        { flag: "optional", meaning_en: "Not required for Pages or github.dev", meaning_zh: "Pages 和 github.dev 都不需要它" },
        { flag: "billing", meaning_en: "May use paid minutes", meaning_zh: "可能消耗付费时长" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/codespaces/overview" },
      ],
    },
    {
      name: "Grok Build CLI",
      category: "ipad",
      summary_en: "The grok command runs in a Mac or Linux terminal only. It is not available on iPad. On iPad, edit with github.dev or github.com; Pages updates after you commit.",
      summary_zh: "grok 命令只能在 Mac 或 Linux 终端里运行，iPad 上没有。在 iPad 上用 github.dev 或 github.com 编辑，提交后 Pages 会更新。",
      example: "grok --help",
      options: [
        { flag: "Mac/Linux", meaning_en: "Use grok in a real terminal", meaning_zh: "在真正的终端里使用 grok" },
        { flag: "iPad", meaning_en: "No grok CLI; use github.dev instead", meaning_zh: "没有 grok 命令行，改用 github.dev" },
      ],
      links: [
        { label: "github.dev editor", url: "https://docs.github.com/en/codespaces/the-githubdev-web-based-editor" },
      ],
    },
    {
      name: "iPad Safari",
      category: "ipad",
      summary_en: "Open the live Pages URL to study on iPad. You can add it to the Home Screen. You cannot run the grok CLI there.",
      summary_zh: "在 iPad 的 Safari 打开 Pages 网址就能学习。可以添加到主屏幕。那里不能运行 grok 命令行。",
      example: "https://USERNAME.github.io/REPO/",
      options: [
        { flag: "Share → Add to Home Screen", meaning_en: "Safari shortcut to the live site", meaning_zh: "Safari 把线上网站放到主屏幕" },
        { flag: "no grok CLI", meaning_en: "Edit on github.dev, not in grok", meaning_zh: "用 github.dev 改，不要指望 grok" },
      ],
      links: [
        { label: "GitHub Pages", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site" },
      ],
    },
    {
      name: "personal access token",
      category: "safety",
      summary_en: "A password-like string GitHub can give the CLI or git. Never put it in the repo. If it leaks, revoke it in GitHub settings.",
      summary_zh: "GitHub 发给 CLI 或 git 用的一串密钥。绝不要放进仓库。若泄露，到 GitHub 设置里立刻作废。",
      example: "# paste a token only into gh auth login or the OS keychain\n# never into a file in this repo",
      options: [
        { flag: "revoke", meaning_en: "GitHub → Settings → Developer settings → tokens", meaning_zh: "GitHub → Settings → Developer settings → tokens" },
        { flag: "HTTPS login", meaning_en: "Prefer gh auth login over pasting into scripts", meaning_zh: "优先用 gh auth login，不要写进脚本" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens" },
      ],
    },
    {
      name: "secrets",
      category: "safety",
      summary_en: "Private values such as API keys. Store them in GitHub Actions secrets or your machine, never in committed files.",
      summary_zh: "API 密钥这类私密值。放在 GitHub Actions secrets 或本机，不要提交进仓库。",
      example: "# GitHub → Settings → Secrets and variables → Actions",
      options: [
        { flag: "Actions secrets", meaning_en: "Available to workflows, not in git history", meaning_zh: "工作流能用，但不会进 git 历史" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions" },
      ],
    },
    {
      name: "never commit",
      category: "safety",
      summary_en: "Never commit tokens, passwords, or .env files. Put them in .gitignore. If one slipped in, revoke it and stop using that value.",
      summary_zh: "永远不要提交令牌、密码或 .env。把它们写进 .gitignore。如果已经进去了，先作废再停止使用。",
      example: "printf '%s\\n' '.env' '*.pem' >> .gitignore",
      options: [
        { flag: ".env", meaning_en: "Local secrets file — ignore it", meaning_zh: "本机密钥文件——忽略它" },
        { flag: "revoke first", meaning_en: "A leaked token is already unsafe", meaning_zh: "泄露的令牌已经不安全" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" },
      ],
    },
    {
      name: ".env",
      category: "safety",
      summary_en: "A local file for secrets. Add .env to .gitignore so git never tracks it.",
      summary_zh: "用来放密钥的本地文件。把 .env 写进 .gitignore，git 就不会跟踪它。",
      example: "echo '.env' >> .gitignore",
      options: [
        { flag: ".gitignore", meaning_en: "Must list .env before you commit", meaning_zh: "提交前必须把 .env 写进忽略列表" },
      ],
      links: [
        { label: "docs.github.com", url: "https://docs.github.com/en/get-started/git-basics/ignoring-files" },
      ],
    },
    {
      name: "git restore staged",
      category: "safety",
      summary_en: "Unstages a file you added by mistake, without throwing away the edits. Useful if you staged .env and caught it before commit.",
      summary_zh: "取消误 add 的暂存，但保留文件里的修改。如果暂存了 .env 且还没 commit，用这个。",
      example: "git restore --staged .env",
      options: [
        { flag: "--staged FILE", meaning_en: "Remove FILE from the index only", meaning_zh: "只把 FILE 从暂存区拿掉" },
        { flag: "git status", meaning_en: "Confirm it is unstaged", meaning_zh: "确认已经不在暂存区" },
      ],
      links: [
        { label: "git-scm.com", url: "https://git-scm.com/docs/git-restore" },
      ],
    },
  ],
};
