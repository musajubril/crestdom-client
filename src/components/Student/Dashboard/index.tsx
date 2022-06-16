import React from 'react';
import Layout from './../Layout';
import Name from './Name';

const StudentDashboard = (props) => {
    return (
        <Layout page="StudentDashboard" props={props}>
        <Name />
    </Layout>
    );
}

export default StudentDashboard;
