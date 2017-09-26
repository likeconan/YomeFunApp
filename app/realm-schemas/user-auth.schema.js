import Realm from 'realm';

class UserAuth extends Realm.Object { }


UserAuth.schema = {
    name: 'UserAuth',
    properties: {
        isAuthorize: { type: 'bool', default: false },
        isInitialed: { type: 'bool', default: false },
        token: 'string',
    },
};

export default UserAuth