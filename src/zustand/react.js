import { createStore} from "./vanilla.js"
import { useSyncExternalStore } from "react"
function useStore(api) {
  let value = useSyncExternalStore(api.subscribe, api.getState)
  return value
}

export const create = (createState) => {
  // 创建仓库
  const api = createStore(createState)
  // 返回一个自定义的hook 里面通过 useStore 获取仓库之中最新的状态
  return () => useStore(api)
}






