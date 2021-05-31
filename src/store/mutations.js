import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    // mutations的唯一目的就是修改state中的状态
    // 尽可能只做一件事
    [ADD_COUNTER](state, payload) {
        payload.count++;
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true;
        state.cartList.push(payload);
    }
}