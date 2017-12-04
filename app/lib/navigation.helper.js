

class NavigationHelper {

    constructor() {
        this.navigation = undefined;
        this.swipeEnable = true;
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
        this.swipeEnable = val;
    }

}

export default new NavigationHelper()