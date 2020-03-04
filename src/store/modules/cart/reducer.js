import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_TO_CART': {
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                } else {
                    const { product } = action;

                    draft.push(product);
                }
            });
        }
        case '@cart/UPDATE_AMOUNT': {
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }

        default:
            return state;
    }
}
