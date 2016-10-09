# Git

## 流程化

- 克隆一个项目：
```
git clone git@github.com:xQuotes/xquotes.github.io.git
```

- 添加子项目：

当代码需要打包的时候，为了保持开发仓库的纯净，使用`git submodule` 添加子仓库来保存打包后的代码，用于上线。

```
.gitmodules

[submodule "dist"]
  path = dist
  url = git@xxx.git
```

```
Makefile

static:
  @git submodule update --init
```