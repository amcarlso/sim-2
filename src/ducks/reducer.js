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

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'

export function updateName( name ) {
  console.log('function hit')
  return {
    type: UPDATE_NAME, 
    payload: name
  }
}
export function updateAddress( address ) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}
export function updateCity( city ) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}
export function updateState( state ) {
  return {
    type: UPDATE_STATE,
    payload: state
  }
}
export function updateZip( zip ) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  }
}
export function updateImg( img ) {
  return {
    type: UPDATE_IMG,
    payload: img
  }
}
export function updateMortgage( mortgage ) {
  console.log('function hit')
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  }
}
export function updateRent( rent ) {
  console.log('function hit')
  return {
    type:UPDATE_RENT,
    payload: rent
  }
}

function reducer(state = initialState, action) {
  console.log('reducer hit')
  switch( action.type ){
    case UPDATE_NAME:
      return Object.assign({}, state, { 
        name: action.payload
      })
    case UPDATE_ADDRESS:
      return Object.assign({}, state, {
        address: action.payload
      })
    case UPDATE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      })
      case UPDATE_STATE:
      return Object.assign({}, state, {
        state: action.payload
      })
      case UPDATE_ZIP:
      return Object.assign({}, state, {
        zip: action.payload
      })
      case UPDATE_IMG:
      return Object.assign({}, state, {
        img: action.payload
      })
      case UPDATE_MORTGAGE:
      return Object.assign({}, state, {
        mortgage: action.payload
        
      })
      case UPDATE_RENT:
      return Object.assign({}, state, {
        rent: action.payload
      })
    
    default: return state; 
  }
}
export default reducer