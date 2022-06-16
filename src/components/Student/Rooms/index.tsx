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
// console.log(roomsData)
const Private = roomsData?.filter(check=>"Private"===check.type)
const General = roomsData?.filter(check=>"Private"!==check.type)
console.log(Private, General)
const privateBooked = Private?.filter(check=>check.bookedStatus)
const generalBooked = General?.filter(check=>check.bookedStatus)
const checkRooms = (special: any, general:any) => {
  if(special?.length && !general?.length) {
    if(props.history.location.pathname !== "/student/private") {
      return special
    }
    else{
      return []
    }
  }
  if(!special?.length && general?.length) {
    if(props.history.location.pathname !== "/student/general") {
      return general
    }
    else{
      return []
    }
  }
  if(!special?.length && !general?.length) {
    return []
  }
}
const [checked, setChecked] = React.useState(props.history.location.pathname !== "/student/private" ? roomsData?.filter(check=>"Private"!==check.type) : roomsData?.filter(check=>"Private"===check.type) )
React.useEffect(()=>{
  setChecked(props.history.location.pathname !== "/student/private" ? roomsData?.filter(check=>"Private"!==check.type) : roomsData?.filter(check=>"Private"===check.type))
},[props.history.location.pathname, roomsData])
const [newRoom, setNewRoom] = React.useState(checked)
React.useEffect(()=>{
const checkBookedStatus = checked && roomsData?.filter(check=>check.bookedStatus)
console.log(checked && checkBookedStatus[0])
if(checked && checkBookedStatus[0]?.type==="General"){
  if(props.history.location.pathname !== "/student/private"){
    setNewRoom(checked)
  }
  else{
    setNewRoom([checked.length && checkBookedStatus[0], ...checked])
  }
}
else{
  if(props.history.location.pathname !== "/student/private"){
    setNewRoom([checked.length && checkBookedStatus[0], ...checked])
  }
  else{
    setNewRoom(checked)
  }
}
  // if(props.history.location.pathname !== "/student/private" && checkBookedStatus[0]?.type==="General") {
  //   setNewRoom(checked)
  // }
  // if(props.history.location.pathname === "/student/private" && checkBookedStatus[0]?.type==="General") {
  //   setNewRoom([checkBookedStatus[0], ...checked])
  // }
  // if(props.history.location.pathname === "/student/private" && checkBookedStatus[0]?.type==="Private") {
  //   setNewRoom(checked)
  // }
  // if(props.history.location.pathname !== "/student/private" && checkBookedStatus[0]?.type==="Private") {
  //   setNewRoom([checkBookedStatus[0], ...checked])
  // }
},[checked, props.history.location.pathname, roomsData])
// const checked = checkRooms(privateBooked, generalBooked)[0]
console.log(checked, newRoom)
// const PrivateRooms = checked ? [checked, ...Private] : [...Private]
// const GeneralRooms = checked ? [checked, ...General] : [...General]
// console.log(checkRooms(privateBooked, generalBooked))
// console.log(privateBooked?.length, generalBooked?.length)
  const rooms = props.history.location.pathname === "/student/private" ?newRoom : props.history.location.pathname === "/student/general" ? newRoom :roomsData
      const page = props.history.location.pathname === "/student/private" ? "Private" : props.history.location.pathname === "/student/general" ?  "General" : "Rooms"
    return (
        <Layout page={page}>
        <RoomGrid rooms={rooms} showType={page==="Rooms" ? true : false} />
    </Layout>
    );
}

export default StudentRooms;
