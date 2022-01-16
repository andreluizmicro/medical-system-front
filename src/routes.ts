import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Patients
const Patient = React.lazy(() => import('./views/patients/Patient'));

const routes = [
    { path: '/', element: Dashboard },
    { path: '/patient/create', element: Patient }
];

export default routes;