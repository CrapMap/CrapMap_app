import { configureStore } from '@reduxjs/toolkit';
import setCurrentUser from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    user: setCurrentUser
  },
})