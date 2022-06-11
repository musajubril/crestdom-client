import React from "react";
import Layout from "./../Layout";
import RoomGrid from "./RoomGrid";
import Title from "./Title";

const Rooms = () => {
  const rooms =[
    {
      hostel_name: "Medeyomi House",
price: "45000",
      type: "General",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm1.jpg")
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
        require("../../images/rm2.jpg")
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
        require("../../images/rm3.jpg")
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
        require("../../images/rm4.jpg")
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
        require("../../images/rm5.jpg")
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
        require("../../images/rm6.jpg")
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
        require("../../images/rm7.jpg")
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
        require("../../images/rm8.jpg")
    },
    // More rooms...
  ];
  return (
    <Layout page="Rooms">
    <Title />
     <RoomGrid rooms={rooms} />
    </Layout>
  );
};

export default Rooms;
