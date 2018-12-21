const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: ''
}

const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE'

export function updateStepOne( name, address, city, state, zip ) {
  console.log('function hit')
  return {
    type: UPDATE_STEP_ONE, 
    payload: name, address, city, state, zip
  }
}
// export function updateAddress( address ) {
//   return {
//     type: UPDATE_ADDRESS,
//     payload: address
//   }
// }
// export function updateCity( city ) {
//   return {
//     type: UPDATE_CITY,
//     payload: city
//   }
// }
// export function updateState( state ) {
//   return {
//     type: UPDATE_STATE,
//     payload: state
//   }
// }
// export function updateZip( zip ) {
//   return {
//     type: UPDATE_ZIP,
//     payload: zip
//   }
// }

function reducer(state = initialState, action) {
  console.log('reducer hit')
  switch( action.type ){
    case UPDATE_STEP_ONE:
      return Object.assign({}, state, { 
        name: action.payload,
        address: action.payload,
        city: action.payload,
        state: action.payload,
        zip: action.payload,
        mortgage: '',
        rent: ''
      })
    // case UPDATE_ADDRESS:
    //   return Object.assign({}, state, {name: action.payload})
    // case UPDATE_CITY:
    //   return Object.assign({}, state, {city: action.payload})
    // case UPDATE_STATE:
    //   return Object.assign({}, state, {state: action.payload})
    // case UPDATE_ZIP:
    //   return Object.assign({}, state, {zip: action.payload})
    default: return state; 
  }
}
export default reducer