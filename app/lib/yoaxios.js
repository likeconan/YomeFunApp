import axios from 'axios';
import config from './config';
import store from '../store';
import showToast from './showToast';
import UserAuthController from '../realm-controllers/user.auth.controller';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        debugger
        axios({
            url: obj.url,
            baseURL: config.apiUrl,
            method: obj.method ? obj.method : 'GET',
            timeout: 5000,
            params: obj.params,
            data: obj.data,
            headers: {
                'api-access-token': UserAuthController.auth.token
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
            showToast({
                message: err.response ? err.response.data.message : err.message,
                type: 'error'
            })
            reject(err);
        });
    })
    return p;
}
