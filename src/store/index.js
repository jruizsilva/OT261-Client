import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import userReducer from './slice/user';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
