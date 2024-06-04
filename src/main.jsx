/*
中间件是一个函数，用于增强store的功能
中间件可以解惑store之中的set方法调用并且进行一些操作，例如日志记录，性能跟踪，异常处理等等

中间件提供了一种灵活而且可以扩展的方式来修改或者增强store的行为，同时保持了store的独立性

中间件是一个函数

1. 日志中间件

2. 状态分片：
    是将整个应用程序的状态state拆分为不同的部分，每个部分被称为状态分片
    这样可以将状态和状态更新的逻辑细分为多个独立的模块，从而使得应用程序的状态管理更加的清晰和可维护


3.持久化中间件

4. immer中间件：
    每次都可以返回一个新对象，又可以共享没有修改的部分
*/
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App />
)
