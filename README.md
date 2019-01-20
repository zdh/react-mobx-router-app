This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>

### `yarn serve`

Serve it with a static server.

**Note: you should open http://ip:5000!**

## Project

- [x] [react-mobx-realworld-example-app](https://github.com/gothinkster/react-mobx-realworld-example-app)

- [x] [mobx-router](https://github.com/kitze/mobx-router)
- [x] [react-loadable](https://github.com/jamiebuilds/react-loadable)

- [x] [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list)

- [x] [create-react-app](https://github.com/facebook/create-react-app)
- [x] [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [x] [customize-cra](https://github.com/arackaf/customize-cra)
- [x] [@babel/plugin-proposal-decorators](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-decorators)

- [ ] [Typescript](https://www.typescriptlang.org/)，未集成。

## Learn and Notes

* 修饰器在 `·Create React App (v2)` 中需要 `react-app-rewired` 和 `customize-cra` 来实现。
	> decorators are not supported out of the box in create-react-app@2.*. To fix this, you can either use the decorate utility, eject, or use the customize-cra package.

* 替换`mobx-router`后，当传递参数时，部分fetch数据触发时机存在问题，可通过`onParamsChange`触发。

* 根据webpack import()机制实现动态加载JS模块，通过第三方`react-loadabler`模块统一管理。

* 文章列表实现无限加载，引用高性能`react-tiny-virtual-list`组件。

* 通过ServiceWorker预缓存（precache）资源文件，Google官方推出人[Workbox](https://developers.google.com/web/tools/workbox/)是极好的解决方案。
