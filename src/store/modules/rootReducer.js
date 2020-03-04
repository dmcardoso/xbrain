import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart/reducer';

export default combineReducers({
    cart,
    form: formReducer,
});
