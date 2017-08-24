import ActivityConstant from '../constants/activity.constant'

export default function reducer(state = {
    activityTypes: [],
}, action) {
    switch (action.type) {
        case ActivityConstant.GET_ACTIVITY_TYPES:
            return {
                ...state,
                activityTypes: action.payload,
            }
        default:
            return state;
    }
}