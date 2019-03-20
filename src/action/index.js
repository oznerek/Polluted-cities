import Config from '../API/Config'
import lodash from 'lodash'

export const fetchCity = (countries) => async dispatch  => {
    console.log('action',countries)
    const response = await Config.get(
    );
    return dispatch ({
        type: 'CITY_FETCHED',
        payload: response
    })
}

// export const fetchCity = (countries) => {
// return({
//     type: 'CITY_FETCHED',
//     payload: countries

// })
// } 

// export const fetchCity = (countries) => async dispatch => {
//     console.log('action',countries)
//     const response =await Config.get({
//         params: {
//             country: countries
//         }
//     });
//     return dispatch({
//         type: 'CITY_FETCHED',
//         payload: response
//     })
// }


// export const fetchCityDetails = (id) => (dispatch) => _fetchMenu(id, dispatch);
//     const _fetchMenu = lodash.memoize(async (id, dispatch) => {
//         const response = await Config.get(`/get`,{
//             params: {
//                 id: id
//               }
//             }); 

//     return dispatch({ type: 'CITY_DETAILS_FETCHED', payload: response.data.recipes})
// });