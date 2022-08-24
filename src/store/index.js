import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import userReducer from './slice/user';
import activitiesReducer from './slice/activities';

export default configureStore({
  reducer: {
    counter: counterReducer,
    activities: activitiesReducer,
    user: userReducer,
  },
});
