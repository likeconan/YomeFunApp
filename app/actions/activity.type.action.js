import ActivityConstant from '../constants/activity.constant'
import yoaxios from '../lib/yoaxios';
import config from '../lib/config';

export function getActivityTypes() {

    return dispatch => {
        yoaxios({
            url: '/activity/types',
        }).then((data) => {
            data = data.map((val) => {
                val.source = { uri: config.staticServer + val.imageUrl };
                return val
            })
            dispatch({
                type: ActivityConstant.GET_ACTIVITY_TYPES,
                payload: data
            })
        })
    }

}