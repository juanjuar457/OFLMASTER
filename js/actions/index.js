export const ADD_MATERIAL = 'ADD_MATERIAL';
export const addMaterial = material => ({
    type: ADD_MATERIAL,
    material
});


//TODO edit for use with materialForm.js Loads initial state of OFL Form
// export const FETCH_OFL_FORM_SUCCESS = 'FETCH_OFL_FORM_SUCCESS';
// export const fetchOflFormSuccess = materialForm => ({
//     type: FETCH_OFL_FORM_SUCCESS,
//     materialform
// });
//this is mocking the function of loading the board from the trello app via an external api..
// export const fetchMaterialForm = () => dispatch => {
//     fetch('/').then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(materialForm => {
//         dispatch(fetchOflFormSuccess(materialForm));
//     });
// };
