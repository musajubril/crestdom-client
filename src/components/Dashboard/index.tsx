import { getRequest } from 'api/apiCall';
import { ADMINDASHBOARD } from 'api/apiUrl';
import { queryKeys } from 'api/queryKey';
import React from 'react';
import { useQuery } from 'react-query';
import Layout from './../Layout';
import Greeting from './Greeting';
import StatsCards from './StatsCards';

const Dashboard = () => {
    const {
        data
      } = useQuery(
        [queryKeys.adminDashboard],
        async () => await getRequest({ url: ADMINDASHBOARD }),
        {
          retry: 2,
        }
        )
    const [dashboard, setDashboard] = React.useState(data?.data)
    React.useEffect(()=>{
        setDashboard(data?.data)
    },[data?.data])
//     const user:{
//         bookingPrice: any
// bookings: any
// bursar_email: any
// bursar_name: any
// bursar_phone_number: any
// general: 4
// generalPrice: 19045336
// privatePrice: 464000
// rooms: 8
// special: 4
// student: 1
// totalPrice:
//     }
    console.log(dashboard)
    return (
        <Layout page="Dashboard">
    <Greeting />
    <StatsCards data={dashboard} />
    </Layout>
    );
}

export default Dashboard;
