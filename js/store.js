import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import oflMaterialReducer from './reducers/index';

const initialState = {
    materials: [
        // {
        //     vendor: "",
        //     quantity: "", //sometimes they have '3UI' for units
        //     productName: "",
        //     catalogNumber: "",
        //     unitSize: "", //fix the underscore
        //     units: "",
        //     onBackOrder: false
        // }
    ]
}
export default createStore( oflMaterialReducer);
// export default function configureStore(initialState) {
//     // return createStore( oflMaterialReducer , initialState, applyMiddleware(thunk) );
// }

//put back 23 when thunk is applied correctly to use the reducer. -might need a combine reducer
//to make it correctly.