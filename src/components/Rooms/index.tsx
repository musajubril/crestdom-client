import React from "react";
import Layout from "./../Layout";
import RoomGrid from "./RoomGrid";
import Title from "./Title";

const Rooms = () => {
  const people = [
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm1.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm2.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm3.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm4.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm5.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm6.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm7.jpg")
    },
    {
      hostel_name: "Medeyomi House",
      room_number: "23",
      availability: "Available",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        require("../../images/rm8.jpg")
    },
    // More people...
  ];
  return (
    <Layout page="Rooms">
    <Title />
     <RoomGrid people={people} />
    </Layout>
  );
};

export default Rooms;
