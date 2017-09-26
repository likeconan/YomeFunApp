import realm from '../realm-schemas';

class UserAuthController {

    constructor() {
        var obj = realm.objects('UserAuth')[0];
        this.auth = obj ? obj : {}
    }

    getAuth = () => {
        var obj = realm.objects('UserAuth')[0];
        return obj ? obj : {};
    }

    save = (auth) => {
        if (realm.objects('UserAuth').length) {
            let oldAuth = realm.objects('UserAuth')[0];
            var obj = { ...oldAuth, auth };
            realm.write(() => {
                oldAuth.isAuthorize = obj.isAuthorize;
                oldAuth.isInitialed = obj.isInitialed;
                oldAuth.token = obj.token;
                this.auth = { ...this.auth, auth }
            })
        } else {
            realm.write(() => {
                realm.create('UserAuth', auth)
            })
        }
    }
}


export default new UserAuthController()