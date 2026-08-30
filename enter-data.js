window.ENTER_DATA = {
  categories: [
    { id: "shell", zh: "壳层", en: "shell" },
    { id: "editor", zh: "编辑", en: "editor" },
    { id: "repl", zh: "解释", en: "repl" },
    { id: "compile", zh: "编译", en: "compile" },
    { id: "db", zh: "数据库", en: "db" },
    { id: "nb", zh: "笔记本", en: "nb" },
    { id: "pkg", zh: "包管理", en: "pkg" },
  ],
  tools: [
    {
      id: "zsh",
      cat: "shell",
      name: "zsh",
      title_zh: "Z 壳层（macOS 默认）",
      title_en: "Z shell (macOS default)",
      blurb_zh: "macOS 13 的默认登录壳。Terminal 打开就是它；卡住时先分清是壳死了还是程序没退。",
      blurb_en: "Default login shell on macOS 13. Opening Terminal puts you here; unstick the shell, not a nested program.",
      official: "https://zsh.sourceforge.io/",
      version_cmd: "zsh --version",
      enter: "zsh",
      quit: "exit",
      stuck: "reset && stty sane",
      inner: [
        { c: "echo $SHELL", zh: "看登录壳是不是 /bin/zsh", en: "Confirm the login shell is /bin/zsh" },
        { c: "echo $PATH", zh: "打印当前 PATH", en: "Print the current PATH" },
        { c: "source ~/.zshrc", zh: "重读配置，不关窗口", en: "Reload config without closing the window" },
        { c: "exec zsh", zh: "用新 zsh 替换当前进程", en: "Replace this process with a fresh zsh" },
        { c: "typeset -U path", zh: "去掉 PATH 里的重复项", en: "Deduplicate PATH entries" },
      ],
      install_zh:
        "macOS 13 已自带 `/bin/zsh`，一般不用再装。若要用较新的 Homebrew 版：`brew install zsh`。登录壳改回 zsh：`chsh -s /bin/zsh`（改完新开 Terminal）。",
      install_en:
        "macOS 13 already ships `/bin/zsh`; you usually install nothing. For a newer Homebrew build: `brew install zsh`. Make it the login shell: `chsh -s /bin/zsh`, then open a new Terminal.",
      uninstall_zh:
        "不要卸载 `/bin/zsh`。若装过 brew 版：`brew uninstall zsh`，并把登录壳改回 `/bin/zsh`：`chsh -s /bin/zsh`。",
      uninstall_en:
        "Do not remove `/bin/zsh`. If you installed the brew formula: `brew uninstall zsh`, then `chsh -s /bin/zsh`.",
      upgrade_zh: "系统 zsh 跟 macOS 走。brew 版：`brew upgrade zsh`。",
      upgrade_en: "System zsh follows macOS. Homebrew: `brew upgrade zsh`.",
      env: {
        files: ["~/.zshrc", "~/.zprofile", "~/.zshenv"],
        path_zh:
          "查：`echo $PATH`。Apple Silicon 上 `/opt/homebrew/bin` 应在 `/usr/bin` 前面。zsh 也可用 `echo $path`（数组）。往 PATH 加目录：在 `~/.zshrc` 里写 `path=('/opt/homebrew/bin' $path)` 或 `eval \"$(/opt/homebrew/bin/brew shellenv)\"`，然后 `source ~/.zshrc`。",
        path_en:
          "Check with `echo $PATH`. On Apple Silicon, `/opt/homebrew/bin` should precede `/usr/bin`. zsh also has `echo $path` (array). Add a directory in `~/.zshrc` with `path=('/opt/homebrew/bin' $path)` or `eval \"$(/opt/homebrew/bin/brew shellenv)\"`, then `source ~/.zshrc`.",
        chaos_zh:
          "把 `brew shellenv`、`nvm`、`conda init` 复制多份，PATH 会叠很长，同一命令指向不同二进制。只在当前窗口 `export PATH=...` 一关就没。改完不 `source ~/.zshrc` 会以为没生效。`~/.zprofile` 和 `~/.zshrc` 各写一遍会重复。",
        chaos_en:
          "Pasting `brew shellenv`, `nvm`, and `conda init` more than once balloons PATH so the same name hits the wrong binary. A session-only `export PATH=...` vanishes when the window closes. Skipping `source ~/.zshrc` looks like “it did nothing.” Duplicating the same block in `~/.zprofile` and `~/.zshrc` doubles PATH.",
        practices_zh:
          "brew / nvm / conda 在 `~/.zshrc` 里各留一块，上面写注释。改之前 `cp ~/.zshrc ~/.zshrc.bak`。改完 `source ~/.zshrc` 或新开标签页。用 `typeset -U path` 去重。不要靠会话里的 export 当永久配置。",
        practices_en:
          "Keep one commented block each for brew, nvm, and conda in `~/.zshrc`. Backup first: `cp ~/.zshrc ~/.zshrc.bak`. Then `source ~/.zshrc` or open a new tab. `typeset -U path` drops duplicates. Do not treat a one-off `export` as config.",
      },
    },
    {
      id: "bash",
      cat: "shell",
      name: "bash",
      title_zh: "Bash 壳层",
      title_en: "Bash shell",
      blurb_zh: "macOS 上的 bash 是 3.2 古董；进子壳用 `bash`，不要随手 `chsh` 换掉 zsh。",
      blurb_en: "macOS bash is still 3.2. Start a subshell with `bash`; do not casually `chsh` away from zsh.",
      official: "https://www.gnu.org/software/bash/",
      version_cmd: "bash --version",
      enter: "bash",
      quit: "exit",
      stuck: "reset && stty sane",
      inner: [
        { c: "echo $BASH_VERSION", zh: "看当前 bash 版本", en: "Show this bash version" },
        { c: "bash --login", zh: "开一个登录 bash", en: "Start a login bash" },
        { c: "source ~/.bashrc", zh: "重读 bash 配置", en: "Reload bash config" },
        { c: "echo $PATH", zh: "打印 PATH", en: "Print PATH" },
      ],
      install_zh:
        "系统自带 `/bin/bash`（3.2）。要 5.x：`brew install bash`。用它当子壳即可：`/opt/homebrew/bin/bash`。不要为了脚本把登录壳从 zsh 改走，除非你清楚后果。",
      install_en:
        "The OS already has `/bin/bash` (3.2). For 5.x: `brew install bash`. Use it as a subshell: `/opt/homebrew/bin/bash`. Do not change the login shell away from zsh unless you mean to.",
      uninstall_zh: "系统 bash 留着。brew 版：`brew uninstall bash`。若改过登录壳，改回：`chsh -s /bin/zsh`。",
      uninstall_en: "Leave system bash. Homebrew: `brew uninstall bash`. If you changed the login shell, `chsh -s /bin/zsh`.",
      upgrade_zh: "brew 版：`brew upgrade bash`。系统 3.2 不升级。",
      upgrade_en: "Homebrew: `brew upgrade bash`. System 3.2 does not upgrade.",
      env: {
        files: ["~/.bashrc", "~/.bash_profile", "~/.profile"],
        path_zh:
          "查：`echo $PATH`。macOS 的 bash 登录读 `~/.bash_profile`，交互非登录读 `~/.bashrc`。很多人只改了 zsh 的 PATH，进 bash 后 brew 命令消失。在 `~/.bash_profile` 里 `source ~/.bashrc`，并同样放 `eval \"$(/opt/homebrew/bin/brew shellenv)\"`。",
        path_en:
          "Check with `echo $PATH`. Login bash reads `~/.bash_profile`; interactive non-login reads `~/.bashrc`. PATH edits in zsh do not apply here, so brew may vanish. `source ~/.bashrc` from `~/.bash_profile`, and put `eval \"$(/opt/homebrew/bin/brew shellenv)\"` there too.",
        chaos_zh:
          "`chsh -s /bin/bash` 之后新 Terminal 全是 bash 3.2，你的 `~/.zshrc` 全部失效。bash 和 zsh 两套 PATH 不一致：同一台机器 `python3` 指来指去。",
        chaos_en:
          "`chsh -s /bin/bash` makes every new Terminal bash 3.2 and ignores `~/.zshrc`. Separate bash/zsh PATH blocks make `python3` resolve differently in each shell.",
        practices_zh:
          "日常留在 zsh。需要 bash 时开子壳 `bash`，完事 `exit`。脚本第一行写 `#!/opt/homebrew/bin/bash` 或 `#!/bin/bash`，不要靠登录壳。",
        practices_en:
          "Stay on zsh day to day. Run `bash` as a subshell, then `exit`. Shebang scripts with `#!/opt/homebrew/bin/bash` or `#!/bin/bash` instead of changing the login shell.",
      },
    },
    {
      id: "tmux",
      cat: "shell",
      name: "tmux",
      title_zh: "终端复用器",
      title_en: "Terminal multiplexer",
      blurb_zh: "前缀键默认 Ctrl-B。关掉窗口不是退出：Ctrl-B d 是分离，kill-session 才是拆掉。",
      blurb_en: "Prefix is Ctrl-B. Closing the window is not quit: Ctrl-B d detaches; kill-session destroys it.",
      official: "https://github.com/tmux/tmux/wiki",
      version_cmd: "tmux -V",
      enter: "tmux new -s work",
      quit: "Ctrl-B d",
      stuck: "tmux kill-session -t work",
      inner: [
        { c: "tmux ls", zh: "列出会话", en: "List sessions" },
        { c: "tmux attach -t work", zh: "回到名为 work 的会话", en: "Reattach to session work" },
        { c: "Ctrl-B c", zh: "新建窗口", en: "New window" },
        { c: "Ctrl-B %", zh: "左右分屏", en: "Split pane left/right" },
        { c: "Ctrl-B ?", zh: "快捷键帮助", en: "Key help" },
      ],
      install_zh: "`brew install tmux`",
      install_en: "`brew install tmux`",
      uninstall_zh: "`brew uninstall tmux`",
      uninstall_en: "`brew uninstall tmux`",
      upgrade_zh: "`brew upgrade tmux`",
      upgrade_en: "`brew upgrade tmux`",
      env: {
        files: ["~/.tmux.conf"],
        path_zh:
          "tmux 本身不改 PATH。会话里的 PATH 继承创建它的那份 zsh。查：在 tmux 里 `echo $PATH`，对比 tmux 外面。若 brew 只在外面有，先 `source ~/.zshrc` 再 `tmux new`。",
        path_en:
          "tmux does not edit PATH. A session inherits the zsh that created it. Inside tmux run `echo $PATH` and compare with outside. If brew is missing inside, `source ~/.zshrc` then `tmux new`.",
        chaos_zh:
          "关掉 Terminal 标签页只是分离，会话还在占端口/进程。嵌套 tmux 时前缀变成 Ctrl-B Ctrl-B。把 `set -g default-shell` 指到不存在的路径会立刻退出。旧会话里的 PATH 还是创建时那份，不会自动跟上后来改的 `~/.zshrc`。",
        chaos_en:
          "Closing the tab detaches; the session keeps running. Nested tmux needs Ctrl-B Ctrl-B as prefix. A bad `default-shell` path exits immediately. An old session keeps the PATH from create-time, not your latest `~/.zshrc`.",
        practices_zh:
          "分离用 Ctrl-B d；确定不要了再用 `tmux kill-session -t work`。改 `~/.tmux.conf` 后 `tmux source-file ~/.tmux.conf`。需要新 PATH 就新开会话，不要指望旧会话自己更新。",
        practices_en:
          "Detach with Ctrl-B d; destroy with `tmux kill-session -t work` when done. Reload `~/.tmux.conf` with `tmux source-file ~/.tmux.conf`. For a new PATH, start a new session.",
      },
    },
    {
      id: "ssh",
      cat: "shell",
      name: "ssh",
      title_zh: "远程登录",
      title_en: "Remote login",
      blurb_zh: "进去是 ssh user@host；挂死时先按 Enter，再按 ~.（波浪线必须跟在换行后面）。",
      blurb_en: "Open with ssh user@host. If hung: press Enter, then ~. — the tilde must follow a newline.",
      official: "https://www.openssh.com/",
      version_cmd: "ssh -V",
      enter: "ssh user@host",
      quit: "exit",
      stuck: "~.",
      inner: [
        { c: "~.", zh: "挂死时：先 Enter，再波浪线+点，强制断开", en: "When hung: Enter, then tilde-dot to force-quit" },
        { c: "~?", zh: "打印 ssh 转义帮助（也要先 Enter）", en: "Print ssh escape help (after Enter)" },
        { c: "ssh -v user@host", zh: "详细日志，看卡在哪一步", en: "Verbose log; see where it stalls" },
        { c: "ssh-add --apple-use-keychain ~/.ssh/id_ed25519", zh: "把钥匙放进钥匙串", en: "Load the key into Keychain" },
      ],
      install_zh: "macOS 自带 OpenSSH。要新版本：`brew install openssh`。",
      install_en: "macOS already has OpenSSH. Newer: `brew install openssh`.",
      uninstall_zh: "不要卸系统 `/usr/bin/ssh`。brew 版：`brew uninstall openssh`。",
      uninstall_en: "Do not remove system `/usr/bin/ssh`. Homebrew: `brew uninstall openssh`.",
      upgrade_zh: "`brew upgrade openssh`",
      upgrade_en: "`brew upgrade openssh`",
      env: {
        files: ["~/.ssh/config", "~/.ssh/id_ed25519", "~/.ssh/id_ed25519.pub", "~/.ssh/known_hosts"],
        path_zh:
          "ssh 不靠 PATH 传主机名。`which ssh` 常见 `/usr/bin/ssh`。配置写在 `~/.ssh/config`：`Host nick` / `HostName` / `User` / `IdentityFile`。查：`ssh -G nick | head`。",
        path_en:
          "ssh does not use PATH for hostnames. `which ssh` is usually `/usr/bin/ssh`. Put aliases in `~/.ssh/config` (`Host`, `HostName`, `User`, `IdentityFile`). Inspect with `ssh -G nick | head`.",
        chaos_zh:
          "私钥权限太开会被拒绝：必须 `chmod 700 ~/.ssh` 和 `chmod 600 ~/.ssh/id_ed25519`。网络断了会话会假死，敲什么都没反应——那不是 vim。ControlMaster 残留套接字也会让新连接挂住。",
        chaos_en:
          "Loose key permissions are rejected: `chmod 700 ~/.ssh` and `chmod 600 ~/.ssh/id_ed25519`. A dead network looks like a frozen prompt — that is not vim. A stale ControlMaster socket can hang new connections too.",
        practices_zh:
          "钥匙 `chmod 600`。config 用 Host 别名，不要每次敲长命令。挂死：Enter 然后 `~.`。不要把私钥拷成 644 去分享。改 config 不必 source，下次 ssh 就生效。",
        practices_en:
          "Keep keys at mode 600. Use Host aliases in config. When hung: Enter then `~.`. Never share a private key at 644. config is reread on the next ssh; no `source` needed.",
      },
    },
    {
      id: "vim",
      cat: "editor",
      name: "vim",
      title_zh: "Vim 编辑器",
      title_en: "Vim editor",
      blurb_zh: "进去容易，出来要先 Esc，再输入 :q!。底行写着 INSERT 时，你敲的任何命令都会变成正文。",
      blurb_en: "Easy to enter, leave with Esc then :q!. If the status line says INSERT, every key is text.",
      official: "https://www.vim.org/",
      version_cmd: "vim --version",
      enter: "vim file",
      quit: ":q!",
      stuck: "Esc",
      inner: [
        { c: "Esc", zh: "先退出插入模式，底行 INSERT 必须消失", en: "Leave INSERT; the INSERT label must vanish" },
        { c: ":q!", zh: "不保存、强制退出（Esc 之后）", en: "Quit without saving (after Esc)" },
        { c: ":q", zh: "没改动才退出；有改动会拒绝", en: "Quit only if unmodified" },
        { c: ":w", zh: "保存", en: "Write (save)" },
        { c: ":wq", zh: "保存并退出", en: "Write and quit" },
      ],
      install_zh: "macOS 自带 vim。较新：`brew install vim`。",
      install_en: "macOS already has vim. Newer: `brew install vim`.",
      uninstall_zh: "不要卸 `/usr/bin/vim`。brew 版：`brew uninstall vim`。",
      uninstall_en: "Do not remove `/usr/bin/vim`. Homebrew: `brew uninstall vim`.",
      upgrade_zh: "`brew upgrade vim`",
      upgrade_en: "`brew upgrade vim`",
      env: {
        files: ["~/.vimrc", "~/.vim/"],
        path_zh:
          "vim 几乎不改 PATH。`which vim` 可能是 `/usr/bin/vim` 或 `/opt/homebrew/bin/vim`。`echo $EDITOR` 常被 git 使用；可在 `~/.zshrc` 写 `export EDITOR=vim`，然后 `source ~/.zshrc`。",
        path_en:
          "vim barely touches PATH. `which vim` may be `/usr/bin/vim` or `/opt/homebrew/bin/vim`. git reads `echo $EDITOR`; you may `export EDITOR=vim` in `~/.zshrc` and `source ~/.zshrc`.",
        chaos_zh:
          "卡在 INSERT：底行 `-- INSERT --`，敲 `:q!` 只会把这几个字写进文件。先按 Esc（可连按），底行变干净，再输入 `:q!` 回车。还有 `-- MORE --` 按空格或 q；宏录制底行 `recording` 时 Esc 再 q。不要在插入模式里瞎按 Ctrl-Z，那会挂起整个 vim（`fg` 拉回）。",
        chaos_en:
          "Stuck in INSERT: the status line shows `-- INSERT --` and typing `:q!` inserts those characters. Press Esc until that label is gone, then type `:q!` and Enter. `-- MORE --` needs Space or q; recording needs Esc then q. Ctrl-Z in insert suspends vim — bring it back with `fg`.",
        practices_zh:
          "最小 `~/.vimrc`，改完在 vim 里 `:source ~/.vimrc`。不会用就 Esc 然后 `:q!`，不要关 Terminal 硬杀。把 `export EDITOR=vim` 写进 `~/.zshrc` 而不是只在会话里 export。",
        practices_en:
          "Keep a tiny `~/.vimrc` and `:source ~/.vimrc` inside vim. If lost: Esc then `:q!`. Do not kill the Terminal. Put `export EDITOR=vim` in `~/.zshrc`, not a one-off export.",
      },
    },
    {
      id: "nano",
      cat: "editor",
      name: "nano",
      title_zh: "Nano 编辑器",
      title_en: "Nano editor",
      blurb_zh: "底行有快捷键提示。离开按 Ctrl-X；有未保存会问 Y/N。",
      blurb_en: "Shortcuts sit on the bottom line. Leave with Ctrl-X; unsaved files ask Y or N.",
      official: "https://www.nano-editor.org/",
      version_cmd: "nano --version",
      enter: "nano file",
      quit: "Ctrl-X",
      stuck: "Ctrl-X",
      inner: [
        { c: "Ctrl-X", zh: "离开；有改动会问是否保存", en: "Leave; asks to save if modified" },
        { c: "Ctrl-O", zh: "保存（Write Out）", en: "Save (Write Out)" },
        { c: "Ctrl-W", zh: "搜索", en: "Search" },
        { c: "Ctrl-K", zh: "剪下一行", en: "Cut the current line" },
        { c: "Ctrl-G", zh: "帮助", en: "Help" },
      ],
      install_zh: "macOS 自带 nano。较新：`brew install nano`。",
      install_en: "macOS already has nano. Newer: `brew install nano`.",
      uninstall_zh: "不要卸系统 nano。brew 版：`brew uninstall nano`。",
      uninstall_en: "Do not remove system nano. Homebrew: `brew uninstall nano`.",
      upgrade_zh: "`brew upgrade nano`",
      upgrade_en: "`brew upgrade nano`",
      env: {
        files: ["~/.nanorc"],
        path_zh:
          "`which nano` 即可。可在 `~/.zshrc` 设 `export EDITOR=nano`，然后 `source ~/.zshrc`。`echo $EDITOR` 确认。",
        path_en:
          "`which nano` is enough. Optionally `export EDITOR=nano` in `~/.zshrc`, then `source ~/.zshrc`. Confirm with `echo $EDITOR`.",
        chaos_zh:
          "Ctrl-X 之后底行问 `Save modified buffer?`：Y 保存，N 丢弃，Ctrl-C 取消退出。很多人以为卡死，其实在等这一问。Ctrl-Z 同样是挂起，用 `fg`。",
        chaos_en:
          "After Ctrl-X, nano asks `Save modified buffer?`: Y save, N discard, Ctrl-C cancel the quit. That prompt looks like a freeze. Ctrl-Z suspends; `fg` resumes.",
        practices_zh:
          "快捷键以底行 ^X 为准（^ 就是 Ctrl）。配置放 `~/.nanorc`，不必改 PATH。不要把 nano 会话挂起一堆。",
        practices_en:
          "Trust the `^X` hints on the bottom row (`^` means Ctrl). Config lives in `~/.nanorc`; no PATH edits. Do not accumulate suspended nano jobs.",
      },
    },
    {
      id: "less",
      cat: "editor",
      name: "less",
      title_zh: "分页器",
      title_en: "Pager",
      blurb_zh: "用来看文件或管道输出，不是编辑器。离开按 q。",
      blurb_en: "A pager for files and pipes, not an editor. Leave with q.",
      official: "https://www.greenwoodsoftware.com/less/",
      version_cmd: "less --version",
      enter: "less file",
      quit: "q",
      stuck: "q",
      inner: [
        { c: "q", zh: "离开", en: "Quit" },
        { c: "Space", zh: "下一页", en: "Next page" },
        { c: "b", zh: "上一页", en: "Previous page" },
        { c: "/pattern", zh: "向下搜索", en: "Search forward" },
        { c: "G", zh: "跳到文件末尾", en: "Jump to end of file" },
      ],
      install_zh: "macOS 自带 less。较新：`brew install less`。",
      install_en: "macOS already has less. Newer: `brew install less`.",
      uninstall_zh: "不要卸系统 less。brew 版：`brew uninstall less`。",
      uninstall_en: "Do not remove system less. Homebrew: `brew uninstall less`.",
      upgrade_zh: "`brew upgrade less`",
      upgrade_en: "`brew upgrade less`",
      env: {
        files: ["~/.lesskey"],
        path_zh:
          "`which less`。很多工具读 `$PAGER`：在 `~/.zshrc` 写 `export PAGER=less`，`source ~/.zshrc`。`echo $PAGER` 查看。",
        path_en:
          "`which less`. Many tools read `$PAGER`: `export PAGER=less` in `~/.zshrc`, then `source ~/.zshrc`. Check with `echo $PAGER`.",
        chaos_zh:
          "在 less 里敲 `:q!` 没有用，那是 vim 的。搜索模式（`/`）下先 q 或 Esc。`git log` / `man` 背后往往就是 less，所以“命令没结束”其实是分页器还开着。",
        chaos_en:
          "`:q!` does nothing here — that is vim. In `/` search, press q or Esc first. `git log` and `man` often wrap less, so the “command never ends” is the pager still open.",
        practices_zh:
          "一律 `q` 退出。需要看完管道：`command | less`。把 `PAGER=less` 写进 `~/.zshrc`，不要只在窗口里 export。",
        practices_en:
          "Always quit with `q`. Page a pipe with `command | less`. Set `PAGER=less` in `~/.zshrc`, not a session export.",
      },
    },
    {
      id: "man",
      cat: "editor",
      name: "man",
      title_zh: "系统手册页",
      title_en: "System manual pages",
      blurb_zh: "打开某条命令的手册；底层通常是 less，所以离开同样是 q。",
      blurb_en: "Opens a command’s manual. The pager is usually less, so leave with q.",
      official: "https://man-db.nongnu.org/",
      version_cmd: "man --version",
      enter: "man ls",
      quit: "q",
      stuck: "q",
      inner: [
        { c: "q", zh: "离开手册（和 less 一样）", en: "Leave the page (same as less)" },
        { c: "/pattern", zh: "搜索", en: "Search" },
        { c: "n", zh: "下一个搜索命中", en: "Next search hit" },
        { c: "h", zh: "分页器帮助", en: "Pager help" },
        { c: "man -k keyword", zh: "按关键词搜手册名", en: "Search manual names by keyword" },
      ],
      install_zh: "macOS 自带 man。Linux 上缺手册时用发行版的 man-db / man-pages。Mac 不必 brew 装 man。",
      install_en: "macOS already has man. On Linux, install man-db / man-pages from the distro. No need to brew man on a Mac.",
      uninstall_zh: "不要卸载系统 man。",
      uninstall_en: "Do not uninstall system man.",
      upgrade_zh: "跟操作系统走，一般不单独升级。",
      upgrade_en: "Ships with the OS; not upgraded on its own.",
      env: {
        files: [],
        path_zh:
          "手册目录在 `$MANPATH`。查：`echo $MANPATH` 和 `manpath`。brew 公式的手册在 `/opt/homebrew/share/man`，`brew shellenv` 会把它加进去。`echo $PATH` 不决定 man 找哪一页。",
        path_en:
          "Pages live on `$MANPATH`. Check `echo $MANPATH` and `manpath`. Homebrew pages sit in `/opt/homebrew/share/man`; `brew shellenv` adds that. `echo $PATH` does not pick the page.",
        chaos_zh:
          "卡在手册里是因为 less 还开着，按 `q`。`MANPATH` 被你写成空或指错后，`man ls` 会说 No manual entry。不要手动覆盖成只有一个目录。",
        chaos_en:
          "You are stuck in less — press `q`. An empty or wrong `MANPATH` yields “No manual entry.” Do not overwrite MANPATH with a single directory.",
        practices_zh:
          "让 `brew shellenv` 管理 man 路径。自己不要 export MANPATH 除非你知道在追加。看完按 q，不要 Ctrl-C 狂按。",
        practices_en:
          "Let `brew shellenv` manage man paths. Do not export MANPATH unless you are appending. Press q when done; do not spam Ctrl-C.",
      },
    },
    {
      id: "python3",
      cat: "repl",
      name: "python3",
      title_zh: "Python 解释器",
      title_en: "Python interpreter",
      blurb_zh: "进去是 python3；出来是 exit() 或 Ctrl-D。装包用 venv，永远不要 sudo pip。",
      blurb_en: "Enter with python3; leave with exit() or Ctrl-D. Use a venv; never sudo pip.",
      official: "https://www.python.org/",
      version_cmd: "python3 --version",
      enter: "python3",
      quit: "exit()",
      stuck: "Ctrl-C",
      inner: [
        { c: "exit()", zh: "离开 REPL（Ctrl-D 也可以）", en: "Leave the REPL (or Ctrl-D)" },
        { c: "python3 -m venv .venv", zh: "在项目里建虚拟环境", en: "Create a project virtualenv" },
        { c: "source .venv/bin/activate", zh: "进入 venv，提示符会出现 (.venv)", en: "Activate venv; prompt shows (.venv)" },
        { c: "deactivate", zh: "离开 venv，回到原来的 python3", en: "Leave the venv" },
        { c: "python3 -m pip", zh: "用当前这个 python 的 pip，不要裸奔 pip", en: "pip bound to this python — not bare pip" },
      ],
      install_zh:
        "不要拿 `/usr/bin/python3` 当日常解释器（那是系统的）。Apple Silicon：先保证 brew 可用，再 `brew install python`。确认：`which python3` 应为 `/opt/homebrew/bin/python3`。项目里再 `python3 -m venv .venv`。",
      install_en:
        "Do not treat `/usr/bin/python3` as your daily interpreter. On Apple Silicon, `brew install python` after brew works. `which python3` should be `/opt/homebrew/bin/python3`. Then `python3 -m venv .venv` per project.",
      uninstall_zh:
        "项目 venv：删掉 `.venv` 文件夹即可。brew 公式：`brew uninstall python`。不要去删 `/usr/bin/python3`。",
      uninstall_en:
        "A project venv is just the `.venv` folder. Homebrew: `brew uninstall python`. Never delete `/usr/bin/python3`.",
      upgrade_zh: "`brew upgrade python`。venv 不会跟着升，需要的话删掉 `.venv` 重建。",
      upgrade_en: "`brew upgrade python`. venvs do not follow; delete `.venv` and recreate if you need the new version.",
      env: {
        files: [".venv", ".venv/bin/activate", "~/.zshrc"],
        path_zh:
          "项目：`python3 -m venv .venv`，然后 `source .venv/bin/activate`。激活后 `which python3` 必须是 `…/项目/.venv/bin/python3`。查 PATH：`echo $PATH`，venv 的 `bin` 应在最前。离开：`deactivate`。不要把 venv 写进全局 `~/.zshrc`。",
        path_en:
          "Per project: `python3 -m venv .venv`, then `source .venv/bin/activate`. After that, `which python3` must be `…/project/.venv/bin/python3`. `echo $PATH` should list that `bin` first. Leave with `deactivate`. Do not put a venv on global `~/.zshrc`.",
        chaos_zh:
          "三套 Python 混战：`/usr/bin/python3`（系统）、`/opt/homebrew/bin/python3`（brew）、conda 的 `(base)`。`python` 可能不存在；`pip` 可能绑到另一套。`sudo pip3 install` 会往系统目录写，之后 brew/升级就坏。Terminal 里突然变成 conda 的 python，多半是 `conda init` 改了 `~/.zshrc`。",
        chaos_en:
          "Three Pythons collide: `/usr/bin/python3` (system), `/opt/homebrew/bin/python3` (brew), and conda `(base)`. `python` may not exist; `pip` may belong to another tree. `sudo pip3 install` writes into the OS and breaks later upgrades. If Terminal suddenly is conda’s python, `conda init` rewrote `~/.zshrc`.",
        practices_zh:
          "一个项目一个 `.venv`。永远 `python3 -m pip`，从不用 `sudo pip`。先 `which python3` 和 `python3 -m pip -V` 再装包。brew / conda / 系统只留一条日常路径；venv 用完 `deactivate`。改 PATH 写进文件并 `source ~/.zshrc`，不要只在会话里 export。",
        practices_en:
          "One `.venv` per project. Always `python3 -m pip`; never `sudo pip`. Check `which python3` and `python3 -m pip -V` before installing. Pick one daily python (brew or conda, not both) and `deactivate` when done. Persist PATH in a file and `source ~/.zshrc` — do not export and forget.",
      },
    },
    {
      id: "julia",
      cat: "repl",
      name: "julia",
      title_zh: "Julia 解释器",
      title_en: "Julia interpreter",
      blurb_zh: "进去 julia，出来 exit() 或 Ctrl-D。包模式按 ]，退回 REPL 按退格。",
      blurb_en: "Enter with julia; leave with exit() or Ctrl-D. Press ] for pkg mode, Backspace to return.",
      official: "https://julialang.org/",
      version_cmd: "julia --version",
      enter: "julia",
      quit: "exit()",
      stuck: "Ctrl-C",
      inner: [
        { c: "exit()", zh: "离开 REPL", en: "Leave the REPL" },
        { c: "]", zh: "进入包模式 (pkg>)", en: "Enter pkg mode (pkg>)" },
        { c: "Backspace", zh: "从包模式回到 julia>", en: "Leave pkg mode back to julia>" },
        { c: "?mean", zh: "帮助", en: "Help" },
        { c: "pwd()", zh: "当前目录", en: "Working directory" },
      ],
      install_zh: "`brew install julia`",
      install_en: "`brew install julia`",
      uninstall_zh: "`brew uninstall julia`",
      uninstall_en: "`brew uninstall julia`",
      upgrade_zh: "`brew upgrade julia`",
      upgrade_en: "`brew upgrade julia`",
      env: {
        files: ["~/.julia/config/startup.jl", "~/.zshrc"],
        path_zh:
          "`which julia` 应为 `/opt/homebrew/bin/julia`。`echo $PATH` 确认 `/opt/homebrew/bin` 在前。包和编译缓存在 `~/.julia`，不是 PATH。",
        path_en:
          "`which julia` should be `/opt/homebrew/bin/julia`. `echo $PATH` should list `/opt/homebrew/bin` first. Packages live under `~/.julia`, not on PATH.",
        chaos_zh:
          "juliaup 和 brew julia 两套并存时 `which julia` 会跳。`JULIA_DEPOT_PATH` 指错会导致装包装到别处。REPL 里 Ctrl-Z 会挂起，用 `fg`。",
        chaos_en:
          "juliaup plus brew julia makes `which julia` jump. A wrong `JULIA_DEPOT_PATH` installs packages elsewhere. Ctrl-Z suspends the REPL; `fg` brings it back.",
        practices_zh:
          "只留一种安装（建议 brew）。启动文件用 `~/.julia/config/startup.jl`。不要把 `~/.julia` 塞进 PATH。",
        practices_en:
          "Keep one install (brew is fine). Use `~/.julia/config/startup.jl`. Do not put `~/.julia` on PATH.",
      },
    },
    {
      id: "node",
      cat: "repl",
      name: "node",
      title_zh: "Node.js 运行时",
      title_en: "Node.js runtime",
      blurb_zh: "进去 node 是 REPL；跑脚本是 node app.js。nvm 和 brew 会抢 PATH，which node 必须先看。",
      blurb_en: "node opens a REPL; node app.js runs a file. nvm and brew fight over PATH — check which node.",
      official: "https://nodejs.org/",
      version_cmd: "node --version",
      enter: "node",
      quit: ".exit",
      stuck: "Ctrl-C",
      inner: [
        { c: ".exit", zh: "离开 REPL（Ctrl-D 也可以）", en: "Leave the REPL (or Ctrl-D)" },
        { c: ".help", zh: "REPL 帮助", en: "REPL help" },
        { c: "node app.js", zh: "运行脚本，不是 REPL", en: "Run a script, not the REPL" },
        { c: "which node", zh: "看当前 node 来自 nvm 还是 brew", en: "See whether node is nvm or brew" },
      ],
      install_zh:
        "二选一，不要两套：`brew install node`，或装 nvm 再用 `nvm install --lts`。Apple Silicon 上 brew 的 node 在 `/opt/homebrew/bin/node`。",
      install_en:
        "Pick one: `brew install node`, or nvm then `nvm install --lts`. Do not run both. Brew’s binary on Apple Silicon is `/opt/homebrew/bin/node`.",
      uninstall_zh:
        "brew：`brew uninstall node`。nvm：`nvm uninstall <version>`，并删掉 `~/.zshrc` 里的 nvm 块。",
      uninstall_en:
        "Homebrew: `brew uninstall node`. nvm: `nvm uninstall <version>` and remove the nvm block from `~/.zshrc`.",
      upgrade_zh: "brew：`brew upgrade node`。nvm：`nvm install --lts --reinstall-packages-from=current`。",
      upgrade_en: "Homebrew: `brew upgrade node`. nvm: `nvm install --lts --reinstall-packages-from=current`.",
      env: {
        files: ["~/.zshrc", "~/.nvm/nvm.sh"],
        path_zh:
          "查：`which node`、`echo $PATH`。brew：`/opt/homebrew/bin/node`。nvm：`~/.nvm/versions/node/vXX/bin/node`，靠 `~/.zshrc` 里 nvm.sh 把那层 bin 插到 PATH 最前。",
        path_en:
          "Check `which node` and `echo $PATH`. Brew: `/opt/homebrew/bin/node`. nvm: `~/.nvm/versions/node/vXX/bin/node`, prepended by the nvm.sh snippet in `~/.zshrc`.",
        chaos_zh:
          "nvm 和 brew node 同时存在时，PATH 谁在前谁赢：终端里 `node` 是 18，`/opt/homebrew/bin/node` 却是 22，npm 全局包也对不上。nvm 脚本若写在 `brew shellenv` 前面，会盖住 brew。会话里 `export PATH=.../node/bin` 一关窗口就乱。",
        chaos_en:
          "With both nvm and brew node, whichever PATH entry is first wins: the shell `node` may be 18 while `/opt/homebrew/bin/node` is 22, and global npm packages will not match. nvm placed above `brew shellenv` shadows brew. A session `export PATH=.../node/bin` collapses when the tab closes.",
        practices_zh:
          "只留一条线。用 nvm 就不要 `brew install node`。nvm 块和 brew shellenv 在 `~/.zshrc` 里分开、各一块。改完 `source ~/.zshrc`，再 `which node`。",
        practices_en:
          "Pick one line. If you use nvm, do not `brew install node`. Keep nvm and `brew shellenv` as separate blocks in `~/.zshrc`. Then `source ~/.zshrc` and `which node`.",
      },
    },
    {
      id: "ts-node",
      cat: "repl",
      name: "ts-node",
      title_zh: "TypeScript 直接运行",
      title_en: "Run TypeScript directly",
      blurb_zh: "依赖 node。没有装全局时用 npx ts-node；REPL 用 npx ts-node。",
      blurb_en: "Needs node. Without a global install, use npx ts-node; that also starts the REPL.",
      official: "https://typestrong.org/ts-node/",
      version_cmd: "npx ts-node --version",
      enter: "npx ts-node",
      quit: ".exit",
      stuck: "Ctrl-C",
      inner: [
        { c: "npx ts-node", zh: "打开 TS REPL（不强制 -g）", en: "TS REPL without a global install" },
        { c: "npx ts-node file.ts", zh: "直接跑一个文件", en: "Run a file" },
        { c: ".exit", zh: "离开 REPL", en: "Leave the REPL" },
        { c: "npx ts-node --esm", zh: "需要 ESM 时", en: "When ESM is required" },
      ],
      install_zh:
        "先有 node（brew 或 nvm）。项目里：`npm install -D ts-node typescript`。临时：`npx ts-node`。不建议 `npm install -g ts-node`，容易和 nvm 抢。",
      install_en:
        "Need node first (brew or nvm). Per project: `npm install -D ts-node typescript`. Ad hoc: `npx ts-node`. Avoid `npm install -g ts-node` — it fights nvm.",
      uninstall_zh: "项目：`npm uninstall ts-node`。全局（若装过）：`npm uninstall -g ts-node`。",
      uninstall_en: "Project: `npm uninstall ts-node`. Global, if you did that: `npm uninstall -g ts-node`.",
      upgrade_zh: "项目：`npm update ts-node`。npx 每次可拉较新的。",
      upgrade_en: "Project: `npm update ts-node`. npx can fetch a newer copy.",
      env: {
        files: ["tsconfig.json", "package.json", "~/.zshrc"],
        path_zh:
          "ts-node 跟着 `node`。`which node` 和 `npx ts-node --version` 必须是同一套。项目本地二进制在 `./node_modules/.bin`，npm 脚本会自动加进 PATH。",
        path_en:
          "ts-node follows `node`. `which node` and `npx ts-node --version` must be the same tree. Local bins live in `./node_modules/.bin`; npm scripts prepend that.",
        chaos_zh:
          "全局 ts-node 用 brew 的 node 编译，终端却是 nvm 的 node，报一堆模块找不到。缺 `tsconfig.json` 时模块解析也怪。这不是 PATH 丢了，是两套 node。",
        chaos_en:
          "A global ts-node built with brew node, plus an nvm `node` in the shell, yields missing modules. A missing `tsconfig.json` also confuses resolution. That is two Nodes, not a lost PATH.",
        practices_zh:
          "项目本地安装 + `npx ts-node`。不要 -g。先对齐 `which node`。改 node 版本后重装 ts-node。",
        practices_en:
          "Install locally and use `npx ts-node`. Skip `-g`. Align `which node` first. Reinstall ts-node after switching Node versions.",
      },
    },
    {
      id: "R",
      cat: "repl",
      name: "R",
      title_zh: "R 语言控制台",
      title_en: "R console",
      blurb_zh: "进去是大写 R；出来是 q()。它会问是否保存工作空间，一般回 n。",
      blurb_en: "Enter with capital R; leave with q(). It asks to save the workspace — usually answer n.",
      official: "https://www.r-project.org/",
      version_cmd: "R --version",
      enter: "R",
      quit: "q()",
      stuck: "Ctrl-C",
      inner: [
        { c: "q()", zh: "离开；接着问保存工作空间时回 n", en: "Quit; answer n when asked to save the workspace" },
        { c: "quit(\"no\")", zh: "离开并且不保存", en: "Quit without saving" },
        { c: "?mean", zh: "帮助", en: "Help" },
        { c: "install.packages(\"pkg\")", zh: "装包（在 R 里，不是 brew）", en: "Install a package (inside R, not brew)" },
      ],
      install_zh: "`brew install r`",
      install_en: "`brew install r`",
      uninstall_zh: "`brew uninstall r`",
      uninstall_en: "`brew uninstall r`",
      upgrade_zh: "`brew upgrade r`",
      upgrade_en: "`brew upgrade r`",
      env: {
        files: ["~/.Rprofile", "~/.Renviron"],
        path_zh:
          "`which R` 应为 `/opt/homebrew/bin/R`。`echo $PATH` 看 brew bin。R 包库在 `R -e '.libPaths()'`，不是 PATH。需要命令行工具时把 `$(brew --prefix)/bin` 留在前面。",
        path_en:
          "`which R` should be `/opt/homebrew/bin/R`. Check brew’s bin with `echo $PATH`. Package libs are `R -e '.libPaths()'`, not PATH. Keep `$(brew --prefix)/bin` first if you want the CLI.",
        chaos_zh:
          "RStudio 自带一套 R，和 brew 的 `/opt/homebrew/bin/R` 不是同一个。`R` 和 `r` 在大小写敏感的 zsh 里不同。工作空间 `.RData` 偷偷恢复上次对象，像“配置坏了”。",
        chaos_en:
          "RStudio ships its own R, distinct from brew’s `/opt/homebrew/bin/R`. zsh is case-sensitive: `R` ≠ `r`. A hidden `.RData` restores old objects and looks like broken config.",
        practices_zh:
          "Terminal 用 brew 的 `R`。退出用 `quit(\"no\")` 避免乱存 .RData。包装在用户库，不要 sudo。启动选项放 `~/.Rprofile`。",
        practices_en:
          "Use brew `R` in Terminal. Prefer `quit(\"no\")` so `.RData` is not saved by accident. Install packages in the user lib; no sudo. Startup goes in `~/.Rprofile`.",
      },
    },
    {
      id: "java",
      cat: "compile",
      name: "java",
      title_zh: "Java 编译与运行",
      title_en: "Java compile and run",
      blurb_zh: "这不是 REPL。进入是 javac 再 java 跑；跑起来的进程用 Ctrl-C 停。jshell 只是附注。",
      blurb_en: "Not a REPL. Enter means javac then java; Ctrl-C stops a running binary. jshell is only a note.",
      official: "https://openjdk.org/",
      version_cmd: "java -version",
      enter: "javac Hello.java && java Hello",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "javac Hello.java", zh: "编译出 Hello.class", en: "Compile to Hello.class" },
        { c: "java Hello", zh: "运行（不要加 .class）", en: "Run (no .class suffix)" },
        { c: "jshell", zh: "可选的官方 REPL，不是日常进入方式", en: "Optional official REPL — not the usual entry" },
        { c: "javac -version", zh: "编译器版本", en: "Compiler version" },
      ],
      install_zh:
        "不要装 Oracle 安装包。`brew install openjdk`。Apple Silicon 按 `brew info openjdk` 的提示做 symlink，系统 wrapper 才能找到。",
      install_en:
        "Do not install Oracle’s package. `brew install openjdk`. On Apple Silicon follow `brew info openjdk` to symlink so the OS wrappers can see it.",
      uninstall_zh: "`brew uninstall openjdk`。若做过 symlink，按 brew info 的说明删掉。",
      uninstall_en: "`brew uninstall openjdk`. Remove any symlink listed in `brew info`.",
      upgrade_zh: "`brew upgrade openjdk`",
      upgrade_en: "`brew upgrade openjdk`",
      env: {
        files: ["~/.zshrc"],
        path_zh:
          "`echo $PATH`。brew 的 java 常在 `/opt/homebrew/opt/openjdk/bin`，有时 keg-only 不在默认 PATH。`brew info openjdk` 会给出 `export PATH=\"/opt/homebrew/opt/openjdk/bin:$PATH\"`。查：`java -version`、`/usr/libexec/java_home -V`。",
        path_en:
          "`echo $PATH`. Brew’s java often lives in `/opt/homebrew/opt/openjdk/bin` and may be keg-only. `brew info openjdk` prints `export PATH=\"/opt/homebrew/opt/openjdk/bin:$PATH\"`. Check `java -version` and `/usr/libexec/java_home -V`.",
        chaos_zh:
          "macOS 提示要装旧版 Java 是历史残留。PATH 里没有 openjdk bin 时 `java` 不是 command not found 就是指到残缺 runtime。JAVA_HOME 指错版本时 javac 和 java 不一致。",
        chaos_en:
          "macOS may nag you to install a legacy Java. Without openjdk on PATH, `java` is missing or a stub runtime. A wrong JAVA_HOME makes javac and java disagree.",
        practices_zh:
          "PATH 和 JAVA_HOME 写进 `~/.zshrc` 同一块，然后 `source ~/.zshrc`。`/usr/libexec/java_home` 核对。不要会话里 export 完就关窗。不要 Oracle。",
        practices_en:
          "Put PATH and JAVA_HOME in one `~/.zshrc` block, then `source ~/.zshrc`. Confirm with `/usr/libexec/java_home`. Do not export only in a session. No Oracle.",
      },
    },
    {
      id: "gcc",
      cat: "compile",
      name: "gcc",
      title_zh: "C 编译器",
      title_en: "C compiler",
      blurb_zh: "进入是编译并运行；跑起来的程序用 Ctrl-C 停。macOS 上名叫 gcc 的经常其实是 clang。",
      blurb_en: "Enter is compile-and-run; Ctrl-C stops the binary. On macOS, gcc is often actually clang.",
      official: "https://gcc.gnu.org/",
      version_cmd: "gcc --version",
      enter: "gcc main.c -o main && ./main",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "gcc main.c -o main", zh: "编译成可执行文件 main", en: "Compile to binary main" },
        { c: "./main", zh: "运行", en: "Run" },
        { c: "gcc -Wall -g main.c -o main", zh: "警告 + 调试信息", en: "Warnings + debug info" },
        { c: "gcc --version", zh: "看是真正的 GCC 还是 Apple clang", en: "See whether this is GCC or Apple clang" },
      ],
      install_zh:
        "命令行工具：`xcode-select --install`（这时 `gcc` 多半是 clang）。要 GNU GCC：`brew install gcc`，二进制常叫 `gcc-14` 而不是 `gcc`。",
      install_en:
        "Command Line Tools: `xcode-select --install` (then `gcc` is usually clang). GNU GCC: `brew install gcc`, often as `gcc-14`, not `gcc`.",
      uninstall_zh: "GNU 版：`brew uninstall gcc`。不要卸掉 xcode-select 的 clang，除非你知道在做什么。",
      uninstall_en: "GNU: `brew uninstall gcc`. Do not remove clang from xcode-select unless you mean to.",
      upgrade_zh: "`brew upgrade gcc`",
      upgrade_en: "`brew upgrade gcc`",
      env: {
        files: ["~/.zshrc"],
        path_zh:
          "`which gcc` 和 `gcc --version`。系统是 `/usr/bin/gcc`（clang 伪装）。brew 在 `/opt/homebrew/bin/gcc-14`。要默认 GNU，可在 `~/.zshrc` 写 `alias gcc=gcc-14`，然后 `source ~/.zshrc`。`echo $PATH` 确认 brew bin 在前。",
        path_en:
          "`which gcc` and `gcc --version`. System `/usr/bin/gcc` is clang in disguise. Brew is `/opt/homebrew/bin/gcc-14`. To default to GNU, `alias gcc=gcc-14` in `~/.zshrc`, then `source ~/.zshrc`. `echo $PATH` should list brew first.",
        chaos_zh:
          "教程写 gcc 是 GNU，你机器上却是 clang，报错格式和扩展都不同。`CC=gcc` 的 Makefile 实际在调 clang。把 `/usr/bin` 放在 brew 前面就永远用不到 gcc-14。",
        chaos_en:
          "Tutorials mean GNU gcc; yours may be clang, with different flags and errors. Makefiles with `CC=gcc` then invoke clang. `/usr/bin` ahead of brew hides `gcc-14`.",
        practices_zh:
          "先看 `gcc --version` 第一行。要 GNU 就明确写 `gcc-14`。别把会话 alias 当永久设置。",
        practices_en:
          "Read the first line of `gcc --version`. Call `gcc-14` explicitly for GNU. Do not rely on a session-only alias.",
      },
    },
    {
      id: "g++",
      cat: "compile",
      name: "g++",
      title_zh: "C++ 编译器",
      title_en: "C++ compiler",
      blurb_zh: "进入是编译并运行 C++；进程用 Ctrl-C 停。和 gcc 一样，系统 g++ 经常是 clang++。",
      blurb_en: "Enter is compile-and-run for C++; Ctrl-C stops it. Like gcc, system g++ is often clang++.",
      official: "https://gcc.gnu.org/",
      version_cmd: "g++ --version",
      enter: "g++ main.cpp -o main && ./main",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "g++ main.cpp -o main", zh: "编译", en: "Compile" },
        { c: "./main", zh: "运行", en: "Run" },
        { c: "g++ -std=c++17 -Wall main.cpp -o main", zh: "指定标准 + 警告", en: "Language standard + warnings" },
        { c: "g++ --version", zh: "确认是 GNU 还是 clang++", en: "Confirm GNU vs clang++" },
      ],
      install_zh: "`brew install gcc` 会带上 `g++-14`。系统 `g++` 仍可能是 clang++。",
      install_en: "`brew install gcc` also provides `g++-14`. System `g++` may still be clang++.",
      uninstall_zh: "`brew uninstall gcc`",
      uninstall_en: "`brew uninstall gcc`",
      upgrade_zh: "`brew upgrade gcc`",
      upgrade_en: "`brew upgrade gcc`",
      env: {
        files: ["~/.zshrc"],
        path_zh:
          "`which g++`；brew 的是 `/opt/homebrew/bin/g++-14`。需要时可 `alias g++=g++-14` 写进 `~/.zshrc` 再 `source ~/.zshrc`。`echo $PATH`。",
        path_en:
          "`which g++`; brew’s binary is `/opt/homebrew/bin/g++-14`. Optionally `alias g++=g++-14` in `~/.zshrc`, then `source ~/.zshrc`. Check `echo $PATH`.",
        chaos_zh:
          "和 gcc 同一类乱：clang++ 冒充 g++，C++ 标准和 libstdc++ / libc++ 混用。Makefile 的 `CXX=g++` 指错编译器。",
        chaos_en:
          "Same trap as gcc: clang++ posing as g++, mixing libstdc++ and libc++. `CXX=g++` in a Makefile hits the wrong compiler.",
        practices_zh:
          "写清楚 `g++-14` 或在项目 Makefile 里设 `CXX`。改 alias 后 source，不要只在当前窗口 alias。",
        practices_en:
          "Call `g++-14` or set `CXX` in the project Makefile. Persist aliases in `~/.zshrc` and source it.",
      },
    },
    {
      id: "cargo",
      cat: "compile",
      name: "cargo",
      title_zh: "Rust 构建工具",
      title_en: "Rust build tool",
      blurb_zh: "进入是 cargo run；正在跑的二进制用 Ctrl-C 停。这不是 REPL。",
      blurb_en: "Enter with cargo run; Ctrl-C stops the running binary. Not a REPL.",
      official: "https://doc.rust-lang.org/cargo/",
      version_cmd: "cargo --version",
      enter: "cargo run",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "cargo new hello", zh: "新建项目", en: "New project" },
        { c: "cargo build", zh: "编译", en: "Compile" },
        { c: "cargo run", zh: "编译并运行", en: "Build and run" },
        { c: "cargo test", zh: "测试", en: "Test" },
        { c: "cargo check", zh: "只类型检查，较快", en: "Type-check only, faster" },
      ],
      install_zh:
        "推荐 rustup（会装 cargo）：看 https://rustup.rs/ 。brew 也可以：`brew install rust`。rustup 会在 `~/.zshrc` 里 source `~/.cargo/env`。",
      install_en:
        "Prefer rustup (it ships cargo): https://rustup.rs/ . Homebrew: `brew install rust`. rustup sources `~/.cargo/env` from `~/.zshrc`.",
      uninstall_zh:
        "rustup：`rustup self uninstall`。brew：`brew uninstall rust`。可把 `~/.zshrc` 里 `source \"$HOME/.cargo/env\"` 那一行注释掉。",
      uninstall_en:
        "rustup: `rustup self uninstall`. Homebrew: `brew uninstall rust`. Comment `source \"$HOME/.cargo/env\"` in `~/.zshrc`.",
      upgrade_zh: "rustup：`rustup update`。brew：`brew upgrade rust`。",
      upgrade_en: "rustup: `rustup update`. Homebrew: `brew upgrade rust`.",
      env: {
        files: ["~/.cargo/env", "~/.zshrc", "~/.cargo/config.toml"],
        path_zh:
          "rustup 安装后应有：`source \"$HOME/.cargo/env\"` 写在 `~/.zshrc`。查：`echo $PATH` 里要有 `$HOME/.cargo/bin`，`which cargo` 指向那里。改完 `source ~/.zshrc`。",
        path_en:
          "After rustup, `~/.zshrc` should contain `source \"$HOME/.cargo/env\"`. `echo $PATH` must include `$HOME/.cargo/bin`, and `which cargo` should point there. Then `source ~/.zshrc`.",
        chaos_zh:
          "装了 rustup 却没 source `~/.cargo/env`，新开 Terminal 也 `cargo: command not found`。brew rust 和 rustup 两套 cargo 抢 PATH。只在当前窗口 export 了 CARGO_HOME，下次又丢。",
        chaos_en:
          "rustup without sourcing `~/.cargo/env` yields `cargo: command not found` in a new Terminal. Brew rust and rustup then ship two cargos. A session-only CARGO_HOME disappears next time.",
        practices_zh:
          "`~/.zshrc` 里只 source 一次 `~/.cargo/env`。`which cargo` 核对。不要 brew 和 rustup 混装。PATH 改动写入文件再 source，不要只 export。",
        practices_en:
          "Source `~/.cargo/env` once in `~/.zshrc`. Check `which cargo`. Do not mix brew rust with rustup. Persist PATH in the file, then source — do not export and forget.",
      },
    },
    {
      id: "go",
      cat: "compile",
      name: "go",
      title_zh: "Go 编译器",
      title_en: "Go compiler",
      blurb_zh: "进入是 go run；跑着的程序 Ctrl-C 停。用 go env 看 GOROOT / GOPATH，不要手改 GOROOT。",
      blurb_en: "Enter with go run; Ctrl-C stops it. Use go env for GOROOT/GOPATH; do not hand-edit GOROOT.",
      official: "https://go.dev/",
      version_cmd: "go version",
      enter: "go run .",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "go run .", zh: "在模块根目录编译并运行", en: "Build and run at the module root" },
        { c: "go build", zh: "编译", en: "Build" },
        { c: "go env GOPATH GOROOT", zh: "查看两个关键路径", en: "Print the two key paths" },
        { c: "go mod init example.com/hi", zh: "新建模块", en: "New module" },
        { c: "go test ./...", zh: "测试", en: "Test" },
      ],
      install_zh: "`brew install go`",
      install_en: "`brew install go`",
      uninstall_zh: "`brew uninstall go`",
      uninstall_en: "`brew uninstall go`",
      upgrade_zh: "`brew upgrade go`",
      upgrade_en: "`brew upgrade go`",
      env: {
        files: ["~/.zshrc"],
        path_zh:
          "`which go` 应为 `/opt/homebrew/bin/go`。`go env GOPATH GOROOT`。模块模式下源码不必放 GOPATH。若要用 `go install` 出来的工具，把 `$(go env GOPATH)/bin` 加进 PATH：写在 `~/.zshrc`，然后 `source ~/.zshrc`。查：`echo $PATH`。",
        path_en:
          "`which go` should be `/opt/homebrew/bin/go`. `go env GOPATH GOROOT`. Modules do not require keeping source inside GOPATH. For `go install` binaries, add `$(go env GOPATH)/bin` to PATH in `~/.zshrc`, then `source ~/.zshrc`. Check `echo $PATH`.",
        chaos_zh:
          "旧教程 `export GOROOT=...` 指到已删除的目录，`go` 立刻坏。GOPATH 和模块混用会找到另一份 vendor。PATH 没有 `$(go env GOPATH)/bin` 时刚装的 `staticcheck` 之类 command not found。",
        chaos_en:
          "Old `export GOROOT=...` pointing at a removed tree breaks `go` immediately. Mixing GOPATH mode with modules picks the wrong vendor. Without `$(go env GOPATH)/bin` on PATH, freshly installed tools are “not found.”",
        practices_zh:
          "GOROOT 让 go 自己管。需要 GOPATH/bin 就在 `~/.zshrc` 加一行，source 一下。先 `go env` 再怀疑 PATH。不要会话里 export 完就走。",
        practices_en:
          "Leave GOROOT to Go. Add GOPATH/bin in `~/.zshrc` if you need those tools, then source. Run `go env` before blaming PATH. Do not export only for one session.",
      },
    },
    {
      id: "sqlite3",
      cat: "db",
      name: "sqlite3",
      title_zh: "SQLite 命令行",
      title_en: "SQLite CLI",
      blurb_zh: "进去 sqlite3 文件；出来 .quit 或 Ctrl-D。没有服务器，关掉文件就离开。",
      blurb_en: "Enter with sqlite3 file; leave with .quit or Ctrl-D. No server — leaving the file is enough.",
      official: "https://www.sqlite.org/",
      version_cmd: "sqlite3 --version",
      enter: "sqlite3 db.sqlite",
      quit: ".quit",
      stuck: "Ctrl-C",
      inner: [
        { c: ".quit", zh: "离开", en: "Quit" },
        { c: ".tables", zh: "列出表", en: "List tables" },
        { c: ".schema", zh: "看结构", en: "Show schema" },
        { c: ".headers on", zh: "显示列名", en: "Show column names" },
        { c: ".mode column", zh: "对齐输出", en: "Aligned output" },
      ],
      install_zh: "macOS 自带 sqlite3。较新：`brew install sqlite`。",
      install_en: "macOS already has sqlite3. Newer: `brew install sqlite`.",
      uninstall_zh: "不要卸系统 sqlite3。brew 版：`brew uninstall sqlite`。",
      uninstall_en: "Do not remove system sqlite3. Homebrew: `brew uninstall sqlite`.",
      upgrade_zh: "`brew upgrade sqlite`",
      upgrade_en: "`brew upgrade sqlite`",
      env: {
        files: ["~/.sqliterc"],
        path_zh:
          "`which sqlite3`。brew 版可能是 `/opt/homebrew/opt/sqlite/bin/sqlite3`（keg-only）。需要新版时按 `brew info sqlite` 把那层 bin 加进 PATH，写进 `~/.zshrc` 再 `source ~/.zshrc`。`echo $PATH`。",
        path_en:
          "`which sqlite3`. Brew’s build may be keg-only at `/opt/homebrew/opt/sqlite/bin/sqlite3`. Follow `brew info sqlite` to put that bin on PATH in `~/.zshrc`, then `source ~/.zshrc`. Check `echo $PATH`.",
        chaos_zh:
          "系统 sqlite3 是旧版，教程里的 JSON 函数可能没有。打开了只读文件会让写入失败，像“卡住”。Ctrl-C 打断的是当前 SQL，不是退出。",
        chaos_en:
          "System sqlite3 is old; tutorial JSON functions may be missing. A read-only file makes writes fail and looks stuck. Ctrl-C cancels the current SQL, it does not quit.",
        practices_zh:
          "要新功能就用 brew 的路径。点命令（`.quit`）不要忘了点。退出用 `.quit`，别依赖关窗口。",
        practices_en:
          "Use brew’s path for newer SQL. Dot-commands need the leading dot. Quit with `.quit` instead of killing the window.",
      },
    },
    {
      id: "mysql",
      cat: "db",
      name: "mysql",
      title_zh: "MySQL 客户端",
      title_en: "MySQL client",
      blurb_zh: "进去 mysql -u root -p；出来 exit 或 \\q。先要本机服务在跑。",
      blurb_en: "Enter with mysql -u root -p; leave with exit or \\q. The local server must already be running.",
      official: "https://dev.mysql.com/doc/",
      version_cmd: "mysql --version",
      enter: "mysql -u root -p",
      quit: "exit",
      stuck: "Ctrl-C",
      inner: [
        { c: "exit", zh: "离开客户端（\\q 也可以）", en: "Leave the client (or \\q)" },
        { c: "SHOW DATABASES;", zh: "列出库（别忘分号）", en: "List databases (semicolon required)" },
        { c: "USE dbname;", zh: "选库", en: "Select a database" },
        { c: "SHOW TABLES;", zh: "列表", en: "List tables" },
      ],
      install_zh:
        "`brew install mysql`，然后 `brew services start mysql`。客户端命令是 `mysql`。",
      install_en:
        "`brew install mysql`, then `brew services start mysql`. The client is `mysql`.",
      uninstall_zh: "`brew services stop mysql` 然后 `brew uninstall mysql`。数据目录默认在 `/opt/homebrew/var/mysql`，卸公式不会总删数据。",
      uninstall_en: "`brew services stop mysql` then `brew uninstall mysql`. Data often stays in `/opt/homebrew/var/mysql`.",
      upgrade_zh: "`brew upgrade mysql`，升级前先 `brew services stop mysql`。",
      upgrade_en: "`brew upgrade mysql`. Stop the service first.",
      env: {
        files: ["~/.my.cnf"],
        path_zh:
          "`which mysql` 应为 `/opt/homebrew/bin/mysql`。`echo $PATH`。可选 `~/.my.cnf` 写 user/password（权限 600）。socket 常见 `/tmp/mysql.sock`。",
        path_en:
          "`which mysql` should be `/opt/homebrew/bin/mysql`. Check `echo $PATH`. Optional `~/.my.cnf` for user/password (mode 600). Socket is often `/tmp/mysql.sock`.",
        chaos_zh:
          "服务没启动时 `Can't connect to local MySQL server through socket`。PATH 指到另一个 mysql（系统或 Docker）。`~/.my.cnf` 权限太开会被忽略。",
        chaos_en:
          "If the service is down: `Can't connect … through socket`. PATH may hit another mysql (OS or Docker). A loose `~/.my.cnf` is ignored.",
        practices_zh:
          "先 `brew services list`。cnf 文件 `chmod 600`。客户端退出用 `exit`，服务停用 `brew services stop mysql`。不要把密码写进 `~/.zshrc`。",
        practices_en:
          "Check `brew services list`. `chmod 600` on cnf. `exit` leaves the client; `brew services stop mysql` stops the server. Do not put the password in `~/.zshrc`.",
      },
    },
    {
      id: "psql",
      cat: "db",
      name: "psql",
      title_zh: "PostgreSQL 客户端",
      title_en: "PostgreSQL client",
      blurb_zh: "进去 psql；出来 \\q。连不上时先看 PGHOST 和 brew 是否把 bin 放进 PATH。",
      blurb_en: "Enter with psql; leave with \\q. If it cannot connect, check PGHOST and whether brew put bin on PATH.",
      official: "https://www.postgresql.org/",
      version_cmd: "psql --version",
      enter: "psql postgres",
      quit: "\\q",
      stuck: "Ctrl-C",
      inner: [
        { c: "\\q", zh: "离开", en: "Quit" },
        { c: "\\l", zh: "列出数据库", en: "List databases" },
        { c: "\\dt", zh: "列出当前库的表", en: "List tables in this database" },
        { c: "\\d tablename", zh: "看表结构", en: "Describe a table" },
        { c: "\\?", zh: "斜杠命令帮助", en: "Help for slash commands" },
      ],
      install_zh:
        "`brew install postgresql@16`，再按 `brew info postgresql@16` 把 keg-only 的 bin 加进 PATH，然后 `brew services start postgresql@16`。",
      install_en:
        "`brew install postgresql@16`, put the keg-only bin on PATH as `brew info postgresql@16` says, then `brew services start postgresql@16`.",
      uninstall_zh: "`brew services stop postgresql@16` 然后 `brew uninstall postgresql@16`。",
      uninstall_en: "`brew services stop postgresql@16` then `brew uninstall postgresql@16`.",
      upgrade_zh: "`brew upgrade postgresql@16`",
      upgrade_en: "`brew upgrade postgresql@16`",
      env: {
        files: ["~/.psqlrc", "~/.pgpass"],
        path_zh:
          "brew 的 PostgreSQL 常是 keg-only：`/opt/homebrew/opt/postgresql@16/bin` 必须进 PATH。写进 `~/.zshrc`，`source ~/.zshrc`，再 `echo $PATH` 和 `which psql`。环境变量：`PGHOST`、`PGUSER`、`PGDATABASE`。`echo $PGHOST $PGUSER $PGDATABASE`。",
        path_en:
          "Brew PostgreSQL is often keg-only: `/opt/homebrew/opt/postgresql@16/bin` must be on PATH. Put it in `~/.zshrc`, `source ~/.zshrc`, then `echo $PATH` and `which psql`. Connection vars: `PGHOST`, `PGUSER`, `PGDATABASE`. Print them with `echo $PGHOST $PGUSER $PGDATABASE`.",
        chaos_zh:
          "`psql: command not found` 几乎总是 keg-only 没加 PATH。PGHOST 指到 docker 或 Postgres.app 的套接字，连的不是 brew 那套。`.pgpass` 权限不是 600 会被拒绝。",
        chaos_en:
          "`psql: command not found` usually means the keg-only bin is missing from PATH. PGHOST may point at Docker or Postgres.app, not brew. `.pgpass` is rejected unless mode 600.",
        practices_zh:
          "`brew info postgresql@16` 的 PATH 行原样放进 `~/.zshrc` 再 source。`~/.psqlrc` 可放 `\\timing`。`~/.pgpass` 必须 `chmod 600`。不要只在会话里 export PGHOST。",
        practices_en:
          "Copy the PATH line from `brew info postgresql@16` into `~/.zshrc` and source it. `~/.psqlrc` can hold `\\timing`. `chmod 600 ~/.pgpass`. Do not export PGHOST only in one session.",
      },
    },
    {
      id: "redis-cli",
      cat: "db",
      name: "redis-cli",
      title_zh: "Redis 客户端",
      title_en: "Redis client",
      blurb_zh: "进去 redis-cli；出来 quit。先要 redis-server 在跑，本机默认 6379。",
      blurb_en: "Enter with redis-cli; leave with quit. redis-server must be up; local default is 6379.",
      official: "https://redis.io/docs/latest/develop/tools/cli/",
      version_cmd: "redis-cli --version",
      enter: "redis-cli",
      quit: "quit",
      stuck: "Ctrl-C",
      inner: [
        { c: "PING", zh: "应返回 PONG", en: "Should reply PONG" },
        { c: "quit", zh: "离开客户端", en: "Leave the client" },
        { c: "SET key value", zh: "写入", en: "Write a key" },
        { c: "GET key", zh: "读取", en: "Read a key" },
      ],
      install_zh: "`brew install redis`，然后 `brew services start redis`。",
      install_en: "`brew install redis`, then `brew services start redis`.",
      uninstall_zh: "`brew services stop redis` 然后 `brew uninstall redis`。",
      uninstall_en: "`brew services stop redis` then `brew uninstall redis`.",
      upgrade_zh: "`brew upgrade redis`",
      upgrade_en: "`brew upgrade redis`",
      env: {
        files: [],
        path_zh:
          "`which redis-cli` 应为 `/opt/homebrew/bin/redis-cli`。`echo $PATH`。连远程：`redis-cli -h host -p 6379`。没有单独的 rc 文件也能用。",
        path_en:
          "`which redis-cli` should be `/opt/homebrew/bin/redis-cli`. Check `echo $PATH`. Remote: `redis-cli -h host -p 6379`. No rc file is required.",
        chaos_zh:
          "服务没启动时 Connection refused。 brews 服务和 Docker 的 6379 抢端口，你连到另一套 Redis，数据“消失”。",
        chaos_en:
          "Connection refused means the server is down. Brew and Docker both bind 6379, so you may be talking to the other Redis and “lose” keys.",
        practices_zh:
          "`brew services list` 看 redis。先 `PING`。退出客户端用 `quit`，停服务用 `brew services stop redis`。",
        practices_en:
          "Check `brew services list`. Start with `PING`. `quit` leaves the client; `brew services stop redis` stops the server.",
      },
    },
    {
      id: "jupyter",
      cat: "nb",
      name: "jupyter",
      title_zh: "Jupyter Notebook 服务器",
      title_en: "Jupyter Notebook server",
      blurb_zh: "进去是 jupyter notebook；关掉浏览器标签不会停服务器。回到 Terminal 连按两次 Ctrl-C。",
      blurb_en: "Enter with jupyter notebook. Closing the browser tab does not stop it. In Terminal, Ctrl-C twice.",
      official: "https://jupyter.org/",
      version_cmd: "jupyter --version",
      enter: "jupyter notebook",
      quit: "Ctrl-C twice",
      stuck: "Ctrl-C twice",
      inner: [
        { c: "jupyter notebook", zh: "启动服务器，终端会打印 localhost:8888 和 token", en: "Start the server; Terminal prints localhost:8888 and a token" },
        { c: "Ctrl-C", zh: "第一次打断，第二次确认退出服务器", en: "Once to interrupt, twice to confirm shutting the server" },
        { c: "jupyter notebook list", zh: "列出还在跑的服务器", en: "List running servers" },
        { c: "jupyter notebook --port 8889", zh: "8888 被占用时换端口", en: "Use another port if 8888 is taken" },
      ],
      install_zh:
        "先进入项目 venv，再 `python3 -m pip install notebook`。或 `brew install jupyterlab`（会带 notebook 命令）。不要 sudo pip。",
      install_en:
        "Activate the project venv, then `python3 -m pip install notebook`. Or `brew install jupyterlab` (provides `jupyter`). Never sudo pip.",
      uninstall_zh: "venv 里：`python3 -m pip uninstall notebook`。brew：`brew uninstall jupyterlab`。",
      uninstall_en: "In a venv: `python3 -m pip uninstall notebook`. Homebrew: `brew uninstall jupyterlab`.",
      upgrade_zh: "`python3 -m pip install -U notebook` 或 `brew upgrade jupyterlab`。",
      upgrade_en: "`python3 -m pip install -U notebook` or `brew upgrade jupyterlab`.",
      env: {
        files: ["~/.jupyter/jupyter_notebook_config.py"],
        path_zh:
          "`jupyter` 跟着当时的 python。先 `source .venv/bin/activate`，`which jupyter` 应在 venv 的 bin。浏览器打开 Terminal 打印的 `http://localhost:8888/?token=...`。token 在启动它的那个 Terminal，不在别处。",
        path_en:
          "`jupyter` follows the current python. `source .venv/bin/activate` so `which jupyter` is the venv bin. Open the `http://localhost:8888/?token=...` URL printed in that Terminal — the token lives there.",
        chaos_zh:
          "关掉标签页，8888 还在听，下次启动说端口占用。brew / conda / venv 各有一份 jupyter，内核 python 和你以为的不一样。token 复制错会一直停在登录页。conda init 之后 `jupyter` 可能变成 base 环境的。",
        chaos_en:
          "Closing the tab leaves port 8888 bound, so the next start says the port is in use. brew / conda / venv each ship a jupyter, so the kernel python is not the one you think. A wrong token sits on the login page. After `conda init`, `jupyter` may be base’s copy.",
        practices_zh:
          "看 Terminal 里的 URL+token。退出必须回到那个 Terminal，Ctrl-C 两次。`jupyter notebook list` 查残留。venv 用完 `deactivate`。不要混用 conda base 和 brew jupyter。",
        practices_en:
          "Trust the Terminal URL+token. Quit in that same Terminal with Ctrl-C twice. `jupyter notebook list` finds leftovers. `deactivate` the venv when done. Do not mix conda base with brew jupyter.",
      },
    },
    {
      id: "jupyter-lab",
      cat: "nb",
      name: "jupyter-lab",
      title_zh: "JupyterLab 服务器",
      title_en: "JupyterLab server",
      blurb_zh: "进去 jupyter lab；退出同样是 Terminal 里 Ctrl-C 两次。界面关了服务器还在。",
      blurb_en: "Enter with jupyter lab; quit with Ctrl-C twice in Terminal. Closing the UI leaves the server running.",
      official: "https://jupyterlab.readthedocs.io/",
      version_cmd: "jupyter lab --version",
      enter: "jupyter lab",
      quit: "Ctrl-C twice",
      stuck: "Ctrl-C twice",
      inner: [
        { c: "jupyter lab", zh: "启动 Lab，Terminal 给 localhost:8888 + token", en: "Start Lab; Terminal prints localhost:8888 + token" },
        { c: "Ctrl-C", zh: "连按两次才停服务器", en: "Twice to stop the server" },
        { c: "jupyter lab list", zh: "列出还在跑的 Lab", en: "List running Lab servers" },
        { c: "jupyter lab --port 8889", zh: "换端口", en: "Another port" },
      ],
      install_zh:
        "venv：`python3 -m pip install jupyterlab`。或 `brew install jupyterlab`。不要 sudo pip。",
      install_en:
        "venv: `python3 -m pip install jupyterlab`. Or `brew install jupyterlab`. Never sudo pip.",
      uninstall_zh: "`python3 -m pip uninstall jupyterlab` 或 `brew uninstall jupyterlab`。",
      uninstall_en: "`python3 -m pip uninstall jupyterlab` or `brew uninstall jupyterlab`.",
      upgrade_zh: "`python3 -m pip install -U jupyterlab` 或 `brew upgrade jupyterlab`。",
      upgrade_en: "`python3 -m pip install -U jupyterlab` or `brew upgrade jupyterlab`.",
      env: {
        files: ["~/.jupyter/jupyter_lab_config.py"],
        path_zh:
          "和 notebook 一样：`which jupyter` 必须是你要的那套 python。浏览器地址是 Terminal 里的 `http://localhost:8888/lab?token=...`。",
        path_en:
          "Same as notebook: `which jupyter` must be the python you intend. The browser URL is the Terminal’s `http://localhost:8888/lab?token=...`.",
        chaos_zh:
          "Lab 和 Notebook 能同时占 8888。关窗口 ≠ 停服务器。conda 的 jupyter-lab 和 venv 的内核对不上。",
        chaos_en:
          "Lab and Notebook can both grab 8888. Closing the window does not stop the server. conda’s jupyter-lab may not match a venv kernel.",
        practices_zh:
          "Ctrl-C 两次停。token 只从启动它的 Terminal 复制。一个环境一套 Lab，不要混 brew 和 conda。",
        practices_en:
          "Ctrl-C twice to stop. Copy the token from the launching Terminal only. One Lab per environment; do not mix brew and conda.",
      },
    },
    {
      id: "brew",
      cat: "pkg",
      name: "brew",
      title_zh: "Homebrew 包管理",
      title_en: "Homebrew package manager",
      blurb_zh: "不是 REPL：敲一条命令就回到 zsh。Apple Silicon 必须先把 /opt/homebrew/bin 放进 PATH。",
      blurb_en: "Not a REPL: one command and you are back in zsh. Apple Silicon needs /opt/homebrew/bin on PATH.",
      official: "https://brew.sh/",
      version_cmd: "brew --version",
      enter: "brew --version",
      quit: "exit",
      stuck: "Ctrl-C",
      inner: [
        { c: "brew install pkg", zh: "安装", en: "Install" },
        { c: "brew uninstall pkg", zh: "卸载", en: "Uninstall" },
        { c: "brew upgrade pkg", zh: "升级一个公式", en: "Upgrade one formula" },
        { c: "brew doctor", zh: "检查 PATH 和常见损坏", en: "Check PATH and common breakage" },
        { c: "eval \"$(/opt/homebrew/bin/brew shellenv)\"", zh: "Apple Silicon 把 brew 放进当前壳", en: "Put brew on PATH in this Apple Silicon shell" },
      ],
      install_zh:
        "按 brew.sh 的一行安装脚本。装完在 `~/.zshrc` 写入：`eval \"$(/opt/homebrew/bin/brew shellenv)\"`，然后 `source ~/.zshrc`。Intel 旧 Mac 是 `/usr/local/bin`。",
      install_en:
        "Use the one-liner on brew.sh. Then put `eval \"$(/opt/homebrew/bin/brew shellenv)\"` in `~/.zshrc` and `source ~/.zshrc`. Intel Macs use `/usr/local/bin`.",
      uninstall_zh: "官方卸载脚本见 docs.brew.sh。不要只删 `/opt/homebrew` 而留下 zshrc 里的 shellenv。",
      uninstall_en: "Use the official uninstall script from docs.brew.sh. Do not delete `/opt/homebrew` while leaving shellenv in zshrc.",
      upgrade_zh: "`brew update` 然后 `brew upgrade`。",
      upgrade_en: "`brew update` then `brew upgrade`.",
      env: {
        files: ["~/.zshrc"],
        path_zh:
          "Apple Silicon 标准写法，放在 `~/.zshrc` 靠前、单独一块：`eval \"$(/opt/homebrew/bin/brew shellenv)\"`。查：`echo $PATH` 应看到 `/opt/homebrew/bin` 在 `/usr/bin` 前；`which brew` 为 `/opt/homebrew/bin/brew`。",
        path_en:
          "On Apple Silicon, one early `~/.zshrc` block: `eval \"$(/opt/homebrew/bin/brew shellenv)\"`. `echo $PATH` should list `/opt/homebrew/bin` before `/usr/bin`; `which brew` is `/opt/homebrew/bin/brew`.",
        chaos_zh:
          "没写 shellenv 时新 Terminal 直接 `brew: command not found`。写了两遍 PATH 会重复很长。conda/nvm 插到 brew 前面，你装的 python/node 不是 brew 那份。`brew doctor` 会报这些。",
        chaos_en:
          "Without shellenv, a new Terminal says `brew: command not found`. Pasting it twice duplicates PATH. conda/nvm prepended ahead of brew hides brew’s python/node. `brew doctor` reports this.",
        practices_zh:
          "shellenv 只写一次。改完 `source ~/.zshrc`。出问题先 `brew doctor`。不要在会话里 eval 完就以为以后都有。nvm/conda 各自己的块，不要和 brew 揉在一起。",
        practices_en:
          "Write shellenv once. Then `source ~/.zshrc`. Start with `brew doctor`. A session-only eval does not survive the next tab. Keep nvm/conda in their own blocks.",
      },
    },
    {
      id: "pip",
      cat: "pkg",
      name: "pip",
      title_zh: "Python 包安装器",
      title_en: "Python package installer",
      blurb_zh: "永远 python3 -m pip，不要裸奔 pip，更不要 sudo pip。它不是 REPL。",
      blurb_en: "Always python3 -m pip, never bare pip, never sudo pip. Not a REPL.",
      official: "https://pip.pypa.io/",
      version_cmd: "python3 -m pip --version",
      enter: "python3 -m pip --version",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "python3 -m pip install pkg", zh: "装到当前这个 python", en: "Install into this python" },
        { c: "python3 -m pip -V", zh: "看 pip 绑的是哪一个 python", en: "See which python this pip belongs to" },
        { c: "python3 -m pip freeze", zh: "列出已装包", en: "List installed packages" },
        { c: "python3 -m pip uninstall pkg", zh: "卸载", en: "Uninstall" },
      ],
      install_zh:
        "brew python 已带 pip。确保 venv：`python3 -m venv .venv` 且已 `source .venv/bin/activate`。缺 pip 时：`python3 -m ensurepip --upgrade`。",
      install_en:
        "Brew python already includes pip. Prefer a venv: `python3 -m venv .venv` and `source .venv/bin/activate`. If missing: `python3 -m ensurepip --upgrade`.",
      uninstall_zh: "不要卸 pip 本身。卸包：`python3 -m pip uninstall pkg`。",
      uninstall_en: "Do not remove pip itself. Uninstall a package with `python3 -m pip uninstall pkg`.",
      upgrade_zh: "`python3 -m pip install -U pip`（在 venv 里做）。",
      upgrade_en: "`python3 -m pip install -U pip` (inside the venv).",
      env: {
        files: ["~/.pip/pip.conf", "~/.config/pip/pip.conf"],
        path_zh:
          "pip 不该单独进 PATH 当“另一个工具”。查绑定：`python3 -m pip -V` 和 `which python3`。`which pip` 经常指错（conda 或旧脚本）。",
        path_en:
          "pip should not be a separate PATH citizen. Check binding with `python3 -m pip -V` and `which python3`. `which pip` is often wrong (conda or an old script).",
        chaos_zh:
          "`pip install` 装进 conda，`python3` 却是 brew，import 失败。`sudo pip3 install` 破坏系统 Python。多个 pip 在 PATH 里，名字叫 pip 的不是你以为的那套。",
        chaos_en:
          "`pip install` into conda while `python3` is brew → imports fail. `sudo pip3 install` damages the OS Python. Several pips on PATH, and the name `pip` is not the one you think.",
        practices_zh:
          "永远 `python3 -m pip`。先 activate venv。从不用 sudo pip。看 `python3 -m pip -V` 再装。不要把 pip 的 bin 再 export 一遍。",
        practices_en:
          "Always `python3 -m pip`. Activate the venv first. Never sudo pip. Read `python3 -m pip -V` before installing. Do not export pip’s bin separately.",
      },
    },
    {
      id: "npm",
      cat: "pkg",
      name: "npm",
      title_zh: "Node 包管理",
      title_en: "Node package manager",
      blurb_zh: "跟 node 走。prefix 和 nvm 决定全局包落在哪；和 brew node 抢 PATH 时全局命令会指错。",
      blurb_en: "Follows node. prefix and nvm decide where globals land; fighting brew node makes global commands point wrong.",
      official: "https://docs.npmjs.com/",
      version_cmd: "npm --version",
      enter: "npm --version",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "npm init -y", zh: "新建 package.json", en: "Create package.json" },
        { c: "npm install", zh: "按 package.json 安装", en: "Install from package.json" },
        { c: "npm run", zh: "列出脚本", en: "List scripts" },
        { c: "npx cmd", zh: "跑本地或临时包，不必 -g", en: "Run a local or ephemeral package, no -g" },
        { c: "npm config get prefix", zh: "看全局安装前缀", en: "Show the global prefix" },
      ],
      install_zh: "随 node 来。`brew install node` 或 nvm 装 node 都会带 npm。不要单独乱装一份旧 npm。",
      install_en: "Ships with node. `brew install node` or nvm both provide npm. Do not install a second ancient npm.",
      uninstall_zh: "卸 node 即可（brew 或 nvm）。不要只删 npm 留着残缺 node。",
      uninstall_en: "Uninstall node (brew or nvm). Do not delete npm and leave a broken node.",
      upgrade_zh: "随 node 升级。一般不要 `npm install -g npm`，容易和 brew/nvm 打架。",
      upgrade_en: "Upgrade with node. Avoid `npm install -g npm`; it fights brew/nvm.",
      env: {
        files: ["~/.npmrc", "~/.zshrc", "~/.nvm/nvm.sh"],
        path_zh:
          "`which npm` 必须和 `which node` 同一棵树。nvm：`~/.nvm/versions/node/vXX/bin`。brew：`/opt/homebrew/bin`。`npm config get prefix` 看全局目录。`echo $PATH`。",
        path_en:
          "`which npm` must match `which node`. nvm: `~/.nvm/versions/node/vXX/bin`. brew: `/opt/homebrew/bin`. `npm config get prefix` shows the global dir. Check `echo $PATH`.",
        chaos_zh:
          "nvm 的 node + brew 的 npm（或反过来）：全局包装到一边，命令在另一边 not found。`prefix=/usr/local` 需要 sudo，在 Apple Silicon 上更乱。`.npmrc` 里乱设 prefix 后 nvm 切换版本失效。",
        chaos_en:
          "nvm’s node plus brew’s npm (or the reverse): globals install on one side, commands missing on the other. `prefix=/usr/local` wants sudo and is worse on Apple Silicon. A custom prefix in `.npmrc` breaks nvm version switches.",
        practices_zh:
          "node 只留 nvm 或 brew 一条。项目用本地 `npx`，少 `-g`。改 prefix 前先 `npm config get prefix`。nvm 块单独放在 `~/.zshrc`。改完 source。",
        practices_en:
          "One node line: nvm or brew. Prefer local `npx` over `-g`. Read `npm config get prefix` before changing it. Keep the nvm block separate in `~/.zshrc`, then source.",
      },
    },
    {
      id: "conda",
      cat: "pkg",
      name: "conda",
      title_zh: "Conda 环境管理",
      title_en: "Conda environment manager",
      blurb_zh: "进去 conda activate；出来 conda deactivate。conda init 会改写 ~/.zshrc，这是 Terminal 乱局的常见源头。",
      blurb_en: "Enter with conda activate; leave with conda deactivate. conda init rewrites ~/.zshrc — a common Terminal-chaos source.",
      official: "https://docs.conda.io/",
      version_cmd: "conda --version",
      enter: "conda activate name",
      quit: "conda deactivate",
      stuck: "conda deactivate",
      inner: [
        { c: "conda deactivate", zh: "退出当前环境；可连用直到提示符没有 (env)", en: "Leave the env; repeat until (env) is gone" },
        { c: "conda env list", zh: "列出环境", en: "List environments" },
        { c: "conda create -n name python=3.12", zh: "新建环境", en: "Create an environment" },
        { c: "conda config --set auto_activate_base false", zh: "禁止一打开 Terminal 就进 (base)", en: "Stop auto-activating (base) on every Terminal" },
      ],
      install_zh:
        "建议 Miniconda 或 `brew install miniconda`。装完若跑了 `conda init zsh`，它会在 `~/.zshrc` 末尾写入 `# >>> conda initialize >>>` 整块。",
      install_en:
        "Prefer Miniconda or `brew install miniconda`. If you run `conda init zsh`, it appends a `# >>> conda initialize >>>` block to `~/.zshrc`.",
      uninstall_zh:
        "先 `conda deactivate` 到干净。再按安装器的 uninstall，或 `brew uninstall miniconda`。然后打开 `~/.zshrc`，注释掉 conda initialize 整块，`source ~/.zshrc`。",
      uninstall_en:
        "`conda deactivate` until clean, then the installer’s uninstall or `brew uninstall miniconda`. Comment out the conda initialize block in `~/.zshrc` and `source ~/.zshrc`.",
      upgrade_zh: "`conda update conda`（在 base 里）。brew 装的：也可 `brew upgrade miniconda`。",
      upgrade_en: "`conda update conda` (in base). Homebrew install: `brew upgrade miniconda`.",
      env: {
        files: ["~/.zshrc", "~/.condarc"],
        path_zh:
          "激活后 PATH 最前面变成 `…/envs/name/bin`。查：`echo $PATH`、`which python`、`conda info --envs`。退出：`conda deactivate`。不要把 conda 的 bin 再手写进 PATH。",
        path_en:
          "After activate, PATH starts with `…/envs/name/bin`. Check `echo $PATH`, `which python`, `conda info --envs`. Leave with `conda deactivate`. Do not also hard-code conda’s bin onto PATH.",
        chaos_zh:
          "`conda init zsh` 改写 `~/.zshrc`：每次开 Terminal 自动 `conda activate base`，提示符变成 (base)，`python3`/`pip`/`jupyter` 全变成 conda 的，brew 装的命令像“消失”或指错。要撤销：1) `conda deactivate` 直到没有环境；2) `conda config --set auto_activate_base false`；3) 打开 `~/.zshrc`，把 `# >>> conda initialize >>>` 到 `# <<< conda initialize <<<` 整段注释掉（不要删 brew 的 shellenv）；4) `source ~/.zshrc`。",
        chaos_en:
          "`conda init zsh` rewrites `~/.zshrc` so every Terminal auto-runs `conda activate base`. The prompt becomes (base) and `python3`/`pip`/`jupyter` become conda’s — brew commands look missing or wrong. Undo: 1) `conda deactivate` until none; 2) `conda config --set auto_activate_base false`; 3) in `~/.zshrc` comment the block from `# >>> conda initialize >>>` through `# <<< conda initialize <<<` (leave brew’s shellenv); 4) `source ~/.zshrc`.",
        practices_zh:
          "不需要 conda 就不要 init。需要时关掉 auto_activate_base。brew / nvm / conda 在 zshrc 里各一块。用完 `conda deactivate`。改 zshrc 后 source，不要只在会话里 export PATH 把 conda 挪开。",
        practices_en:
          "Skip `conda init` if you do not need it. Disable auto_activate_base if you do. Separate brew / nvm / conda blocks in zshrc. `conda deactivate` when finished. Source zshrc after edits; do not export PATH in one session to hide conda.",
      },
    },
    {
      id: "apt",
      cat: "pkg",
      name: "apt",
      title_zh: "Debian/Ubuntu 包管理",
      title_en: "Debian/Ubuntu package manager",
      blurb_zh: "macOS 没有 apt，请用 brew。这页留给你在 Linux 机器上：进去就是一条 apt 命令，不是 REPL。",
      blurb_en: "macOS has no apt — use brew. This card is for Linux: apt is one-shot, not a REPL.",
      official: "https://wiki.debian.org/Apt",
      version_cmd: "apt --version",
      enter: "sudo apt update",
      quit: "Ctrl-C",
      stuck: "Ctrl-C",
      inner: [
        { c: "sudo apt update", zh: "刷新索引，先做这一步", en: "Refresh the index first" },
        { c: "sudo apt install pkg", zh: "安装", en: "Install" },
        { c: "sudo apt remove pkg", zh: "卸载", en: "Remove" },
        { c: "sudo apt upgrade", zh: "升级已装包", en: "Upgrade installed packages" },
        { c: "sudo yum install pkg / sudo dnf install pkg", zh: "RHEL/Fedora 对应：yum 或 dnf，不是 apt", en: "On RHEL/Fedora use yum or dnf, not apt" },
      ],
      install_zh:
        "macOS：没有 apt，用 `brew`。Debian/Ubuntu：系统自带。不要在 Mac 上强装 apt 去冒充 Linux。",
      install_en:
        "macOS: no apt, use `brew`. Debian/Ubuntu: already installed. Do not fake apt on a Mac.",
      uninstall_zh: "不要卸载系统 apt。卸软件：`sudo apt remove pkg`。",
      uninstall_en: "Do not remove apt itself. Remove software with `sudo apt remove pkg`.",
      upgrade_zh: "`sudo apt update && sudo apt upgrade`",
      upgrade_en: "`sudo apt update && sudo apt upgrade`",
      env: {
        files: ["/etc/apt/sources.list", "/etc/apt/sources.list.d/"],
        path_zh:
          "apt 不靠你的用户 PATH 装系统包。Mac 上 `apt` 若存在，多半是别的同名工具，不要用。Linux 上查：`which apt`。RHEL 系没有 apt，用 `yum` 或 `dnf`。",
        path_en:
          "apt does not use your user PATH to install system packages. An `apt` binary on a Mac is probably something else — ignore it. On Linux, `which apt`. RHEL-family systems have no apt; use `yum` or `dnf`.",
        chaos_zh:
          "在 Mac 的 zsh 里敲 `apt` 会 command not found，这是正常的。把 Linux 的 sources.list 抄到 Mac 无效。另一台 Linux 上 dpkg 锁（`/var/lib/dpkg/lock`）会让 apt 像卡死。",
        chaos_en:
          "`apt` on Mac zsh is “command not found” — expected. Copying sources.list onto a Mac does nothing. On Linux a dpkg lock (`/var/lib/dpkg/lock`) makes apt look frozen.",
        practices_zh:
          "这台 Mac 用 brew。只有 Debian/Ubuntu 才用 apt；Fedora/RHEL 用 dnf/yum。不要为了“统一命令”在 Mac 上造一个 apt 别名。",
        practices_en:
          "On this Mac, use brew. apt is Debian/Ubuntu; Fedora/RHEL use dnf/yum. Do not alias apt on macOS to feel consistent.",
      },
    },
  ],
};
