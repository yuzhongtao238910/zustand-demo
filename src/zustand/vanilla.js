// 接受一个创建初始状态的方法 返回一个仓库/状态管理器
export const createStore = (createState) => {
  // 保存在内部的状态
  let state;
  let listeners = new Set() // 存放监听函数
  const getState = () => {
    return state
  }
  // 修改状态 参数可以是新状态 也可是一个新函数
  const setState = (partial) => {
    //  看 partial是否是更新函数
    const nextState =  typeof partial === 'function' ? partial(state) : partial
    if (!Object.is(nextState, state)) {
      // 判断老状态和新状态是不是同一个对象
      const previousState = state
      state = Object.assign({}, state, nextState)
      listeners.forEach(l => {
        l(state, previousState)
      })
    }
  }
  // 订阅函数 监听仓库之中的状态变更 变更后通知监听函数
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }
  const api = {
    getState,
    setState,
    subscribe
  }
  // 调用 createState 方法 获取初始的状态
  state = createState(setState, getState, api)
  return api
}