window.LINUX_DATA = {
  categories: [
    { slug: "file-directory", name: "File & Directory" },
    { slug: "text", name: "Text Viewing & Searching" },
    { slug: "system", name: "System Info & Process" },
    { slug: "permissions", name: "Permissions & Users" },
    { slug: "network", name: "Network (basic)" },
    { slug: "packages", name: "Package Management (basic)" },
  ],
  commands: [
    {
      name: "ls",
      category: "file-directory",
      summary: "Lists files and folders in the current directory.",
      example: "ls -lh",
      options: [
        { flag: "-l", meaning: "Long list: permissions, size, date" },
        { flag: "-a", meaning: "Show hidden files (names starting with .)" },
        { flag: "-h", meaning: "Human-readable sizes (with -l)" },
        { flag: "-R", meaning: "List subfolders too" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/ls.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/ls" },
      ],
    },
    {
      name: "cd",
      category: "file-directory",
      summary: "Changes the current directory (moves you into another folder).",
      example: "cd /var/log",
      options: [
        { flag: "cd DIR", meaning: "Go into DIR" },
        { flag: "cd ..", meaning: "Go up one folder" },
        { flag: "cd", meaning: "Go to your home folder" },
        { flag: "cd -", meaning: "Go back to the previous folder" },
      ],
      links: [
        { label: "man7.org (POSIX)", url: "https://man7.org/linux/man-pages/man1/cd.1p.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/cd" },
      ],
    },
    {
      name: "pwd",
      category: "file-directory",
      summary: "Prints the folder you are in right now.",
      example: "pwd",
      options: [
        { flag: "-P", meaning: "Show the real path (resolve symbolic links)" },
        { flag: "-L", meaning: "Show the logical path (default)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/pwd.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/pwd" },
      ],
    },
    {
      name: "mkdir",
      category: "file-directory",
      summary: "Creates a new folder.",
      example: "mkdir -p notes/linux",
      options: [
        { flag: "-p", meaning: "Create parent folders if they do not exist" },
        { flag: "-v", meaning: "Print each folder that is created" },
        { flag: "-m MODE", meaning: "Set permissions (example: -m 755)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/mkdir.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/mkdir" },
      ],
    },
    {
      name: "rmdir",
      category: "file-directory",
      summary: "Removes an empty folder. Use rm -r to delete a folder that has files.",
      example: "rmdir old-folder",
      options: [
        { flag: "-p", meaning: "Also remove empty parent folders" },
        { flag: "-v", meaning: "Print each folder that is removed" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/rmdir.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/rmdir" },
      ],
    },
    {
      name: "touch",
      category: "file-directory",
      summary: "Creates an empty file, or updates a file’s timestamp if it already exists.",
      example: "touch notes.txt",
      options: [
        { flag: "-c", meaning: "Do not create the file if it is missing" },
        { flag: "-a", meaning: "Change access time only" },
        { flag: "-m", meaning: "Change modification time only" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/touch.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/touch" },
      ],
    },
    {
      name: "cp",
      category: "file-directory",
      summary: "Copies files or folders. The original stays; a second copy is created.",
      example: "cp notes.txt notes-copy.txt",
      options: [
        { flag: "-r", meaning: "Copy a folder and everything inside it" },
        { flag: "-i", meaning: "Ask before overwriting" },
        { flag: "-v", meaning: "Show each file as it is copied" },
        { flag: "-p", meaning: "Keep timestamps and permissions" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/cp.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/cp" },
      ],
    },
    {
      name: "mv",
      category: "file-directory",
      summary: "Renames a file, or moves it to another folder. There is no extra copy.",
      example: "mv notes-copy.txt memo.txt",
      options: [
        { flag: "-i", meaning: "Ask before overwriting" },
        { flag: "-n", meaning: "Do not overwrite an existing file" },
        { flag: "-v", meaning: "Show each file as it is moved" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/mv.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/mv" },
      ],
    },
    {
      name: "rm",
      category: "file-directory",
      summary: "Deletes files. This does not go to Trash, and there is no undo.",
      example: "rm memo.txt",
      options: [
        { flag: "-i", meaning: "Ask before each delete" },
        { flag: "-r", meaning: "Delete a folder and its contents" },
        { flag: "-f", meaning: "Do not ask; ignore missing files" },
        { flag: "-v", meaning: "Show each file as it is deleted" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/rm.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/rm" },
      ],
    },
    {
      name: "ln",
      category: "file-directory",
      summary: "Creates a link to a file. -s makes a shortcut (symbolic link).",
      example: "ln -s /etc/hosts hosts-link",
      options: [
        { flag: "-s", meaning: "Create a symbolic link (shortcut)" },
        { flag: "-f", meaning: "Replace an existing link" },
        { flag: "-v", meaning: "Show what was created" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/ln.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/ln" },
      ],
    },
    {
      name: "find",
      category: "file-directory",
      summary: "Searches for files and folders by name, type, or other details.",
      example: "find . -name \"*.txt\"",
      options: [
        { flag: "-name PATTERN", meaning: "Match a file name (use quotes)" },
        { flag: "-type f", meaning: "Only files (d = folders)" },
        { flag: "-mtime -7", meaning: "Changed in the last 7 days" },
        { flag: "-delete", meaning: "Delete matches (be careful)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/find.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/find" },
      ],
    },
    {
      name: "file",
      category: "file-directory",
      summary: "Tells you what kind of file something is (text, image, binary, and so on).",
      example: "file notes.txt",
      options: [
        { flag: "-b", meaning: "Brief: type only, no file name" },
        { flag: "-i", meaning: "Show MIME type" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/file.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/file" },
      ],
    },
    {
      name: "stat",
      category: "file-directory",
      summary: "Shows detailed information about a file: size, dates, permissions, inode.",
      example: "stat notes.txt",
      options: [
        { flag: "-c FORMAT", meaning: "Custom output (example: -c %s for size)" },
        { flag: "-t", meaning: "Terse output" },
        { flag: "-L", meaning: "Follow symbolic links" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/stat.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/stat" },
      ],
    },
    {
      name: "du",
      category: "file-directory",
      summary: "Shows how much disk space files and folders use.",
      example: "du -sh *",
      options: [
        { flag: "-h", meaning: "Human-readable sizes (K, M, G)" },
        { flag: "-s", meaning: "Total only (summary)" },
        { flag: "-a", meaning: "Show files as well as folders" },
        { flag: "-d N", meaning: "Limit depth to N levels" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/du.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/du" },
      ],
    },
    {
      name: "df",
      category: "file-directory",
      summary: "Shows free and used space on disks and partitions.",
      example: "df -h",
      options: [
        { flag: "-h", meaning: "Human-readable sizes" },
        { flag: "-T", meaning: "Show file system type" },
        { flag: "-i", meaning: "Show inode usage" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/df.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/df" },
      ],
    },
    {
      name: "tar",
      category: "file-directory",
      summary: "Creates or extracts archive files (.tar, .tar.gz).",
      example: "tar -czvf backup.tar.gz notes/",
      options: [
        { flag: "-c", meaning: "Create an archive" },
        { flag: "-x", meaning: "Extract an archive" },
        { flag: "-z", meaning: "Use gzip (.tar.gz)" },
        { flag: "-v", meaning: "List files as they are processed" },
        { flag: "-f FILE", meaning: "Archive file name (put last)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/tar.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/tar" },
      ],
    },
    {
      name: "gzip",
      category: "file-directory",
      summary: "Compresses a file. The original is replaced by file.gz. Use gunzip to undo.",
      example: "gzip big.log",
      options: [
        { flag: "-k", meaning: "Keep the original file" },
        { flag: "-d", meaning: "Decompress (same as gunzip)" },
        { flag: "-v", meaning: "Show compression ratio" },
        { flag: "-1 .. -9", meaning: "Faster (1) or smaller (9)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/gzip.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/gzip" },
      ],
    },
    {
      name: "unzip",
      category: "file-directory",
      summary: "Extracts files from a .zip archive.",
      example: "unzip archive.zip",
      options: [
        { flag: "-l", meaning: "List contents without extracting" },
        { flag: "-d DIR", meaning: "Extract into DIR" },
        { flag: "-o", meaning: "Overwrite files without asking" },
        { flag: "-q", meaning: "Quiet" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/unzip.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/unzip" },
      ],
    },
    {
      name: "cat",
      category: "text",
      summary: "Prints the whole file to the screen. Best for short files.",
      example: "cat notes.txt",
      options: [
        { flag: "-n", meaning: "Number all lines" },
        { flag: "-A", meaning: "Show tabs and line endings" },
        { flag: "file1 file2", meaning: "Join files and print them" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/cat.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/cat" },
      ],
    },
    {
      name: "less",
      category: "text",
      summary: "Opens a file one screen at a time. Press q to quit, / to search.",
      example: "less /var/log/syslog",
      options: [
        { flag: "-N", meaning: "Show line numbers" },
        { flag: "-S", meaning: "Do not wrap long lines" },
        { flag: "+G", meaning: "Start at the end of the file" },
        { flag: "q", meaning: "Quit (inside less)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/less.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/less" },
      ],
    },
    {
      name: "head",
      category: "text",
      summary: "Shows the first lines of a file (10 by default).",
      example: "head -n 20 notes.txt",
      options: [
        { flag: "-n N", meaning: "Show the first N lines" },
        { flag: "-c N", meaning: "Show the first N bytes" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/head.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/head" },
      ],
    },
    {
      name: "tail",
      category: "text",
      summary: "Shows the last lines of a file. -f follows a log as it grows.",
      example: "tail -f /var/log/syslog",
      options: [
        { flag: "-n N", meaning: "Show the last N lines" },
        { flag: "-f", meaning: "Follow: keep showing new lines" },
        { flag: "-c N", meaning: "Show the last N bytes" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/tail.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/tail" },
      ],
    },
    {
      name: "grep",
      category: "text",
      summary: "Searches for a text pattern in files and prints matching lines.",
      example: "grep -n \"error\" app.log",
      options: [
        { flag: "-i", meaning: "Ignore upper/lower case" },
        { flag: "-n", meaning: "Show line numbers" },
        { flag: "-r", meaning: "Search folders recursively" },
        { flag: "-v", meaning: "Show lines that do not match" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/grep.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/grep" },
      ],
    },
    {
      name: "sed",
      category: "text",
      summary: "Edits text as a stream. Often used to replace one string with another.",
      example: "sed 's/old/new/g' notes.txt",
      options: [
        { flag: "s/A/B/g", meaning: "Replace A with B on each line" },
        { flag: "-i", meaning: "Edit the file in place" },
        { flag: "-n", meaning: "Do not print every line" },
        { flag: "p", meaning: "Print (often with -n)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/sed.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/sed" },
      ],
    },
    {
      name: "awk",
      category: "text",
      summary: "Reads a file line by line and can print or calculate columns. Default split is spaces.",
      example: "awk '{print $1}' data.txt",
      options: [
        { flag: "'{print $1}'", meaning: "Print the first column" },
        { flag: "-F:", meaning: "Use : as the column separator" },
        { flag: "NR==1", meaning: "Only the first line" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/awk.1p.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/awk" },
      ],
    },
    {
      name: "cut",
      category: "text",
      summary: "Cuts out columns from each line, using a delimiter such as a comma or colon.",
      example: "cut -d: -f1 /etc/passwd",
      options: [
        { flag: "-d CHAR", meaning: "Field delimiter (default is tab)" },
        { flag: "-f N", meaning: "Which fields to keep (example: 1,3)" },
        { flag: "-c N", meaning: "Cut by character positions" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/cut.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/cut" },
      ],
    },
    {
      name: "sort",
      category: "text",
      summary: "Sorts lines of text. Can sort numbers and unique values too.",
      example: "sort names.txt",
      options: [
        { flag: "-n", meaning: "Sort as numbers" },
        { flag: "-r", meaning: "Reverse order" },
        { flag: "-u", meaning: "Unique lines only" },
        { flag: "-k N", meaning: "Sort by column N" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/sort.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/sort" },
      ],
    },
    {
      name: "uniq",
      category: "text",
      summary: "Hides repeated lines. The file must already be sorted for this to work well.",
      example: "sort names.txt | uniq",
      options: [
        { flag: "-c", meaning: "Count how many times each line appears" },
        { flag: "-d", meaning: "Show only duplicated lines" },
        { flag: "-u", meaning: "Show only lines that appear once" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/uniq.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/uniq" },
      ],
    },
    {
      name: "wc",
      category: "text",
      summary: "Counts lines, words, and bytes in a file.",
      example: "wc -l notes.txt",
      options: [
        { flag: "-l", meaning: "Line count" },
        { flag: "-w", meaning: "Word count" },
        { flag: "-c", meaning: "Byte count" },
        { flag: "-m", meaning: "Character count" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/wc.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/wc" },
      ],
    },
    {
      name: "tr",
      category: "text",
      summary: "Translates or deletes characters from standard input (often used in a pipe).",
      example: "echo Hello | tr 'A-Z' 'a-z'",
      options: [
        { flag: "SET1 SET2", meaning: "Replace characters in SET1 with SET2" },
        { flag: "-d SET", meaning: "Delete characters in SET" },
        { flag: "-s SET", meaning: "Squeeze repeated characters" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/tr.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/tr" },
      ],
    },
    {
      name: "diff",
      category: "text",
      summary: "Compares two files and shows the lines that differ.",
      example: "diff old.txt new.txt",
      options: [
        { flag: "-u", meaning: "Unified format (easy to read)" },
        { flag: "-i", meaning: "Ignore case" },
        { flag: "-r", meaning: "Compare folders recursively" },
        { flag: "-q", meaning: "Only say if files differ" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/diff.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/diff" },
      ],
    },
    {
      name: "echo",
      category: "text",
      summary: "Prints text. Often used to write a short line into a file.",
      example: "echo \"hello linux\" > notes.txt",
      options: [
        { flag: "-n", meaning: "Do not add a newline" },
        { flag: "-e", meaning: "Allow backslash codes like \\n" },
        { flag: "> file", meaning: "Overwrite file with the text" },
        { flag: ">> file", meaning: "Append the text to the file" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/echo.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/echo" },
      ],
    },
    {
      name: "tee",
      category: "text",
      summary: "Copies input both to the screen and to a file. Useful in the middle of a pipe.",
      example: "ls | tee listing.txt",
      options: [
        { flag: "-a", meaning: "Append to the file instead of overwriting" },
        { flag: "-i", meaning: "Ignore interrupt signals" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/tee.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/tee" },
      ],
    },
    {
      name: "nano",
      category: "text",
      summary: "A simple full-screen text editor. Ctrl+O saves, Ctrl+X exits.",
      example: "nano notes.txt",
      options: [
        { flag: "+N", meaning: "Open at line N" },
        { flag: "-w", meaning: "Do not wrap long lines" },
        { flag: "-v", meaning: "View only (read-only)" },
      ],
      links: [
        { label: "linux.die.net", url: "https://linux.die.net/man/1/nano" },
        { label: "man7.org (POSIX editors)", url: "https://man7.org/linux/man-pages/dir_section_1.html" },
      ],
    },
    {
      name: "uname",
      category: "system",
      summary: "Prints the system name and kernel information.",
      example: "uname -a",
      options: [
        { flag: "-a", meaning: "All information" },
        { flag: "-r", meaning: "Kernel release" },
        { flag: "-s", meaning: "Kernel name" },
        { flag: "-m", meaning: "Machine architecture" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/uname.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/uname" },
      ],
    },
    {
      name: "hostname",
      category: "system",
      summary: "Shows (or sets) the computer’s name on the network.",
      example: "hostname",
      options: [
        { flag: "-I", meaning: "Show IP addresses" },
        { flag: "-f", meaning: "Show the full (FQDN) name" },
        { flag: "NAME", meaning: "Set the hostname (needs root)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/hostname.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/hostname" },
      ],
    },
    {
      name: "whoami",
      category: "system",
      summary: "Prints the user name you are logged in as.",
      example: "whoami",
      options: [
        { flag: "(none)", meaning: "No common options; just run it" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/whoami.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/whoami" },
      ],
    },
    {
      name: "id",
      category: "system",
      summary: "Shows your user ID, group ID, and group memberships.",
      example: "id",
      options: [
        { flag: "-u", meaning: "User ID only" },
        { flag: "-g", meaning: "Primary group ID only" },
        { flag: "-n", meaning: "Show names instead of numbers" },
        { flag: "USER", meaning: "Show IDs for another user" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/id.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/id" },
      ],
    },
    {
      name: "uptime",
      category: "system",
      summary: "Shows how long the system has been running, plus load averages.",
      example: "uptime",
      options: [
        { flag: "-p", meaning: "Pretty: “up 2 days, 3 hours”" },
        { flag: "-s", meaning: "Show the time the system started" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/uptime.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/uptime" },
      ],
    },
    {
      name: "date",
      category: "system",
      summary: "Prints the current date and time. Can also format the output.",
      example: "date \"+%Y-%m-%d %H:%M\"",
      options: [
        { flag: "+FORMAT", meaning: "Custom format (%Y year, %m month, %d day)" },
        { flag: "-u", meaning: "UTC time" },
        { flag: "-d STRING", meaning: "Parse a date string" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/date.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/date" },
      ],
    },
    {
      name: "free",
      category: "system",
      summary: "Shows used and free memory (RAM and swap).",
      example: "free -h",
      options: [
        { flag: "-h", meaning: "Human-readable sizes" },
        { flag: "-s N", meaning: "Repeat every N seconds" },
        { flag: "-w", meaning: "Wide output with extra columns" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/free.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/free" },
      ],
    },
    {
      name: "top",
      category: "system",
      summary: "Live view of running processes and CPU/memory use. Press q to quit.",
      example: "top",
      options: [
        { flag: "-u USER", meaning: "Only this user’s processes" },
        { flag: "-d N", meaning: "Refresh every N seconds" },
        { flag: "-n N", meaning: "Exit after N refreshes" },
        { flag: "P / M", meaning: "Inside top: sort by CPU / memory" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/top.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/top" },
      ],
    },
    {
      name: "ps",
      category: "system",
      summary: "Lists running processes. A snapshot, unlike top.",
      example: "ps aux",
      options: [
        { flag: "aux", meaning: "All processes, with user and CPU/RAM" },
        { flag: "-ef", meaning: "Full list (System V style)" },
        { flag: "-u USER", meaning: "Only this user’s processes" },
        { flag: "-p PID", meaning: "Only this process ID" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/ps.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/ps" },
      ],
    },
    {
      name: "kill",
      category: "system",
      summary: "Sends a signal to a process, usually to stop it. You need the PID (from ps or top).",
      example: "kill 1234",
      options: [
        { flag: "-l", meaning: "List signal names" },
        { flag: "-9", meaning: "Force quit (SIGKILL). Last resort." },
        { flag: "-15", meaning: "Polite quit (SIGTERM, default)" },
        { flag: "PID", meaning: "Process ID to signal" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/kill.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/kill" },
      ],
    },
    {
      name: "killall",
      category: "system",
      summary: "Stops processes by name instead of PID.",
      example: "killall firefox",
      options: [
        { flag: "-i", meaning: "Ask before each kill" },
        { flag: "-9", meaning: "Force quit" },
        { flag: "-u USER", meaning: "Only this user’s processes" },
        { flag: "-l", meaning: "List signal names" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/killall.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/killall" },
      ],
    },
    {
      name: "env",
      category: "system",
      summary: "Prints environment variables, or runs a command with a modified environment.",
      example: "env | grep PATH",
      options: [
        { flag: "-i", meaning: "Start with an empty environment" },
        { flag: "-u NAME", meaning: "Remove variable NAME" },
        { flag: "NAME=value CMD", meaning: "Set a variable for one command" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/env.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/env" },
      ],
    },
    {
      name: "history",
      category: "system",
      summary: "Shows commands you ran earlier in this shell. A shell builtin.",
      example: "history | tail",
      options: [
        { flag: "history N", meaning: "Show the last N commands" },
        { flag: "!N", meaning: "Re-run command number N" },
        { flag: "!!", meaning: "Re-run the last command" },
      ],
      links: [
        { label: "man7.org (POSIX)", url: "https://man7.org/linux/man-pages/man1/fc.1p.html" },
        { label: "linux.die.net (bash)", url: "https://linux.die.net/man/1/bash" },
      ],
    },
    {
      name: "which",
      category: "system",
      summary: "Shows the full path of a command that would run.",
      example: "which python3",
      options: [
        { flag: "-a", meaning: "Show all matches on PATH, not just the first" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/which.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/which" },
      ],
    },
    {
      name: "type",
      category: "system",
      summary: "Tells you if a name is a command, alias, builtin, or function.",
      example: "type cd",
      options: [
        { flag: "-a", meaning: "Show all locations" },
        { flag: "-t", meaning: "Print a short type: file, alias, builtin" },
      ],
      links: [
        { label: "man7.org (POSIX)", url: "https://man7.org/linux/man-pages/man1/type.1p.html" },
        { label: "linux.die.net (bash)", url: "https://linux.die.net/man/1/bash" },
      ],
    },
    {
      name: "clear",
      category: "system",
      summary: "Clears the terminal screen. It does not delete any files.",
      example: "clear",
      options: [
        { flag: "(none)", meaning: "No common options; just run it" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/clear.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/clear" },
      ],
    },
    {
      name: "man",
      category: "system",
      summary: "Opens the manual page for a command. Press q to quit, / to search.",
      example: "man ls",
      options: [
        { flag: "1 NAME", meaning: "User commands (section 1)" },
        { flag: "8 NAME", meaning: "Admin commands (section 8)" },
        { flag: "-k WORD", meaning: "Search man page descriptions" },
        { flag: "-f NAME", meaning: "Short description (same as whatis)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/man.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/man" },
      ],
    },
    {
      name: "sleep",
      category: "system",
      summary: "Pauses for a number of seconds. Useful in scripts.",
      example: "sleep 5",
      options: [
        { flag: "N", meaning: "Wait N seconds" },
        { flag: "N m", meaning: "Wait N minutes (GNU sleep)" },
        { flag: "N h", meaning: "Wait N hours (GNU sleep)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/sleep.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/sleep" },
      ],
    },
    {
      name: "chmod",
      category: "permissions",
      summary: "Changes file permissions (who can read, write, or run a file).",
      example: "chmod 644 notes.txt",
      options: [
        { flag: "u+x", meaning: "Add execute for the owner" },
        { flag: "go-w", meaning: "Remove write for group and others" },
        { flag: "755", meaning: "Owner rwx; group and others rx" },
        { flag: "-R", meaning: "Apply to a folder and its contents" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/chmod.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/chmod" },
      ],
    },
    {
      name: "chown",
      category: "permissions",
      summary: "Changes the owner (and optionally the group) of a file. Usually needs sudo.",
      example: "sudo chown alice:alice notes.txt",
      options: [
        { flag: "USER FILE", meaning: "Set the owner" },
        { flag: "USER:GROUP FILE", meaning: "Set owner and group" },
        { flag: "-R", meaning: "Apply to a folder and its contents" },
        { flag: "-v", meaning: "Show files that changed" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/chown.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/chown" },
      ],
    },
    {
      name: "sudo",
      category: "permissions",
      summary: "Runs one command as root (or another user), after you enter your password.",
      example: "sudo apt update",
      options: [
        { flag: "-u USER", meaning: "Run as USER instead of root" },
        { flag: "-i", meaning: "Login shell as root" },
        { flag: "-l", meaning: "List what you are allowed to run" },
        { flag: "-k", meaning: "Forget cached password" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/sudo.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/sudo" },
      ],
    },
    {
      name: "su",
      category: "permissions",
      summary: "Switches to another user account. su - starts a login shell.",
      example: "su -",
      options: [
        { flag: "-", meaning: "Login shell (loads that user’s environment)" },
        { flag: "USER", meaning: "Switch to USER (default is root)" },
        { flag: "-c CMD", meaning: "Run one command as that user" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/su.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/su" },
      ],
    },
    {
      name: "passwd",
      category: "permissions",
      summary: "Changes a user password. With no name, it changes yours.",
      example: "passwd",
      options: [
        { flag: "USER", meaning: "Change USER’s password (root only)" },
        { flag: "-d", meaning: "Delete a password (root; insecure)" },
        { flag: "-S", meaning: "Show password status" },
        { flag: "-l", meaning: "Lock the account (root)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/passwd.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/passwd" },
      ],
    },
    {
      name: "groups",
      category: "permissions",
      summary: "Lists the groups a user belongs to.",
      example: "groups",
      options: [
        { flag: "USER", meaning: "Show groups for USER" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/groups.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/groups" },
      ],
    },
    {
      name: "who",
      category: "permissions",
      summary: "Shows who is logged in right now.",
      example: "who",
      options: [
        { flag: "-a", meaning: "All information" },
        { flag: "-b", meaning: "Time of last boot" },
        { flag: "-q", meaning: "Login names and count only" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/who.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/who" },
      ],
    },
    {
      name: "umask",
      category: "permissions",
      summary: "Sets the default permission bits that are turned off on new files. A shell builtin.",
      example: "umask 022",
      options: [
        { flag: "022", meaning: "Common default: files 644, folders 755" },
        { flag: "-S", meaning: "Show symbolic form (u=rwx,g=rx,o=rx)" },
      ],
      links: [
        { label: "man7.org (POSIX)", url: "https://man7.org/linux/man-pages/man1/umask.1p.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/2/umask" },
      ],
    },
    {
      name: "ping",
      category: "network",
      summary: "Sends packets to a host to check if the network path works.",
      example: "ping -c 4 example.com",
      options: [
        { flag: "-c N", meaning: "Send N packets, then stop" },
        { flag: "-i N", meaning: "Seconds between packets" },
        { flag: "-n", meaning: "Numeric output only (no DNS names)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/ping.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/ping" },
      ],
    },
    {
      name: "curl",
      category: "network",
      summary: "Transfers data from or to a URL. Often used to download or call an API.",
      example: "curl -O https://example.com/file.txt",
      options: [
        { flag: "-O", meaning: "Save using the remote file name" },
        { flag: "-L", meaning: "Follow redirects" },
        { flag: "-I", meaning: "Headers only" },
        { flag: "-o FILE", meaning: "Save as FILE" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/curl.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/curl" },
      ],
    },
    {
      name: "wget",
      category: "network",
      summary: "Downloads files from the web. Simple and good for large files or recursion.",
      example: "wget https://example.com/file.txt",
      options: [
        { flag: "-O FILE", meaning: "Save as FILE" },
        { flag: "-c", meaning: "Continue a partial download" },
        { flag: "-q", meaning: "Quiet" },
        { flag: "-r", meaning: "Recursive download" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/wget.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/wget" },
      ],
    },
    {
      name: "ssh",
      category: "network",
      summary: "Opens a secure shell on a remote computer.",
      example: "ssh user@192.168.1.10",
      options: [
        { flag: "-p PORT", meaning: "Connect on a different port" },
        { flag: "-i KEY", meaning: "Use this private key file" },
        { flag: "-L", meaning: "Local port forward" },
        { flag: "user@host", meaning: "Remote user and host" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/ssh.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/ssh" },
      ],
    },
    {
      name: "scp",
      category: "network",
      summary: "Copies files to or from a remote computer over SSH.",
      example: "scp notes.txt user@host:~/notes.txt",
      options: [
        { flag: "-r", meaning: "Copy a folder" },
        { flag: "-P PORT", meaning: "SSH port (capital P)" },
        { flag: "-i KEY", meaning: "Private key file" },
        { flag: "-p", meaning: "Keep timestamps" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/scp.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/scp" },
      ],
    },
    {
      name: "ip",
      category: "network",
      summary: "Shows and configures network interfaces, addresses, and routes (modern replacement for ifconfig).",
      example: "ip addr show",
      options: [
        { flag: "addr", meaning: "IP addresses on interfaces" },
        { flag: "link", meaning: "Network devices (up/down, MAC)" },
        { flag: "route", meaning: "Routing table" },
        { flag: "neigh", meaning: "ARP / neighbor table" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/ip.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/ip" },
      ],
    },
    {
      name: "ss",
      category: "network",
      summary: "Shows sockets (open ports and connections). Modern replacement for netstat.",
      example: "ss -tuln",
      options: [
        { flag: "-t", meaning: "TCP" },
        { flag: "-u", meaning: "UDP" },
        { flag: "-l", meaning: "Listening sockets" },
        { flag: "-n", meaning: "Numeric ports (no service names)" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/ss.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/ss" },
      ],
    },
    {
      name: "traceroute",
      category: "network",
      summary: "Shows the hops a packet takes to reach a host.",
      example: "traceroute example.com",
      options: [
        { flag: "-n", meaning: "Numeric IPs only" },
        { flag: "-m N", meaning: "Max hops" },
        { flag: "-q N", meaning: "Probes per hop" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/traceroute.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/traceroute" },
      ],
    },
    {
      name: "nslookup",
      category: "network",
      summary: "Looks up DNS records for a name or IP (simple DNS query tool).",
      example: "nslookup example.com",
      options: [
        { flag: "NAME", meaning: "Look up this host" },
        { flag: "NAME SERVER", meaning: "Query a specific DNS server" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/nslookup.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/nslookup" },
      ],
    },
    {
      name: "apt",
      category: "packages",
      summary: "Debian/Ubuntu package tool: update indexes, install, remove, and upgrade packages.",
      example: "sudo apt update && sudo apt install curl",
      options: [
        { flag: "update", meaning: "Refresh package lists" },
        { flag: "install PKG", meaning: "Install a package" },
        { flag: "remove PKG", meaning: "Remove a package" },
        { flag: "upgrade", meaning: "Upgrade installed packages" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/apt.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/apt" },
      ],
    },
    {
      name: "apt-get",
      category: "packages",
      summary: "Older Debian/Ubuntu package command. Scripts often use this; people usually use apt.",
      example: "sudo apt-get update",
      options: [
        { flag: "update", meaning: "Refresh package lists" },
        { flag: "install PKG", meaning: "Install a package" },
        { flag: "remove PKG", meaning: "Remove a package" },
        { flag: "dist-upgrade", meaning: "Upgrade, including dependency changes" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man8/apt-get.8.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/8/apt-get" },
      ],
    },
    {
      name: "dpkg",
      category: "packages",
      summary: "Low-level Debian package tool. Works on .deb files. apt uses dpkg underneath.",
      example: "dpkg -i package.deb",
      options: [
        { flag: "-i FILE", meaning: "Install a .deb file" },
        { flag: "-r PKG", meaning: "Remove a package" },
        { flag: "-l", meaning: "List installed packages" },
        { flag: "-L PKG", meaning: "List files in a package" },
      ],
      links: [
        { label: "man7.org", url: "https://man7.org/linux/man-pages/man1/dpkg.1.html" },
        { label: "linux.die.net", url: "https://linux.die.net/man/1/dpkg" },
      ],
    },
    {
      name: "dnf",
      category: "packages",
      summary: "Fedora, RHEL, and related distros: install, remove, and update packages.",
      example: "sudo dnf install curl",
      options: [
        { flag: "install PKG", meaning: "Install a package" },
        { flag: "remove PKG", meaning: "Remove a package" },
        { flag: "upgrade", meaning: "Upgrade installed packages" },
        { flag: "search WORD", meaning: "Search package names and descriptions" },
      ],
      links: [
        { label: "linux.die.net (yum, similar)", url: "https://linux.die.net/man/8/yum" },
        { label: "man7.org (rpm)", url: "https://man7.org/linux/man-pages/man8/rpm.8.html" },
      ],
    },
    {
      name: "yum",
      category: "packages",
      summary: "Older Fedora/RHEL package tool. Newer systems use dnf; many yum commands still work.",
      example: "sudo yum install curl",
      options: [
        { flag: "install PKG", meaning: "Install a package" },
        { flag: "remove PKG", meaning: "Remove a package" },
        { flag: "update", meaning: "Update packages" },
        { flag: "search WORD", meaning: "Search packages" },
      ],
      links: [
        { label: "linux.die.net", url: "https://linux.die.net/man/8/yum" },
        { label: "man7.org (rpm)", url: "https://man7.org/linux/man-pages/man8/rpm.8.html" },
      ],
    },

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
  ],
};
