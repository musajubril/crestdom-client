import { getRequest } from 'api/apiCall';
import { BURSARDASHBOARD } from 'api/apiUrl';
import { queryKeys } from 'api/queryKey';
import React from 'react';
import { useQuery } from 'react-query';
import Layout from '../Layout';
import Greeting from './Greeting';
import StatsCards from './StatsCards';

const BursarDashboard = () => {
    const {
        data
      } = useQuery(
        [queryKeys.bursarDashboard],
        async () => await getRequest({ url: BURSARDASHBOARD }),
        {
          retry: 2,
        }
        )
    const [dashboard, setDashboard] = React.useState(data?.data)
    React.useEffect(()=>{
        setDashboard(data?.data)
    },[data?.data])
    console.log(dashboard)
    return (
        <Layout page="Dashboard">
    <Greeting />
    <StatsCards data={dashboard} />
    </Layout>
    );
}

export default BursarDashboard;
