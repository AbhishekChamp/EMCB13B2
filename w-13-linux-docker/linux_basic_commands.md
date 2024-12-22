# Basic Linux Commands with Explanation

### 1. **`ls`** – List directory contents

-   **Usage:** `ls [options] [directory]`
-   **Explanation:** The `ls` command lists files and directories in the current directory or the specified directory.
-   **Example:**
    ```bash
    ls
    ls -l  # List in long format (shows permissions, owner, size, etc.)
    ls -a  # List all files, including hidden ones (those starting with .)
    ```

### 2. **`cd`** – Change directory

-   **Usage:** `cd [directory]`
-   **Explanation:** The `cd` command is used to change the current working directory.
-   **Example:**
    ```bash
    cd /home/user/Documents
    cd ..  # Move up one level
    cd ~   # Move to home directory
    ```

### 3. **`pwd`** – Print working directory

-   **Usage:** `pwd`
-   **Explanation:** This command displays the full path of the current directory you are in.
-   **Example:**
    ```bash
    pwd
    ```

### 4. **`mkdir`** – Make a new directory

-   **Usage:** `mkdir [directory_name]`
-   **Explanation:** The `mkdir` command creates a new directory with the specified name.
-   **Example:**
    ```bash
    mkdir new_directory
    ```

### 5. **`rmdir`** – Remove an empty directory

-   **Usage:** `rmdir [directory_name]`
-   **Explanation:** Deletes an empty directory.
-   **Example:**
    ```bash
    rmdir old_directory
    ```

### 6. **`rm`** – Remove files or directories

-   **Usage:** `rm [options] [file]`
-   **Explanation:** The `rm` command is used to remove files or directories. Use the `-r` option to remove directories recursively.
-   **Example:**
    ```bash
    rm file.txt
    rm -r directory_name  # Remove directory and its contents
    rm -f file.txt  # Force remove without prompt
    ```

### 7. **`cp`** – Copy files or directories

-   **Usage:** `cp [options] source destination`
-   **Explanation:** The `cp` command is used to copy files or directories.
-   **Example:**
    ```bash
    cp file1.txt file2.txt  # Copy file1.txt to file2.txt
    cp -r dir1 dir2  # Copy directory dir1 to dir2
    ```

### 8. **`mv`** – Move or rename files and directories

-   **Usage:** `mv [options] source destination`
-   **Explanation:** The `mv` command is used to move or rename files and directories.
-   **Example:**
    ```bash
    mv old_name.txt new_name.txt  # Rename a file
    mv file.txt /home/user/  # Move file to another directory
    ```

### 9. **`cat`** – Concatenate and display file contents

-   **Usage:** `cat [file_name]`
-   **Explanation:** The `cat` command is used to display the contents of a file.
-   **Example:**
    ```bash
    cat file.txt
    ```

### 10. **`echo`** – Display a line of text

-   **Usage:** `echo [string]`
-   **Explanation:** The `echo` command prints text to the terminal.
-   **Example:**
    ```bash
    echo "Hello, World!"
    ```

### 11. **`man`** – Display manual pages for commands

-   **Usage:** `man [command]`
-   **Explanation:** The `man` command shows the manual (help) page for any given command.
-   **Example:**
    ```bash
    man ls
    ```

### 12. **`chmod`** – Change file permissions

-   **Usage:** `chmod [permissions] [file]`
-   **Explanation:** The `chmod` command changes the file permissions (read, write, execute).
-   **Example:**
    ```bash
    chmod 755 script.sh  # Give full permissions to owner, read/execute to others
    chmod +x script.sh   # Make a script executable
    ```

### 13. **`chown`** – Change file owner and group

-   **Usage:** `chown [owner]:[group] [file]`
-   **Explanation:** The `chown` command changes the ownership of a file or directory.
-   **Example:**
    ```bash
    chown user:group file.txt
    ```

### 14. **`ps`** – Display running processes

-   **Usage:** `ps [options]`
-   **Explanation:** The `ps` command shows a list of currently running processes.
-   **Example:**
    ```bash
    ps aux  # Show all processes running
    ```

### 15. **`top`** – Display real-time process information

-   **Usage:** `top`
-   **Explanation:** The `top` command shows system resource usage and running processes in real-time.
-   **Example:**
    ```bash
    top
    ```

### 16. **`kill`** – Terminate a process

-   **Usage:** `kill [PID]`
-   **Explanation:** The `kill` command is used to terminate a process by its Process ID (PID).
-   **Example:**
    ```bash
    kill 1234  # Terminate the process with PID 1234
    ```

### 17. **`df`** – Display disk space usage

-   **Usage:** `df [options]`
-   **Explanation:** The `df` command shows disk space usage for file systems.
-   **Example:**
    ```bash
    df -h  # Show disk usage in human-readable format
    ```

### 18. **`du`** – Estimate file space usage

-   **Usage:** `du [options] [directory]`
-   **Explanation:** The `du` command estimates the disk space used by files or directories.
-   **Example:**
    ```bash
    du -sh /path/to/directory  # Show total size of a directory
    ```

### 19. **`grep`** – Search for text in files

-   **Usage:** `grep [options] pattern [file]`
-   **Explanation:** The `grep` command searches for specific text patterns within files.
-   **Example:**
    ```bash
    grep "search_term" file.txt
    grep -r "search_term" /path/to/directory  # Search recursively
    ```

### 20. **`wget`** – Download files from the internet

-   **Usage:** `wget [options] [URL]`
-   **Explanation:** The `wget` command is used to download files from the web.
-   **Example:**
    ```bash
    wget http://example.com/file.zip
    ```

### 21. **`tar`** – Archive files

-   **Usage:** `tar [options] [archive_name] [files]`
-   **Explanation:** The `tar` command is used to create and extract compressed archives.
-   **Example:**
    ```bash
    tar -cvf archive.tar folder/  # Create an archive
    tar -xvf archive.tar  # Extract an archive
    tar -czvf archive.tar.gz folder/  # Create a compressed archive
    ```

### 22. **`sudo`** – Execute a command as superuser (root)

-   **Usage:** `sudo [command]`
-   **Explanation:** The `sudo` command is used to run commands with superuser (root) privileges.
-   **Example:**
    ```bash
    sudo apt update  # Update package list on Debian-based systems
    ```

### 23. **`ifconfig`** – Configure network interfaces (older command, replaced by `ip`)

-   **Usage:** `ifconfig`
-   **Explanation:** The `ifconfig` command is used to view or configure network interfaces.
-   **Example:**
    ```bash
    ifconfig
    ```

### 24. **`ip`** – Show/manipulate routing, devices, and tunnels

-   **Usage:** `ip [options]`
-   **Explanation:** The `ip` command is used to show and manipulate network interfaces, routing tables, and more.
-   **Example:**
    ```bash
    ip a  # Show all network interfaces and their IP addresses
    ```

These are just a few of the most basic commands you’ll need when working with Linux. There are many more commands and options available depending on your needs!
