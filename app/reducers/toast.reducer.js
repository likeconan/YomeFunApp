import ToastConstant from '../constants/toast.constant'

export default function reducer(state = {
    toast: {
        message: '',
    },
    visible: false,
}, action) {
    switch (action.type) {
        case ToastConstant.SHOW_TOAST:
            return {
                ...state,
                toast: action.payload,
                visible: true
            }
        default:
            return state;
    }
}