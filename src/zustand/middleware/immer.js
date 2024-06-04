import {produce} from "immer"
export function immer (createState) {
  return (set, get, api) => {
  	api.setState = (updater) => {
  		// nextState 一个更新函数
  	  const nextState = produce(updater)
  	  console.log(nextState, 6)
  	  return set(nextState)
  	}
  	return createState(api.setState, get, api)
  }
}