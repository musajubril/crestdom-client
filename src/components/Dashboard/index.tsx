import React from 'react';
import Layout from './../Layout';
import Greeting from './Greeting';
import StatsCards from './StatsCards';

const Dashboard = () => {
    return (
        <Layout page="Dashboard">
    <Greeting />
    <StatsCards />
    </Layout>
    );
}

export default Dashboard;
