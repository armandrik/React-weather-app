import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import reducer from './reducers/rootReducer'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['product'],
    // blacklist: ['product'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
