import React from 'react';
import Layout from './../Layout';
import Data from './Data';
import Name from './Name';

const StudentDashboard = (props) => {
    return (
        <Layout page="StudentDashboard" props={props}>
        <Name />
        <Data />
    </Layout>
    );
}

export default StudentDashboard;
