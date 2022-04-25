import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { StateContext } from '../context/StateContext';
import Header from '../components/Header';
import icons from '../icons/icons';
// lazy load the main components
const Calendar = lazy(() => import('../components/Calendar'));
const EasyXls = lazy(() => import('../components/EasyXls'));
const Notes = lazy(() => import('../components/Notes'));
const Rates = lazy(() => import('../components/Rates'));

// fallback for loading components lazily
const SuspenseFallback = () => (
    <div className="page-loader">
        { icons.hourglass }
    </div>
);

export default function AppRouter() {
    const { state } = useContext(StateContext)

    return (
        // basename of the server subdirectory
        <Router>
            <Header />
            <NotificationContainer />
            <div className="content-container">
                <Suspense fallback={SuspenseFallback()}>
                    <Routes>
                        <Route path={`/projects/dou/calendar`} element={<Calendar />} />
                        <Route path={`/projects/dou/xls`} element={<EasyXls />} />
                        <Route path={`/projects/dou/notes`} element={<Notes />} />
                        <Route path={`/projects/dou/rates`} element={<Rates />} />
                        <Route path={`/projects/dou`} element={<Navigate replace to={`/projects/dou/notes`} />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    )
}
