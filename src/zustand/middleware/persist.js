export function persist(createState, {name, storage}) {
  return (set, get, api) => {
    let result =  createState((...args) => {
    	set(...args)
    	storage.setItem(name, get())
    }, get, api)
    
    queueMicrotask(() => {
    	set(storage.getItem(name)) // 把本地存储的值取出来放到仓库之中
    })
    return result
  }
}
export function createJSONStorage(storage) {
  return {
  	getItem(name) {
  	  const str = storage.getItem(name)
  	  return str ? JSON.parse(str) : {}
  	},
  	setItem(name, newValue) {
  	  storage.setItem(name, JSON.stringify(newValue))
  	}
  }
}