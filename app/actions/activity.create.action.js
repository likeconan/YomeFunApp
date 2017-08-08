import ActivityConstant from '../constants/activity.constant';

export function toggleActivityCreateModal(visible) {
    return {
        type: ActivityConstant.TOGGLE_ACTIVITY_DIALOG,
        payload: visible
    }
}
