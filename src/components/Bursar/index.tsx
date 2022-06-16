import React from 'react';
import Layout from './../Layout';
import Header from './Header';
import Table from './Table';
import Cards from './Cards';
import { GET_BURSAR_BOOKINGS } from 'api/apiUrl';
import { getRequest } from 'api/apiCall';
import { queryKeys } from 'api/queryKey';
import { useQuery } from 'react-query';

const Bursar = () => {
  const {
    data
  } = useQuery(
    [queryKeys.getBookings],
    async () => await getRequest({ url: GET_BURSAR_BOOKINGS }),
    {
      retry: 2,
    }
    )
const [rooms, setRooms] = React.useState(data?.data)
React.useEffect(()=>{
  setRooms(data?.data)
},[data?.data])
    return (
        <Layout page="Bursar">
            <Header />
            <div className="hidden md:block mt-8">
        <Table students={rooms} school="test" />
      </div>
      <div className="md:hidden mt-5">
        <Cards students={rooms} school="test" />
      </div>
        </Layout>
    );
}

export default Bursar;
