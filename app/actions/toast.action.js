import ToastConstant from '../constants/toast.constant';

export function showToast(obj) {
    return {
        type: ToastConstant.SHOW_TOAST,
        payload: obj
    }
}