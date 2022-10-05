import { createStore } from 'vuex'

export default createStore({
    state: {
        name: 'Bo Bo Aung',
        local_cart: [],
    },
    getters: {
    },
    mutations: {
        getData(state) {
            let cart_str = localStorage.getItem('myCart'); // string
            if (cart_str) {
                // let cart_json = JSON.parse(cart_str)
                state.local_cart = JSON.parse(cart_str);
            } else {
                console.log('No data');
            }
        }
    },
    actions: {
        getCartData(context) {
            context.commit('getData');
        }
    },
    modules: {
    }
})
