import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import Postreducer from './PostSlice'
export const store = configureStore({
    reducer: Postreducer
})