import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Patients
const Patients = './views/patients/Patient';

const routes = [
    { path: '/', exact: true, name: 'Home' },
    {path: '/', name: 'Dashboard'},
    {path: '/patient/create', name: 'Patients', component: Patients}
];

export default routes;