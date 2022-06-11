import React from 'react';
import Layout from './../Layout';
import RoomGrid from "./RoomGrid";

const StudentRooms = (props) => {
    const RoomsData = [
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "General",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm1.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "Private",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm2.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "General",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm3.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "General",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm4.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "Private",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm5.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "General",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm6.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "Private",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm7.jpg")
        },
        {
          hostel_name: "Medeyomi House",
price: "45000",
          type: "General",
          room_number: "23",
          availability: "Available",
          email: "janecooper@example.com",
          telephone: "+1-202-555-0170",
          imageUrl:
            require("../../../images/rm8.jpg")
        },
        // More rooms...
      ];
      const rooms = props.history.location.pathname === "/student/private" ?RoomsData.filter(check=>"Private"===check.type) : props.history.location.pathname === "/student/general" ? RoomsData.filter(check=>"Private"!==check.type) :RoomsData
      const page = props.history.location.pathname === "/student/private" ? "Private" : props.history.location.pathname === "/student/general" ?  "General" : "Rooms"
    return (
        <Layout page={page}>
        <RoomGrid rooms={rooms} showType={page==="Rooms" ? true : false} />
    </Layout>
    );
}

export default StudentRooms;
