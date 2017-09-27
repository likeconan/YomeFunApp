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
}

export default new NavigationHelper()