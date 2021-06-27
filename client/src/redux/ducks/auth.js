export const AUTH = 'takeAUTH'
export const LOGOUT = 'logOut'
export const LOGIN = 'logIn'
export const REGISTER = 'register'

export const takeAUTH = (result, token) => ({
    type: AUTH,
    data: {
        result: result,
        token: token
    }
});

export const logOut = () => ({
    type: LOGOUT
})

export const logIn = (loginData, history) => ({
    type: LOGIN, 
    loginData,
    history
})

export const register = (loginData, history) => ({
    type: REGISTER,
    loginData,
    history
})

const initialState =  {
    authData: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case AUTH:
            window.localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return {...state, authData: action?.data};
        case LOGOUT:
            window.localStorage.clear();
            return {...state, authData: null};
        default: return state;
    }
}

