import ActivityConstant from '../constants/activity.constant'

export default function reducer(state = {
    activity: {},
    visible: false,
}, action) {
    switch (action.type) {
        case ActivityConstant.TOGGLE_ACTIVITY_DIALOG:
            return {
                ...state,
                visible: action.payload,
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