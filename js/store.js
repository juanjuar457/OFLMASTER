import { createStore, applyMiddleware} from 'redux';
import oflMaterialReducer from './reducers/index';

import thunk from 'redux-thunk';

// export default configureStore(initialState) {
//     return createStore(
//         oflMaterialReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }

// const initialState = {
//     materials: [
//         // {
//         //     vendor: "",
//         //     quantity: "", //sometimes they have '3UI' for units
//         //     productName: "",
//         //     catalogNumber: "",
//         //     unitSize: "", //fix the underscore
//         //     units: "",
//         //     onBackOrder: false
//         // }
//     ]
// }
export default createStore( oflMaterialReducer, applyMiddleware(thunk));
// export default function configureStore(initialState) {
//     return createStore( oflMaterialReducer , initialState, applyMiddleware(thunk) );
// }
//
// // //put back 23 when thunk is applied correctly to use the reducer. -might need a combine reducer
// // //to make it correctly.