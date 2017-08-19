import Toast from 'react-native-root-toast';
import CommonStyle from '../themes/Common.Style';
import Languages from '../languages';

export default showToast = function (obj) {
    Toast.show(Languages.instant(obj.message), {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        backgroundColor: CommonStyle[obj.type + 'Color'],
        animation: true,
        hideOnPress: true,
        delay: 0,
    })
}