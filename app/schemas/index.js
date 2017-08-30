import UserAuth from './user.auth.schema';
const Realm = require('realm')

console.log('realm start')
Realm.open({ schema: [UserAuth] }).then(realm => {
    realm.close()
    Realm.deleteRealm(realm.getConfiguration());
    realm.write(() => {
        realm.create('UserAuth', {
            uuid: '123',
            token: '321',
        })
    })

    const user = realm.objectForPrimaryKey('123')
    console.log(user)
})

module.exports = {}