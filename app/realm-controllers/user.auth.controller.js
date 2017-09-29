import realm from '../realm-schemas';

class UserAuthController {

    getAuth = () => {
        var obj = realm.objects('UserAuth')[0];
        return obj ? obj : {};
    }

    save = (auth, data) => {
        return new Promise((resolve, reject) => {
            if (realm.objects('UserAuth').length) {
                let oldAuth = realm.objects('UserAuth')[0];
                var obj = { ...oldAuth, auth };
                realm.write(() => {
                    oldAuth.isAuthorize = obj.isAuthorize;
                    oldAuth.isInitialed = obj.isInitialed;
                    oldAuth.token = obj.token;
                    this.auth = { ...this.auth, auth }
                    resolve(data)
                })
            } else {
                realm.write(() => {
                    realm.create('UserAuth', auth);
                    resolve(data);
                })
            }
        })

    }
}


export default new UserAuthController()