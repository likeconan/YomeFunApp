import Constant from '../constants/navigate.constant'

export default function reducer(state = {
    swipeEnable: true,
}, action) {
    switch (action.type) {
        case Constant.TOGGLE_SWIPE_ENABLED:
            return {
                ...state,
                swipeEnable: action.payload,
            }
        case ActivityConstant.CLOSE_DIALOG:
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }
}