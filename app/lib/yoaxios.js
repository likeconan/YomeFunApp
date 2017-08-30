import axios from 'axios';
import config from './config';
import store from '../store';
import showToast from './showToast';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: config.apiUrl,
            method: obj.method ? obj.method : 'GET',
            timeout: 100000,
            params: obj.params,
            data: obj.data
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
                message: err.response ? err.response.data.message : 'unknow_error',
                type: 'error'
            })
            reject(err);
        });
    })
    return p;
}
