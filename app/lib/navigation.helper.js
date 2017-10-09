import store from '../store';
import { toggleSwipeEnable } from '../actions/navigate.action';

class NavigationHelper {

    constructor() {
        this.navigation = undefined
    }

    setNavigation = (navigation) => {
        this.navigation = navigation
    }

    navigate = (routeName) => {
        if (this.navigation) {
            this.navigation.navigate(routeName)
        }
    }

    toggleSwipeEnable = (val) => {
        store.dispatch(toggleSwipeEnable(val))
    }

}

export default new NavigationHelper()