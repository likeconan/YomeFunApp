import { combineReducers } from 'redux';

import userLoginReducer from './user.login.reducer';
import imageCarouselReducer from './image.carousel.reducer';
import activityCreateReducer from './activity.create.reducer';

export default combineReducers({
    userLoginReducer,
    imageCarouselReducer,
    activityCreateReducer,
});