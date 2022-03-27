import React from 'react';
import AppRouter from '../routers/AppRouter';
import { StateProvider } from '../context/StateContext';

export default function App() {
    return (
        <StateProvider>
            <AppRouter />
        </StateProvider>
    );
}
