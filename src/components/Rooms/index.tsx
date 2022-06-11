import { getRequest } from "api/apiCall";
import { ALL_ROOMS, GET_ALL_ROOMS } from "api/apiUrl";
import { queryKeys } from "api/queryKey";
import React from "react";
import { useQuery } from "react-query";
import Layout from "./../Layout";
import RoomGrid from "./RoomGrid";
import Title from "./Title";

const Rooms = () => {
  const {
    data
  } = useQuery(
    [queryKeys.getAllRooms],
    async () => await getRequest({ url: GET_ALL_ROOMS }),
    {
      retry: 2,
    }
    )
const [rooms, setRooms] = React.useState(data?.data)
React.useEffect(()=>{
  setRooms(data?.data)
},[data?.data])
console.log(rooms)
  // const rooms = props.history.location.pathname === "/student/private" ?rooms?.filter(check=>"Private"===check.type) : props.history.location.pathname === "/student/general" ? rooms?.filter(check=>"Private"!==check.type) :rooms
  return (
    <Layout page="Rooms">
    <Title />
     <RoomGrid rooms={rooms} />
    </Layout>
  );
};

export default Rooms;
