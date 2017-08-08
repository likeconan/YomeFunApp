import ImageConstant from '../constants/image.constant';

export function openCarousel(imgs, firstItem) {
    return {
        type: ImageConstant.OPEN_DIALOG,
        payload: {
            images: imgs,
            firstItem: firstItem
        }
    }
}

export function closeCarousel() {
    return {
        type: ImageConstant.CLOSE_DIALOG,
    }
}