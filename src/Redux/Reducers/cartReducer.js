import { ADD_TO_CART, UPDATE_CART_UNITS, REMOVE_TO_CART } from "../Actions/addCartAction";

const INITIAL_STATE = [];

export default function cartReducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case ADD_TO_CART: {

            const product = action.payload;
            const cart = state;
            const existingProductIndex = findProductIndex(cart, product.id);

            const updatedCart = existingProductIndex >= 0
                ? updateProductUnits(cart, product)
                : [...cart, product];
            return updatedCart;
        }

        case REMOVE_TO_CART: {
            
            const product = action.payload;
            const cart = state;
            
            let itemToRemove= cart.find(item=> product.id === item.id)
            let new_items = cart.filter(item=> product.id !== item.id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log(itemToRemove)
            return [...new_items]
                // total: newTotal
            
        }

        case UPDATE_CART_UNITS: {

            const payload = action.payload;
            const cart = state;

            const existingProductIndex = findProductIndex(cart, payload.id);

            if (existingProductIndex >= 0) {
                let product = cart[existingProductIndex];
                product.unitOfPurchase = payload.units;
                product.priceOfPurchase = parseInt(product.salePrice) * payload.units;
                cart[existingProductIndex] = product;
            }

            return [...cart]

        }

        default:
            return state
    }
}


const findProductIndex = (cart, productID) => {
    return cart.findIndex(p => p.id === productID);
};

const updateProductUnits = (cart, product) => {
    const productIndex = findProductIndex(cart, product.id);

    const updatedCart = [...cart];
    const existingProduct = updatedCart[productIndex];

    const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct.units + product.unitOfPurchase,
        priceOfProduct: existingProduct.units * parseInt(product.salePrice)
    };

    updatedCart[productIndex] = updatedUnitsProduct;

    return updatedCart;
};

const removeProduct = (cart, product) => {
    const productIndex = findProductIndex(cart, product.id);
    console.log("remove index ",productIndex)

    const updatedCart = [...cart];
    const existingProduct = updatedCart.pop(productIndex);
    console.log("remove index ",existingProduct)
    // const updatedUnitsProduct = {
    //     ...existingProduct,
    // };

    // updatedCart = updatedUnitsProduct;

    // return updatedCart;
};