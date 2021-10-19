export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_UNITS = "UPDATE_CART_UNITS";
export const REMOVE_TO_CART = "REMOVE_TO_CART";


export function addToCartAction(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function removeToCartAction(payload) {
    return {
        type:  REMOVE_TO_CART,
        payload
    }
}

export function updateCartUnits(payload) {
    return {
        type: UPDATE_CART_UNITS,
        payload
    }
}