# Express Nodejs example app with absolute imports
A small boilerplate example on how to use aliases to have absolute imports in nodejs project.
Created mainly to illustrate [this post](https://yaraoncode.me/post/how-to-avoid-relative-paths-in-nodejs-typescript-project).

## Run the project

```sh
git clone git@github.com:nemish/express-node-absolute-imports.git
cd express-node-absolute-imports 
yarn
yarn start
```

## Notes

Main things to pay attention to:
- `baseUrl` and `paths` config options in `tsconfig.json`
- `_moduleAliases` key in package.json
- `import 'module-alias/register'` in `src/index.ts`; 
