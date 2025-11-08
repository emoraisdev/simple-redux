import { configureStore } from '@reduxjs/toolkit'
import intervaloReducer from './components/intervaloSlice'

export const store = configureStore({
  reducer: {
    intervalo: intervaloReducer,
  },
})