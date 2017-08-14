import UserConstant from '../constants/user.constant'

export default function reducer(state = {
    loginViewModel: {
        mobile: '',
        password: '',
    },
    validation: {
        validatedMobile: false,
        validatedPassword: false
    },
    loggedUser: {},
    isAuthorize: false
}, action) {
    switch (action.type) {
        case UserConstant.USER_LOGIN_REGISTER:
            return {
                ...state,
                loggedUser: action.payload,
                isAuthorize: true
            }
        case UserConstant.EDIT_LOGIN_MOBILE:
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    mobile: action.payload.val,
                },
                validation: {
                    ...state.validation,
                    validatedMobile: action.payload.isMobile
                }
            }
        case UserConstant.EDIT_LOGIN_PASSWORD:
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    password: action.payload.val,
                },
                validation: {
                    ...state.validation,
                    validatedPassword: action.payload.isPassword
                }

            }
        default:
            return state;
    }
}