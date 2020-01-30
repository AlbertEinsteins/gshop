import {
  ADD_TO_CART,
  ADD_CART_COUNT
} from './mutation-types'

const mutations = {
  //不检验重复
  [ADD_TO_CART](state, cartItem) {
    cartItem.isChecked = true 
    state.cartList.push(cartItem)
  },
  //cartList[idx]这一项的cartItem的count + 1
  [ADD_CART_COUNT](state, idx) {
    state.cartList[idx].count ++
  }
}

export default mutations