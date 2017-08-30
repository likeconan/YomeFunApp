import schemas from '../schemas';
class Translate {
    constructor(lang) {
        switch (lang) {
            case 'en':
                this.lang = require('./lang.en.js');
                break;
            case 'cn':
                this.lang = require('./lang.cn.js');
                break;

        }
        schemas
    }
    instant = (prop) => {
        return prop && this.lang[prop.toLowerCase()] ? this.lang[prop.toLowerCase()] : prop;
    }
}

export default new Translate('cn');