import React, { Suspense, lazy, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { StateContext } from '../context/StateContext';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import icons from '../icons/icons';
// lazy load the main components
const Calendar = lazy(() => import('../components/Calendar'));
const EasyXls = lazy(() => import('../components/EasyXls'));
const Notes = lazy(() => import('../components/Notes'));
const Rates = lazy(() => import('../components/Rates'));
const Credit = lazy(() => import('../components/Credit'));

// fallback for loading components lazily
const SuspenseFallback = () => (
    <div className="page-loader">
        { icons.hourglass }
    </div>
);

export default function AppRouter() {
    const { state } = useContext(StateContext)

    return (
        <HashRouter>
            <Header />
            <NotificationContainer />
            <div className="content-container">
                <Suspense fallback={SuspenseFallback()}>
                    <Routes>
                        <Route path={`/calendar`} element={<Calendar />} />
                        <Route path={`/xls`} element={<EasyXls />} />
                        <Route path={`/notes`} element={<Notes />} />
                        <Route path={`/rates`} element={<Rates />} />
                        <Route path={`/credit`} element={<Credit />} />
                        <Route path={`/*`} element={<NotFound />} />
                        <Route path={`/`} element={<Navigate replace to={`/notes`} />} />
                    </Routes>
                </Suspense>
            </div>
        </HashRouter>
    )
}
