import React from "react";
import Layout from "./../Layout";
import Table from "./Table";
import Cards from "./Cards";
import { GET_BOOKINGS } from '../../api/apiUrl';
import { getRequest } from "api/apiCall";
import { queryKeys } from "api/queryKey";
import { useQuery } from "react-query";

const Booking = () => {
  // const MockData = [
  //   {
  //     full_name: "Jubril Musa",
  //     email: "jewbreel1@gmail.com",
  //     matric_number: "200591072",
  //     class_name: "Computer Science 100L",
  //     gender: "Male",
  //     is_verified: true,
  //     age: "20",
  //     image: "",

  //     hostel_name: "Medeyomi Flat",
  //     room_number: "20"
  //   },
  //   {
  //     full_name: "Lawal Habeebah",
  //     email: "damolabee5@gmail.com",
  //     matric_number: "200591072",
  //     class_name: "Computer Science 500L",
  //     gender: "Female",
  //     is_verified: false,
  //     age: "20",
  //     image: "",

  //     hostel_name: "Medeyomi Flat",
  //     room_number: "20"
  //   },
  //   {
  //     full_name: "Jubril Musa",
  //     email: "jewbreel1@gmail.com",
  //     matric_number: "200591072",
  //     class_name: "Computer Science 100L",
  //     gender: "Male",
  //     is_verified: true,
  //     age: "20",
  //     image: "",

  //     hostel_name: "Medeyomi Flat",
  //     room_number: "20"
  //   },
  //   {
  //     full_name: "Lawal Habeebah",
  //     email: "damolabee5@gmail.com",
  //     matric_number: "200591072",
  //     class_name: "Computer Science 500L",
  //     gender: "Female",
  //     is_verified: false,
  //     age: "20",
  //     image: "",

  //     hostel_name: "Medeyomi Flat",
  //     room_number: "20"
  //   }
  // ];
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
console.log(rooms)
  return (
    <Layout page="Bookings">
      <div className="hidden md:block">
        <Table students={rooms} school="test" />
      </div>
      <div className="md:hidden">
        <Cards students={rooms} school="test" />
      </div>
    </Layout>
  );
};

export default Booking;
