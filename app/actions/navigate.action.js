import NavigateConstant from '../constants/navigate.constant';

export function toggleSwipeEnable(swipable) {
    return {
        type: NavigateConstant.TOGGLE_SWIPE_ENABLED,
        payload: swipable
    }
}