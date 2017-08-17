import axios from 'axios';
import config from './config';
import store from '../store';
import { showToast } from '../actions/toast.action';

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
            resolve(response.data)
        }).catch((err) => {
            store.dispatch(showToast({
                message: 'Wrong login name'
            }))
            reject(err);
        });
    })
    return p;
}
