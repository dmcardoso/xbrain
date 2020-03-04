export function addToCart(product) {
    return {
        type: '@cart/ADD_TO_CART',
        product,
    };
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    };
}
