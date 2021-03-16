import { createStore, combineReducers } from 'redux';

import globalSlice, { GlobalStateModel } from './slice/global.slice';

export interface CombineReducersModel {
    global: GlobalStateModel,
}

const rootReducer = combineReducers<CombineReducersModel>({
    global: globalSlice,
});

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer);

export default store;
