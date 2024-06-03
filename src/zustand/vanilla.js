// 接受一个创建初始状态的方法 返回一个仓库/状态管理器
export const createStore = (createState) => {
  // 保存在内部的状态
  let state;
  const getState = () => {
    return state
  }
  const api = {
    getState,
  }
  // 调用 createState 方法 获取初始的状态
  state = createState()
  return api
}