## 构建React 应用

参考Deom中的React应用进行搭建，建议使用不要使用redux,mobx等状态管理器管理MMEditor的实例，以免造成性能压力

## 直接通过React渲染到Node的方法
可以考虑使用foreignObject 指定宽高，然后通过ReactDOM.render()渲染指定组件到foreignObject内