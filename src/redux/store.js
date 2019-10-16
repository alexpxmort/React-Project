import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import reducers from './reducers/rootReducer';
import {persistStore} from 'redux-persist'
import reduxThunk from 'redux-thunk'

const middleWares = [logger,reduxThunk];


export const store  = createStore(reducers,applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default  {store,persistor};