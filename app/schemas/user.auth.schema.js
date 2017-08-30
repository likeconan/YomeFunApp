class UserAuth {

}

UserAuth.schema = {
    name: 'UserAuth',
    primaryKey: 'uuid',
    properties: {
        uuid: 'string',
        token: 'string',
    }
}

export default UserAuth
