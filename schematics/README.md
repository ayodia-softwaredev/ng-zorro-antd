# ng-zorro-antd Schematics

## Schematics

### ng-add

添加 ng-zorro-antd 与它的依赖，并根据需要自动配置。

- 添加 ng-zorro-antd 到 `package.json`
- 替换 `app.component.html` 引导内容
- 在根模块导入必要的模块
- 进行国际化配置
- 将用于自定义的 `theme.less` 或编译后的 css 导入 `angular.json`

```bash
$ ng add ng-zorro-antd [--locale=zh-CN] [--theme] [--skipPackageJson]
```

## 开发

### 脚本

- `npm run schematic:build` 编译到 publish 文件夹
- `npm run schematic:demo` 从 demo 生成 schematics
- `node ./schematics_script/set-version.js` 从 package.json 设置版本号
- `node ./schematics_script/set-theme.js` 从 site_scripts/_site/src/theme.less 设置自定义样式内容

### 开发

只有首次运行才需要以下步骤。

1. 运行 `npm run generate` 生成 `publish` 文件夹
2. `cd publish && npm link`
3. `ng new schematic-debug`
4. `cd schematic-debug && npm link ng-zorro-antd`

调试

1. `cd schematic-debug`
1. `git checkout . && git clean -fd`
1. `ng g ng-zorro-antd:[schematics]`

发布

原有发布流程不变，但是 `schematics/utils/custom-theme.ts` 和 `schematics/utils/lib-versions.ts` 内容为动态生成，不提交到版本管理。