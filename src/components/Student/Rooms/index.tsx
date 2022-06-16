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
const Private = roomsData?.filter(check=>"Private"===check.type)
const General = roomsData?.filter(check=>"Private"!==check.type)
console.log(Private, General)

const [checked, setChecked] = React.useState(props.history.location.pathname !== "/student/private" ? roomsData?.filter(check=>"Private"!==check.type) : roomsData?.filter(check=>"Private"===check.type) )
React.useEffect(()=>{
  setChecked(props.history.location.pathname !== "/student/private" ? roomsData?.filter(check=>"Private"!==check.type) : roomsData?.filter(check=>"Private"===check.type))
},[props.history.location.pathname, roomsData])
const [newRoom, setNewRoom] = React.useState(checked)
React.useEffect(()=>{
const checkBookedStatus = roomsData?.filter(check=>check.bookedStatus)
// console.log(checkBookedStatus[0])
if(props.history.location.pathname !== "/student/private"){
  if(checkBookedStatus) {
    if(checkBookedStatus[0]?.type==="General"){
        setNewRoom(checked)
      }
      else{
        setNewRoom(checkBookedStatus.length ? [checkBookedStatus[0], ...checked] : checked)
      }
    }
    else{
      setNewRoom(checked)
    }
  }
  else{
    if(checkBookedStatus) {
      if(checkBookedStatus[0]?.type!=="General"){
          setNewRoom(checked)
        }
        else{
          setNewRoom(checkBookedStatus.length ? [checkBookedStatus[0], ...checked] : checked)
        }
      }
      else{
        setNewRoom(checked)
      }
  }
},[checked, props.history.location.pathname, roomsData])
console.log(checked, newRoom)
  const rooms = props.history.location.pathname === "/student/private" ?newRoom : props.history.location.pathname === "/student/general" ? newRoom :roomsData
      const page = props.history.location.pathname === "/student/private" ? "Private" : props.history.location.pathname === "/student/general" ?  "General" : "Rooms"
    return (
        <Layout page={page}  props={props}>
        <RoomGrid rooms={rooms} showType={page==="Rooms" ? true : false} />
    </Layout>
    );
}

export default StudentRooms;
