import { create} from "zustand"
import logger from "zustand/middleware/logger"
/*


*/
// 1- 先定义一个状态的函数
const createState = (set, get, subscribe) => {
  return {
    number: 0,
    name: 'number',
    add: () => {
      set(state => ({ // 会进行合并
        number: state.number + 1
      }))
      console.log("add")
    },
    minus: () => {
      set(state => ({ // 会进行合并
        number: state.number - 1
      }))
      console.log("minus")
    },
    asyncAdd: () => {
      setTimeout(() => {
        set(state => ({ // 会进行合并
          number: state.number + 1
        }))
      }, 1000)
    },
    promiseAdd: () => {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(res => {
        set(state => ({ // 会进行合并
          number: state.number + 1
        }))
      })
    },
    asyncMinus: async () => {
      await Promise.resolve(1).then(res => {
        setTimeout(() => {
          set(state => ({ // 会进行合并
            number: state.number + 1
          }))
        }, 2000)
      })
    }
  }
}
// 2- 把createState 传递给 create
// 先创建仓库 也就是状态管理器 然后返回一个自定义hook 调用这个自定义hook可以获取最新的状态
const useStore = create(logger(createState))
function App() {
  const {number, name, add, minus, asyncAdd, promiseAdd, asyncMinus} = useStore()
  return (
    <div>
      <p>{name}: {number}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={asyncAdd}>async++</button>
      <button onClick={promiseAdd}>promiseAdd++</button>
      <button onClick={asyncMinus}>asyncMinus++</button>
    </div>
  )
}

export default App
