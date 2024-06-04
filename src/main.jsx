/*
中间件是一个函数，用于增强store的功能
中间件可以解惑store之中的set方法调用并且进行一些操作，例如日志记录，性能跟踪，异常处理等等

中间件提供了一种灵活而且可以扩展的方式来修改或者增强store的行为，同时保持了store的独立性

中间件是一个函数

1. 日志中间件
*/
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App />
)
