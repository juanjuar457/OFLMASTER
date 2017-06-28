// import routes from './routes.js';

export const ADD_MATERIAL = 'ADD_MATERIAL';
export const addMaterial = material => ({
    type: ADD_MATERIAL,
    material
});


export const DEL_MATERIAL = 'DEL_MATERIAL';
export const delMaterial = id => ({
    type: DEL_MATERIAL,
    id
});


export const FETCH_MATERIALS_SUCCESS = 'FETCH_MATERIALS_SUCCESS';
export const fetchMaterialsSuccess = materials => ({
    type: FETCH_MATERIALS_SUCCESS,
    materials
});


export const FETCH_MATERIALS = 'FETCH_MATERIALS';
export const fetchMaterials = () => dispatch => {
    fetch('/materials').then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(material => {
        dispatch(fetchMaterialsSuccess(material));
    });
};

//TODO edit for use with materialForm.js Loads initial state of OFL Form

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
