import {
  ADD_TO_CART, 
  ADD_CART_COUNT
} from './mutation-types'

const actions = {

  //将商品添加到购物车
  addToCart({ commit, state }, payload) {
    const list = state.cartList 


    const idx = list.findIndex((val, idx) => {
      return val.id == payload.id
    })
    
    // console.log(idx)
    if(idx < 0) {
      commit(ADD_TO_CART, payload)
    }
    else {
      commit(ADD_CART_COUNT, idx)
    }
  
  },
  
} 

export default actions