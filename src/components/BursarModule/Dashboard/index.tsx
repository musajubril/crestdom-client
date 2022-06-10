import React from 'react';
import Layout from '../Layout';
import Greeting from './Greeting';
import StatsCards from './StatsCards';

const BursarDashboard = () => {
    return (
        <Layout page="Dashboard">
    <Greeting />
    <StatsCards />
    </Layout>
    );
}

export default BursarDashboard;
