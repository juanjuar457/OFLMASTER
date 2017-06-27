import * as actions from '../actions/index';

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
//problem could be here, array of obj inside obj?


const oflMaterialReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_MATERIAL) {
        console.log("not delete");
        console.log(state);
        return Object.assign({}, state, {
            materials: [...state.materials, {...action.material, id: state.materials.length++}]
        });
    }

    else if (action.type === actions.DEL_MATERIAL){
        console.log("call delete")
        let materials = state.materials.filter(
            (item) => {
                return item.id !== action.id;
            }
        );
        return Object.assign({}, state, {
            materials: materials
        });
    }
    return state;
};



export default oflMaterialReducer;

//structure used on 21 to 46 is the same structure every reducer
//you should set a default state,
//state=initialState
//then have a series of if-else stmnts that handle the diff action types
//in each if block you return the new state, modified according to each action.
//QQQ returning the NEW state isn't the same as directly mutating it?!**line 42 and 23!
// Dispatching actions to the store is the sole way in which you modify state using Redux, so you should get familiar with the flow of:
//
// Creating an action
// Handling it in a reducer
// Triggering it using dispatch

//can have other vals on 22, most common is action.type
//stand alone reducer with only if stmnt and can cause multiple actions to fire.
//1 action can fire many reducer calls.