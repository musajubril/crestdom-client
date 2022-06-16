import React from 'react';
import Layout from './../Layout';
import Table from './Table';
import Cards from './Cards';
import { GET_BURSAR_BOOKINGS, SET_VERIFIED } from 'api/apiUrl';
import { getRequest, postRequest } from 'api/apiCall';
import { queryKeys } from 'api/queryKey';
import { useMutation, useQuery } from 'react-query';

const BursarList = (props) => {
  console.log(props.history)
     const MockData = [
    
  ];
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
  const mock = props.history.location.pathname === "/bursar/verified" ? rooms?.filter(check=>check.verified) : props.history.location.pathname === "/bursar/not-verified" ?  rooms?.filter(check=>!check.verified) : rooms
  const page = props.history.location.pathname === "/bursar/verified" ? "Verified" : props.history.location.pathname === "/bursar/not-verified" ?  "Not Verified" : "All"
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      alert("Success")
    },
    onError(){
      alert("Failed")
    }
  });
  const VerifyBooking = (id: any) => {
    mutate({
          url: SET_VERIFIED(id),
          data:{}
    })
  }
    return (
        <Layout page={page}>
            <div className="hidden md:block mt-8">
        <Table students={mock} school="test" verify={VerifyBooking} />
      </div>
      <div className="md:hidden mt-5">
        <Cards students={mock} school="test" verify={VerifyBooking} />
      </div>
        </Layout>
    );
}

export default BursarList;
