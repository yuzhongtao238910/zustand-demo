import { create} from "./zustand"
/*


*/
// 1- 先定义一个状态的函数
const createState = (set) => {
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
    }
  }
}
// 2- 把createState 传递给 create
// 先创建仓库 也就是状态管理器 然后返回一个自定义hook 调用这个自定义hook可以获取最新的状态
const useStore = create(createState)
function App() {
  const {number, name, add, minus} = useStore()
  return (
    <div>
      <p>{name}: {number}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default App
