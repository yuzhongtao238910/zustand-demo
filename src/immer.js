const { produce} = require("immer")


let baseState = {
	ids: [1, 2, 3],
	pos: {
		x: 1,
		y: 2
	}
}
const nextState = produce(baseState, (draft) => {
	draft.ids.push(4)
})
// 返回一个新的对象，但是共享
console.log(baseState, nextState, baseState === nextState)
// 比较对象是否相等不需要深度遍历对象的每一层属性
console.log(baseState.ids === nextState.ids, baseState.pos === nextState.pos)