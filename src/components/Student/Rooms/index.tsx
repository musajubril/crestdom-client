import React from 'react';
import Layout from './../Layout';
import RoomGrid from "./RoomGrid";
import { ALL_ROOMS } from '../../../api/apiUrl';
import { getRequest } from 'api/apiCall';
import { queryKeys } from 'api/queryKey';
import { useQuery } from 'react-query';

const StudentRooms = (props) => {
  const {
    data
  } = useQuery(
    [queryKeys.getAllRooms],
    async () => await getRequest({ url: ALL_ROOMS }),
    {
      retry: 2,
    }
    )
const [roomsData, setRoomsData] = React.useState(data?.data)
React.useEffect(()=>{
  setRoomsData(data?.data)
},[data?.data])
console.log(roomsData)
  const rooms = props.history.location.pathname === "/student/private" ?roomsData?.filter(check=>"Private"===check.type) : props.history.location.pathname === "/student/general" ? roomsData?.filter(check=>"Private"!==check.type) :roomsData
      const page = props.history.location.pathname === "/student/private" ? "Private" : props.history.location.pathname === "/student/general" ?  "General" : "Rooms"
    return (
        <Layout page={page}>
        <RoomGrid rooms={rooms} showType={page==="Rooms" ? true : false} />
    </Layout>
    );
}

export default StudentRooms;
