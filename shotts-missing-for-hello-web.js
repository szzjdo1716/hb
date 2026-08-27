// Missing commands from William Shotts, The Linux Command Line (2nd ed.)
// that are NOT already in hello-web (74 commands).
// Original short summaries — not copied from the book.
// Merge these objects into window.LINUX_DATA.commands in data.js.

window.SHOTTS_MISSING = [
  {
    name: "help",
    category: "system",
    summary: "Shows help for a bash built-in command (commands that live inside the shell).",
    example: "help cd",
    options: [
      { flag: "help NAME", meaning: "Help for one built-in" },
      { flag: "help", meaning: "List many built-in commands" },
      { flag: "-d", meaning: "Short description only" },
      { flag: "-m", meaning: "Man-page style output" },
    ],
    links: [
      { label: "man7.org (bash)", url: "https://man7.org/linux/man-pages/man1/bash.1.html" },
    ],
  },
  {
    name: "apropos",
    category: "system",
    summary: "Searches man page short descriptions. Useful when you forget the command name.",
    example: "apropos copy",
    options: [
      { flag: "WORD", meaning: "Find man pages related to WORD" },
      { flag: "-a", meaning: "Match all words" },
      { flag: "-s SECTION", meaning: "Only this man section (1, 5, 8…)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/apropos.1.html" },
    ],
  },
  {
    name: "whatis",
    category: "system",
    summary: "Prints the one-line description from a man page.",
    example: "whatis ls",
    options: [
      { flag: "NAME", meaning: "Short description of NAME" },
      { flag: "-s SECTION", meaning: "Only this man section" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/whatis.1.html" },
    ],
  },
  {
    name: "info",
    category: "system",
    summary: "Opens GNU Info manuals. Some GNU tools document more here than in man.",
    example: "info coreutils",
    options: [
      { flag: "NAME", meaning: "Open the manual named NAME" },
      { flag: "-k WORD", meaning: "Search Info pages for WORD" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/info.1.html" },
    ],
  },
  {
    name: "alias",
    category: "system",
    summary: "Creates a short name for a longer command. Lives in the current shell until you save it.",
    example: "alias ll='ls -lh'",
    options: [
      { flag: "alias", meaning: "List current aliases" },
      { flag: "alias NAME='CMD'", meaning: "Create an alias" },
      { flag: "unalias NAME", meaning: "Remove an alias" },
    ],
    links: [
      { label: "man7.org (bash)", url: "https://man7.org/linux/man-pages/man1/alias.1p.html" },
    ],
  },
  {
    name: "printenv",
    category: "system",
    summary: "Prints environment variables (settings the shell and programs can read).",
    example: "printenv PATH",
    options: [
      { flag: "printenv", meaning: "Show all environment variables" },
      { flag: "printenv NAME", meaning: "Show one variable" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/printenv.1.html" },
    ],
  },
  {
    name: "export",
    category: "system",
    summary: "Marks a shell variable so child programs can see it.",
    example: "export EDITOR=nano",
    options: [
      { flag: "export NAME=VALUE", meaning: "Set and export" },
      { flag: "export NAME", meaning: "Export an existing variable" },
      { flag: "export -p", meaning: "List exported variables" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/export.1p.html" },
    ],
  },
  {
    name: "jobs",
    category: "system",
    summary: "Lists jobs (commands paused or running in the background) in this terminal.",
    example: "jobs",
    options: [
      { flag: "jobs", meaning: "List jobs" },
      { flag: "-l", meaning: "Also show process IDs" },
      { flag: "-p", meaning: "Show only process IDs" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/jobs.1p.html" },
    ],
  },
  {
    name: "bg",
    category: "system",
    summary: "Resumes a stopped job in the background so the terminal is free.",
    example: "bg %1",
    options: [
      { flag: "bg", meaning: "Background the current stopped job" },
      { flag: "bg %N", meaning: "Background job number N" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/bg.1p.html" },
    ],
  },
  {
    name: "fg",
    category: "system",
    summary: "Brings a background or stopped job back to the foreground.",
    example: "fg %1",
    options: [
      { flag: "fg", meaning: "Foreground the current job" },
      { flag: "fg %N", meaning: "Foreground job number N" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/fg.1p.html" },
    ],
  },
  {
    name: "shutdown",
    category: "system",
    summary: "Stops or restarts the computer in a safe way. Usually needs sudo.",
    example: "sudo shutdown -h now",
    options: [
      { flag: "-h now", meaning: "Halt (power off) now" },
      { flag: "-r now", meaning: "Reboot now" },
      { flag: "+10", meaning: "Action in 10 minutes" },
      { flag: "-c", meaning: "Cancel a scheduled shutdown" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/shutdown.8.html" },
    ],
  },
  {
    name: "cal",
    category: "system",
    summary: "Prints a calendar in the terminal.",
    example: "cal",
    options: [
      { flag: "cal", meaning: "This month" },
      { flag: "cal YEAR", meaning: "Whole year" },
      { flag: "cal MONTH YEAR", meaning: "One month in a year" },
      { flag: "-y", meaning: "Current year" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/cal.1.html" },
    ],
  },
  {
    name: "bc",
    category: "system",
    summary: "A calculator in the terminal. Good for decimals and pipes from other commands.",
    example: "echo '2+3*4' | bc",
    options: [
      { flag: "bc", meaning: "Start interactive calculator" },
      { flag: "-l", meaning: "Load math library (decimals, sqrt…)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/bc.1p.html" },
    ],
  },
  {
    name: "time",
    category: "system",
    summary: "Runs a command and reports how long it took.",
    example: "time ls -R /etc",
    options: [
      { flag: "time CMD", meaning: "Time one command" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/time.1.html" },
    ],
  },
  {
    name: "nohup",
    category: "system",
    summary: "Runs a command so it keeps going after you close the terminal.",
    example: "nohup ./long-job.sh > out.txt &",
    options: [
      { flag: "nohup CMD", meaning: "Run CMD immune to hangup" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/nohup.1.html" },
    ],
  },
  {
    name: "crontab",
    category: "system",
    summary: "Edits scheduled jobs (cron) that run at chosen times.",
    example: "crontab -l",
    options: [
      { flag: "-l", meaning: "List your cron jobs" },
      { flag: "-e", meaning: "Edit your cron jobs" },
      { flag: "-r", meaning: "Remove your cron jobs" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/crontab.1.html" },
    ],
  },
  {
    name: "chgrp",
    category: "permissions",
    summary: "Changes the group owner of a file or folder.",
    example: "chgrp staff report.txt",
    options: [
      { flag: "GROUP FILE", meaning: "Set group on FILE" },
      { flag: "-R", meaning: "Apply to a folder and everything inside" },
      { flag: "-v", meaning: "Show what changed" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/chgrp.1.html" },
    ],
  },
  {
    name: "vi",
    category: "text",
    summary: "Classic terminal text editor. Shotts teaches vi; many Unix systems have it.",
    example: "vi notes.txt",
    options: [
      { flag: "vi FILE", meaning: "Edit FILE" },
      { flag: "i", meaning: "Insert mode (then type text)" },
      { flag: "Esc", meaning: "Back to command mode" },
      { flag: ":wq", meaning: "Save and quit" },
      { flag: ":q!", meaning: "Quit without saving" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/vi.1p.html" },
    ],
  },
  {
    name: "vim",
    category: "text",
    summary: "Improved vi editor. Same basic keys as vi, with extra features.",
    example: "vim notes.txt",
    options: [
      { flag: "vim FILE", meaning: "Edit FILE" },
      { flag: ":help", meaning: "Open vim help" },
      { flag: ":wq", meaning: "Save and quit" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/vim.1.html" },
    ],
  },
  {
    name: "paste",
    category: "text",
    summary: "Joins files side by side, line by line.",
    example: "paste names.txt ages.txt",
    options: [
      { flag: "FILE1 FILE2", meaning: "Merge columns from two files" },
      { flag: "-d CHAR", meaning: "Use CHAR as the column separator" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/paste.1.html" },
    ],
  },
  {
    name: "join",
    category: "text",
    summary: "Merges two sorted files on a shared field (like a simple database join).",
    example: "join ids.txt names.txt",
    options: [
      { flag: "FILE1 FILE2", meaning: "Join on the first field" },
      { flag: "-t CHAR", meaning: "Field separator" },
      { flag: "-1 N -2 M", meaning: "Join field N in file1 with field M in file2" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/join.1.html" },
    ],
  },
  {
    name: "comm",
    category: "text",
    summary: "Compares two sorted files and shows lines only in A, only in B, or in both.",
    example: "comm file-a.txt file-b.txt",
    options: [
      { flag: "-1", meaning: "Hide lines only in file 1" },
      { flag: "-2", meaning: "Hide lines only in file 2" },
      { flag: "-3", meaning: "Hide lines in both files" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/comm.1.html" },
    ],
  },
  {
    name: "patch",
    category: "text",
    summary: "Applies a diff file (a list of changes) to update a file.",
    example: "patch original.txt < fix.patch",
    options: [
      { flag: "-p1", meaning: "Strip one leading path folder from names in the patch" },
      { flag: "-R", meaning: "Reverse the patch" },
      { flag: "--dry-run", meaning: "Test without changing files" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/patch.1.html" },
    ],
  },
  {
    name: "nl",
    category: "text",
    summary: "Adds line numbers to a file when printing it.",
    example: "nl story.txt",
    options: [
      { flag: "nl FILE", meaning: "Number lines" },
      { flag: "-b a", meaning: "Number all lines, including empty ones" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/nl.1.html" },
    ],
  },
  {
    name: "fmt",
    category: "text",
    summary: "Rewraps paragraphs to a nicer line width.",
    example: "fmt -w 72 notes.txt",
    options: [
      { flag: "-w N", meaning: "Wrap at N columns" },
      { flag: "-u", meaning: "Uniform spacing between words" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/fmt.1.html" },
    ],
  },
  {
    name: "printf",
    category: "text",
    summary: "Prints formatted text. More controlled than echo.",
    example: "printf '%s %d\\n' apples 3",
    options: [
      { flag: "FORMAT ARGS", meaning: "Print ARGS using FORMAT" },
      { flag: "%s", meaning: "String" },
      { flag: "%d", meaning: "Integer" },
      { flag: "\\n", meaning: "New line" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/printf.1.html" },
    ],
  },
  {
    name: "locate",
    category: "file-directory",
    summary: "Finds files by name using a fast index. Index may be a day old until updated.",
    example: "locate bashrc",
    options: [
      { flag: "NAME", meaning: "Find paths containing NAME" },
      { flag: "-i", meaning: "Ignore upper/lower case" },
      { flag: "-n N", meaning: "Show at most N results" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/locate.1.html" },
    ],
  },
  {
    name: "whereis",
    category: "file-directory",
    summary: "Shows where a program, its man page, and source may live.",
    example: "whereis ls",
    options: [
      { flag: "NAME", meaning: "Locate binary / man / source" },
      { flag: "-b", meaning: "Binaries only" },
      { flag: "-m", meaning: "Man pages only" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/whereis.1.html" },
    ],
  },
  {
    name: "xargs",
    category: "file-directory",
    summary: "Takes a list of names from the previous command and runs another command on them.",
    example: "find . -name '*.tmp' | xargs rm",
    options: [
      { flag: "xargs CMD", meaning: "Run CMD with items from stdin" },
      { flag: "-n N", meaning: "At most N items per command" },
      { flag: "-p", meaning: "Ask before running" },
      { flag: "-0", meaning: "Names separated by null (safer with find -print0)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/xargs.1.html" },
    ],
  },
  {
    name: "basename",
    category: "file-directory",
    summary: "Prints only the last part of a path (the file name).",
    example: "basename /etc/hosts",
    options: [
      { flag: "PATH", meaning: "Show the final name" },
      { flag: "PATH .ext", meaning: "Also strip this suffix" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/basename.1.html" },
    ],
  },
  {
    name: "dirname",
    category: "file-directory",
    summary: "Prints the folder part of a path.",
    example: "dirname /etc/hosts",
    options: [
      { flag: "PATH", meaning: "Show the directory of PATH" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/dirname.1.html" },
    ],
  },
  {
    name: "readlink",
    category: "file-directory",
    summary: "Shows the target of a symbolic link (shortcut file).",
    example: "readlink -f /usr/bin/python",
    options: [
      { flag: "LINK", meaning: "Print link target" },
      { flag: "-f", meaning: "Follow to the real final path" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/readlink.1.html" },
    ],
  },
  {
    name: "realpath",
    category: "file-directory",
    summary: "Prints the full real path of a file, resolving links and '..'.",
    example: "realpath ./index.html",
    options: [
      { flag: "PATH", meaning: "Canonical path" },
      { flag: "-e", meaning: "Fail if the path does not exist" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/realpath.1.html" },
    ],
  },
  {
    name: "gunzip",
    category: "file-directory",
    summary: "Uncompresses a .gz file made by gzip.",
    example: "gunzip notes.txt.gz",
    options: [
      { flag: "FILE.gz", meaning: "Uncompress (replaces the .gz file)" },
      { flag: "-k", meaning: "Keep the .gz file" },
      { flag: "-c", meaning: "Write uncompressed data to the screen" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/gunzip.1.html" },
    ],
  },
  {
    name: "bzip2",
    category: "file-directory",
    summary: "Compresses a file to .bz2. Often smaller than gzip, slower.",
    example: "bzip2 big.log",
    options: [
      { flag: "FILE", meaning: "Compress FILE to FILE.bz2" },
      { flag: "-d", meaning: "Decompress" },
      { flag: "-k", meaning: "Keep the original file" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/bzip2.1.html" },
    ],
  },
  {
    name: "xz",
    category: "file-directory",
    summary: "Compresses a file to .xz. Strong compression; used by many modern packages.",
    example: "xz big.log",
    options: [
      { flag: "FILE", meaning: "Compress to FILE.xz" },
      { flag: "-d", meaning: "Decompress" },
      { flag: "-k", meaning: "Keep the original file" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/xz.1.html" },
    ],
  },
  {
    name: "zip",
    category: "file-directory",
    summary: "Creates a .zip archive. Common when sharing files with Windows/macOS.",
    example: "zip -r backup.zip folder/",
    options: [
      { flag: "-r ARCHIVE DIR", meaning: "Zip a folder and its contents" },
      { flag: "-l", meaning: "List files inside a zip (zip -sf on some systems)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/zip.1.html" },
    ],
  },
  {
    name: "rsync",
    category: "file-directory",
    summary: "Copies files and folders efficiently, locally or over the network. Good for backups.",
    example: "rsync -av src/ dest/",
    options: [
      { flag: "-a", meaning: "Archive mode: keep dates, permissions, copy folders" },
      { flag: "-v", meaning: "Verbose (show names)" },
      { flag: "-n", meaning: "Dry run (show what would copy)" },
      { flag: "--delete", meaning: "Remove extra files in dest (dangerous; check first)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/rsync.1.html" },
    ],
  },
  {
    name: "mount",
    category: "file-directory",
    summary: "Attaches a disk or filesystem to a folder so you can use it.",
    example: "mount",
    options: [
      { flag: "mount", meaning: "List mounted filesystems" },
      { flag: "DEVICE DIR", meaning: "Mount DEVICE on DIR (often needs sudo)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/mount.8.html" },
    ],
  },
  {
    name: "umount",
    category: "file-directory",
    summary: "Detaches a mounted disk or filesystem. Note the spelling: umount, not unmount.",
    example: "sudo umount /mnt/usb",
    options: [
      { flag: "DIR", meaning: "Unmount this mount point" },
      { flag: "DEVICE", meaning: "Unmount this device" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/umount.8.html" },
    ],
  },
  {
    name: "dd",
    category: "file-directory",
    summary: "Copies raw data from one file or device to another. Powerful and easy to misuse.",
    example: "dd if=image.iso of=/dev/sdb bs=4M status=progress",
    options: [
      { flag: "if=FILE", meaning: "Input file or device" },
      { flag: "of=FILE", meaning: "Output file or device" },
      { flag: "bs=SIZE", meaning: "Block size" },
      { flag: "status=progress", meaning: "Show progress" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/dd.1.html" },
    ],
  },
  {
    name: "netstat",
    category: "network",
    summary: "Older tool to list network connections and listening ports. Many systems now prefer ss.",
    example: "netstat -tuln",
    options: [
      { flag: "-t", meaning: "TCP" },
      { flag: "-u", meaning: "UDP" },
      { flag: "-l", meaning: "Listening sockets" },
      { flag: "-n", meaning: "Show numbers, do not resolve names" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/netstat.8.html" },
    ],
  },
  {
    name: "host",
    category: "network",
    summary: "Looks up a domain name or IP address (simple DNS query).",
    example: "host example.com",
    options: [
      { flag: "NAME", meaning: "Resolve NAME" },
      { flag: "-t TYPE", meaning: "Query record type (A, MX, TXT…)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/host.1.html" },
    ],
  },
  {
    name: "dig",
    category: "network",
    summary: "Detailed DNS lookup tool. Shows more than nslookup.",
    example: "dig example.com",
    options: [
      { flag: "NAME", meaning: "Query NAME" },
      { flag: "+short", meaning: "Short answer only" },
      { flag: "NAME MX", meaning: "Mail records" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/dig.1.html" },
    ],
  },
  {
    name: "ftp",
    category: "network",
    summary: "Old file-transfer program. Shotts covers it; today people often use sftp or scp instead.",
    example: "ftp ftp.example.com",
    options: [
      { flag: "HOST", meaning: "Connect to HOST" },
      { flag: "get FILE", meaning: "Download one file (inside ftp)" },
      { flag: "put FILE", meaning: "Upload one file (inside ftp)" },
    ],
    links: [
      { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/ftp.1.html" },
    ],
  },
  {
    name: "zypper",
    category: "packages",
    summary: "Package tool on openSUSE and SUSE. Shotts includes it with apt/yum/dnf.",
    example: "sudo zypper install curl",
    options: [
      { flag: "install PKG", meaning: "Install" },
      { flag: "remove PKG", meaning: "Remove" },
      { flag: "update", meaning: "Update packages" },
      { flag: "search WORD", meaning: "Search" },
    ],
    links: [
      { label: "openSUSE zypper", url: "https://en.opensuse.org/SDB:Zypper_manual" },
    ],
  },
];
