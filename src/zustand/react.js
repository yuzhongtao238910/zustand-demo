import { createStore} from "./vanilla.js"
function useStore(api) {
  return api.getState()
}

export const create = (createState) => {
  // 创建仓库
  const api = createStore(createState)
  // 返回一个自定义的hook 里面通过 useStore 获取仓库之中最新的状态
  return () => useStore(api)
}






