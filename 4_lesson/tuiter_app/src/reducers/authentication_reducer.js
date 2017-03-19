
const INITIAL_STATE = { authenticated: null, errorMessage: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case 'SIGNIN_LOGIN':
      let authenticated = action.payload.username == "marcelo" && action.payload.password == "123";
      let errorMessage = authenticated ? null : "invalid username or password";
      return {
        ...state,
        authenticated: authenticated,
        errorMessage: errorMessage
      }
  }

  return state;
}
