import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import CategoryReducer from './CategoryReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import DirectoryReducer from './DirectoryReducer';
import ShopReducer from './ShopReducer';

const persistConfig = {
    'key':'root',
    storage,
    whiteList:['cart']

}

const rootReducer =  combineReducers({
    auth:AuthReducer,
    cart:CartReducer,
    cat:CategoryReducer,
    directory:DirectoryReducer,
    shop:ShopReducer
})

export default persistReducer(persistConfig,rootReducer)