import { createStore} from "./vanilla.js"
import { useSyncExternalStore, useEffect, useRef, useCallback } from "react"

// 自己实现的
function useSyncExternalStoreSelf(subscribe, getState) {
  const [state, setState] = useState(getState())
  useEffect(() => {
    return subscribe((newState) => {
      setState(newState)
    })
  }, [])
  return state
}

// function useSyncExternalStore(subscribe, getState) {
//   useEffect(() => {
//     subscribe((newState, oldState) => {
//       getState()
//     })
//   }, [])
// }

function useStore(api, selector) {
  // 这它用来 缓存上一次的整个状态的快照
  const lastSnapshotRef = useRef(null)
  // 用来缓存上一个选择的结果对象
  const lastSelectionRef = useRef(null)
  const getSelection = useCallback(() => {
    let lastSelection = lastSelectionRef.current // 获取上一次的选择值
    if (lastSelection === null) {
      // 获取新的完整状态
      const nextSnapShot = api.getState()
      // 获取新的选择
      const nextSelection = selector(nextSnapShot)
      lastSnapshotRef.current = nextSnapShot
      lastSelectionRef.current = nextSelection
      return nextSelection
    } else {
      // 如果不是第一次的话
      // 获取老的快照
      const lastSnapshot = lastSnapshotRef.current
      // 获取新的快照
      const nextSnapShot = api.getState()
      if (Object.is(lastSnapshot, nextSnapShot)) {
        return lastSelectionRef.current
      }
      const nextSelection = selector(nextSnapShot) // 计算新的值 缓存
      lastSnapshotRef.current = nextSnapShot
      lastSelectionRef.current = nextSelection
      return nextSelection
    }
    return lastSelectionRef.current
  }, [])
  let value = useSyncExternalStore(api.subscribe, getSelection

    // () => {
    //   return selector(api.getState()) // selector 的结果每次都是新的，会导致无限循环
    // }

  )
  return value
}

export const create = (createState) => {
  // 创建仓库
  const api = createStore(createState)
  // 返回一个自定义的hook 里面通过 useStore 获取仓库之中最新的状态
  return (selector) => useStore(api, selector)
}






