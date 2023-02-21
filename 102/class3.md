## **<git> - Sharing code and collaboration: dvcs distributed version control system for the masses**

**What is git?**
- It’s a version control system.
- It lets multiple developers work on the same code
- A history of changes to your files
- The ability to view, apply and remove those changes
- Keep all of your project files in one repository
- It makes collaboration possible

**Snapshots in time**

Commits represent each successive version of a file or files.

Commits are the Git equivalent of “Save As…”

Git keeps track of what the file looked like at different points in time.

Each commit has a label that points to it

HEAD = The label meaning “You are here”

You can also assign messages to commits

Messages are like writing a caption for your snapshot.

**In Summary** 

You use Git to take snapshots of your code at points in time

Git keeps a history of what those snapshots look like

Git has a special label, called HEAD, that means “You are here”

Usually you give a snapshot a label called a message

## **<GitHub> - your code in the cloud**

- Not git
- A way to share code with others!
- An online place to store your code. (Backup is good!)
- If Git was a sport, GitHub is where you can do it.
- Version Tracking
- Reviewing changes
- Keep changes separate until you want to add them in

**With Git (version control) and GitHub (online code storage), you can:**

- Have lots of team members work together on the same files, without messing each other up
- Keep a history of each file over time
- Work on code on your own computer, and sync it with what is online

## **<repositories>**
- A repository is a collection of files that you’ve told Git to pay attention to
- Usually one project = one repository
- Really large projects might have multiple repositories for different parts of their system (ie: front end vs back end)
- Repositories can live on GitHub and/or your computer

## **<gitflow:acp>**

**Add, commit, push**

Using git status

Now that your files are in your repo, we need to make a commit

Review the current status of your files by typing git status  >git status

It will tell you what files have changed since your last commit.

Right now, git is paying attention to 1 file (README.md)

> git add fileName.extension

You can chain multiple files together by using a space between each file

Git add .     This will look for all of the changes in the current directory and add them all

Using git commit

Git commit -m “your message goes here”


Git push origin main

