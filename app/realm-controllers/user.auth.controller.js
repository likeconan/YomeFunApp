import realm from '../realm-schemas';

let UserAuthController = {
    findAll: function () {
        return realm.objects('UserAuth');
    },
    save: function (auth) {
        debugger
        if (realm.objects('UserAuth').length) {
            realm.write(() => {
                console.log(this)
            })
        } else {
            realm.write(() => {
                realm.create('UserAuth', auth)
            })
        }
    }
}

export default UserAuthController