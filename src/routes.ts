import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Patients
const Patient = React.lazy(() => import('./views/patients/Patient'));
const PatientList = React.lazy(() => import('./views/patients/PatientList'));

const routes = [
    { path: '/', element: Dashboard },
    { path: '/patient/list', element: PatientList },
    { path: '/patient/create', element: Patient }
];

export default routes;