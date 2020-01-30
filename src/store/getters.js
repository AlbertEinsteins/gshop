const getters = {
  cartList: (state) => state.cartList,
  cartAllPrice: (state) => {
    let price = 0 
    state.cartList.forEach((val) => price += (val.price * val.count))
    return price 
  },
  cartListLength: (state) => state.cartList.length,
  cartAllCheckedPrice: (state) => {
    let price = 0 
    state.cartList.forEach((val) => {
      if(val.isChecked) {
        price += val.price * val.count
      }
    })
    return price
  }
}

export default getters