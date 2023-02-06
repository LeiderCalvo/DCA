###### Class 03

# Git and GitHub 🧑‍💻

![Git, Version Manager](https://render.com/static/fedb9832395a0f61cbe04b2a6ca08ed1/improved-git-flow-2.png)

**useful scripts:**

- initialize a repository
  - `git init`
- track changes from an specific file
  - `git add <file>`
- track changes from all files on the repository
  - `git add .`
- create a new commit with message
  - `git commit -m "any message"`
- check current changes
  - `git status`
- navigate to a branch
  - `git checkout <branchName>`
- create and navigate to a new branch
  - `git checkout -b <newBranchName>`
- create and navigate to a new branch based on another branch
  - `git checkout -b <newBranchName> <baseBranch>`
- list all branches
  - `git branch`
- hard delete a branch
  - `git branch -D <branchName>`
- soft delete a branch
  - `git branch -d <branchName>`
- get changes from remote
  - `git pull`
- add remote to local repository
  - `git remote add origin <remoteUrl>`
- send local changes to remote
  - `git push`
- send local changes to remote for the first time in the branch
  - `git push -u origin <branchName> `
- list all commits of the repository
  - `git log --oneline --all`
- list all commits of the repository in a graph mode
  - `git log --oneline --decorate --graph --all`
- merge change from a branch to the current one
  - `git merge <updatedBranchName>`
- undo last commit
  - `git reset --soft HEAD^`

##### Check the [Git Docs](https://git-scm.com/docs) for more information

---

## How to create repositories

To create a GitHub remote repository check the [quick start docs](https://docs.github.com/es/get-started/quickstart/create-a-repo).

You will need to clone the repository created into your local machine, so you can follow these [clonning steps](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

---

## Good practices

You should use a convention that helps you to avoid having meaning less commit messages all around your repository.

.

#### **Commits and PRs naming standarts:**

1. It begins with a _type_, which is one of the following, followed by a colon.
   - `feat:` - A new feature
   - `fix:` - A bug fix
   - `docs:` - Documentation only changes
   - `style:` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
   - `refactor:` - A code change that neither fixes a bug nor adds a feature
   - `perf:` - A code change that improves performance
   - `test:` - Adding missing tests or correcting existing tests
   - `build:` - Changes that affect the build system (ie: Babel, EAS, Webpack)
   - `ci:` - Changes to our CI configuration files and scripts (ie: Github Actions)
   - `chore:` - Other changes that don't modify src or test files
   - `revert:` - Reverts a previous commit
   - `release:` - A new version of the app will be move to production
2. It includes a short description of the branch's contents

So the formula is `<type>: <description>` (eg:
`feat: authentication flow`)

Check [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for the full specification.

.  
.  
.

### Branching Model

![Git Flow](/assets/GitFlow.png)

Check [Git Flow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow) for the full specification.

---

## Practice

1. **Work on your own**
   1. Create a remote repository
   2. Clone it into your local machine
   3. Add diferent files with some content while creating different commits for them
   4. Create 2 separate branches for the versions B and C of your project
2. **Collaborate with others:** You **(A)** and your partner **(B)** are storytellers for a brand new magazine of the city and have been requested to create a story to publish tomorrow morning, so you start working together to get it done!
   1. With a partner, create a remote repository on **B's** account
   2. Clone the repository on both machines
   3. **A** will create a file with a story in it and push the changes constantly
   4. At some point, **B** will pull this story to see **A's** progress and decide to make some improvements to it
   5. **B** will publish the improvements in the repository
   6. **A** thinks that could do better so, keeps making changes without noticing that **B** made some improvements
   7. When **A** feels confortable with it try to commit, but will have to resolve some conflicts first
3. **Collaborate with other in the right way:**
   1. **A** and **B** will create separate branches for each version of the story
   2. both will create pull requests pointing to the main branch
   3. both will get review on their PRs by the partner
   4. both PRs must be merge
