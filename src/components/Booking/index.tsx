import React from "react";
import Layout from "./../Layout";
import Table from "./Table";
import Cards from "./Cards";
import { GET_BOOKINGS, SEND_TO_BURSAR } from '../../api/apiUrl';
import { getRequest, postRequest } from "api/apiCall";
import { queryKeys } from "api/queryKey";
import { useMutation, useQuery } from "react-query";

const Booking = () => {
  const {
    data
  } = useQuery(
    [queryKeys.getBookings],
    async () => await getRequest({ url: GET_BOOKINGS }),
    {
      retry: 2,
    }
    )
const [rooms, setRooms] = React.useState(data?.data)
React.useEffect(()=>{
  setRooms(data?.data)
},[data?.data])
const { mutate } = useMutation(postRequest, {
  onSuccess(data) {
    alert("Success")
  },
  onError(){
    alert("Failed")
  }
});
// const AddNewRoom = () => {
//   mutate({
//     url: ADD_ROOM,
//     data: {
//       image: imageURL.url,
//       type: state.type,
//       room_number: state.room_number,
//   number_acceptable: state.number_acceptable,
//   hostel_name: state.hostel_name,
//   gender: state.gender,
//   price: state.price
//     },
//   });
// }
const SendToBursar = (id: any) => {
  mutate({
        url: SEND_TO_BURSAR(id),
        data:{}
  })
}
console.log(rooms)
  return (
    <Layout page="Bookings">
      <div className="hidden md:block">
        <Table students={rooms} school="test" send={SendToBursar} />
      </div>
      <div className="md:hidden">
        <Cards students={rooms} school="test" send={SendToBursar} />
      </div>
    </Layout>
  );
};

export default Booking;
