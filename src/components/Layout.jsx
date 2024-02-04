import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './navbar/Navbar';
import { Provider } from 'react-redux'
import { store } from '../store/Store';


export default function Layout(params) {
        return(

            <Provider store={store}>
            <div className='main'>
            <Navbar />
            <Outlet />
            </div>
            </Provider>
        )
};
