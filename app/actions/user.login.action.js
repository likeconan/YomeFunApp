import UserConstant from '../constants/user.constant'
import validator from 'validator';
import yoaxios from '../lib/yoaxios';
import UserModel from '../models/user.model';

export function userLogin(obj) {
    return new Promise((resolve, reject) => {
        yoaxios({
            url: 'users/login',
            params: obj
        }).then((data) => {
            resolve({
                type: UserConstant.USER_LOGIN_REGISTER,
                payload: new UserModel(data).user
            });
        });
    })
}

export function editMobile(val) {
    return {
        type: UserConstant.EDIT_LOGIN_MOBILE,
        payload: {
            val: val,
            isMobile: /^1[3|4|5|8][0-9]\d{8}$/.test(val)
        }
    }
}

export function editPassword(val) {
    return {
        type: UserConstant.EDIT_LOGIN_PASSWORD,
        payload: {
            val: val,
            isPassword: validator.isLength(val, { min: 6 })
        }
    }
}