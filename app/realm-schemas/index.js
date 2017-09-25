import Realm from 'realm';

import UserAuth from './user-auth.schema';

export default new Realm({ schema: [UserAuth] })