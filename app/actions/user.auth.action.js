import UserConstant from '../constants/user.constant'
import yoaxios from '../lib/yoaxios';
import UserModel from '../models/user.model';
import UserAuthCtrl from '../realm-controllers/user.auth.controller';
import NavigationHelper from '../lib/navigation.helper';

export function userAuth(obj) {
    return new Promise((resolve, reject) => {
        yoaxios({
            url: '/users/authorize/client_mobile',
            params: obj
        }).then((user) => {
            resolve({
                type: UserConstant.USER_LOGIN_REGISTER,
                payload: new UserModel(user).user
            });
        }).catch(() => {
            UserAuthCtrl.save({
                isAuthorize: false,
                token: ''
            })
            NavigationHelper.navigate('Account')
            reject()
        })
    })
}

