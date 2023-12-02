import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import formReducer from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer
  },
});
