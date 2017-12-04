import axios from 'axios';
import config from './config';
import store from '../store';
import showToast from './showToast';
import UserAuthController from '../realm-controllers/user.auth.controller';
import NavigationHelper from './navigation.helper';
import Lang from '../languages';


export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: config.apiUrl,
            method: obj.method ? obj.method : 'GET',
            timeout: 5000,
            params: obj.params,
            data: obj.data,
            headers: {
                'api-access-token': UserAuthController.getAuth().token
            },
        }).then((response) => {
            if (obj.message) {
                showToast({
                    message: obj.message,
                    type: 'success'
                })
            }
            resolve(response.data)
        }).catch((err) => {
            if (err.response && err.response.status === 403) {
                NavigationHelper.navigate('Account')
            }
            showToast({
                message: Lang.instant(err.response ? err.response.data.message : err.message),
                type: 'error'
            })
            reject(err)
        });
    })
    return p;
}
