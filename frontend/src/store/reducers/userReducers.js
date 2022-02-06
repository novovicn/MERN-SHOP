
export const userLoginReducer = (state ={}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
          return { loading: true };
        case 'USER_LOGIN_SUCCESS':
          return { loading: false, userInfo: action.payload };
        case 'USER_LOGIN_FAIL':
          return { loading: false, error: action.payload };
        case 'USER_LOGOUT':
            return {};
        default:
          return state;
    }
}

export const userRegisterReducer = (state ={}, action) => {
  switch (action.type) {
      case 'USER_REGISTER_REQUEST':
        return { loading: true };
      case 'USER_REGISTER_SUCCESS':
        return { loading: false, userInfo: action.payload };
      case 'USER_REGISTER_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
  }
}

export const userDetailsReducer = (state = { user:{} }, action) => {
  switch(action.type){
    case 'USER_DETAILS_REQUEST':
      return {...state, loading: true}
    case 'USER_DETAILS_SUCCESS':
      return {loading: false, user:action.payload}
    case 'USER_DETAILS_FAIL':
      return {loading: false, error: action.payload}
      case 'USER_DETAILS_RESET':
        return {user: {}}
    default: 
      return state
  }
}

export const updateUserProfileReducer = (state = { userInfo:{} }, action) => {
  switch(action.type){
    case 'UPDATE_USER_PROFILE_REQUEST':
      return {...state, loading: true}
    case 'UPDATE_USER_PROFILE_SUCCESS':
      return {loading: false, userInfo:action.payload, success: true}
    case 'UPDATE_USER_PROFILE_FAIL':
      return {loading: false, error: action.payload}
    default: 
      return state
  }
}

export const usersReducer = (state = { users:[] }, action) => {
  switch(action.type){
    case 'LIST_USERS_REQUEST':
      return {...state, loading: true}
    case 'LIST_USERS_SUCCESS':
      return {loading: false, users:action.payload}
    case 'LIST_USERS_FAIL':
      return {loading: false, error: action.payload}
    default: 
      return state
  }
}

export const deleteUserReducer = (state = { }, action) => {
  switch(action.type){
    case 'DELETE_USER_REQUEST':
      return {loading: true}
    case 'DELETE_USER_SUCCESS':
      return {loading: false, success:true }
    case 'DELETE_USER_FAIL':
      return {loading: false, error: action.payload}
    default: 
      return state
  }
}