import { create } from "./zustand"
import logger from "./zustand/middleware/logger"
import {persist, createJSONStorage } from "./zustand/middleware/persist"
import { immer } from "./zustand/middleware/immer"
/*


*/
// 1- 先定义一个状态的函数
// const createState = (set, get, subscribe) => {
//   return {
//     number: 0,
//     a: 1,
//     b: 2,
//     name: 'number',
//     add: () => {
//       set(state => ({ // 会进行合并
//         number: state.number + 1
//       }))
//       console.log("add")
//     },
//     minus: () => {
//       set(state => ({ // 会进行合并
//         number: state.number - 1
//       }))
//       console.log("minus")
//     },
//     asyncAdd: () => {
//       setTimeout(() => {
//         set(state => ({ // 会进行合并
//           number: state.number + 1
//         }))
//       }, 1000)
//     },
//     promiseAdd: () => {
//       new Promise((resolve) => {
//         setTimeout(() => {
//           resolve()
//         }, 1000)
//       }).then(res => {
//         set(state => ({ // 会进行合并
//           number: state.number + 1
//         }))
//       })
//     },
//     asyncMinus: async () => {
//       await Promise.resolve(1).then(res => {
//         setTimeout(() => {
//           set(state => ({ // 会进行合并
//             number: state.number + 1
//           }))
//         }, 2000)
//       })
//     },
//     // 请求一个接口，返回一个数字
//     fetchDemo: async () => {
//       const res = await fetch("url").then(res => res.json())
//       set({number: res})
//     }
//   }
// }
// 2- 把createState 传递给 create
// 先创建仓库 也就是状态管理器 然后返回一个自定义hook 调用这个自定义hook可以获取最新的状态
// const useStore = create(persist(createState, {
//   name: "counter", // 保存到本地之中的key
//   storage: createJSONStorage(sessionStorage) // 使用的存储
// }))
const createState = (set, get, subscribe) => {
  return {
    number: 0,
    a: 1,
    b: 2,
    name: 'number',
    add: () => set(state => {
      state.number += 1
    }),
    minus: () => set(state => {
      state.number -= 1
    })
  }
}
const useStore = create(immer(createState))
// function App() {
//   const {number, name, add, minus, asyncAdd, promiseAdd, asyncMinus} = useStore()
//   return (
//     <div>
//       <p>{name}: {number}</p>
//       <button onClick={add}>+</button>
//       <button onClick={minus}>-</button>
//       <button onClick={asyncAdd}>async++</button>
//       <button onClick={promiseAdd}>promiseAdd++</button>
//       <button onClick={asyncMinus}>asyncMinus++</button>
//     </div>
//   )
// }

// export default App
function App() {
  const res = useStore(
    state => ({
      number: state.number,
      add: state.add
    })
  )
  console.log(res, 78)
  return (
    <div>
      <p>{res.number}</p>
      <button onClick={res.add}>+</button>
    </div>
  )
}

export default App