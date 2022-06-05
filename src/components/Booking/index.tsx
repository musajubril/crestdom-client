import React from "react";
import Layout from "./../Layout";
import Table from "./Table";
import Cards from "./Cards";

const Booking = () => {
  const MockData = [
    {
      full_name: "Jubril Musa",
      email: "jewbreel1@gmail.com",
      matric_number: "200591072",
      class_name: "Computer Science 100L",
      gender: "Male",
      is_verified: true,
      age: "20",
      image: "",

      hostel_name: "Medeyomi Flat",
      room_number: "20"
    },
    {
      full_name: "Lawal Habeebah",
      email: "damolabee5@gmail.com",
      matric_number: "200591072",
      class_name: "Computer Science 500L",
      gender: "Female",
      is_verified: false,
      age: "20",
      image: "",

      hostel_name: "Medeyomi Flat",
      room_number: "20"
    },
    {
      full_name: "Jubril Musa",
      email: "jewbreel1@gmail.com",
      matric_number: "200591072",
      class_name: "Computer Science 100L",
      gender: "Male",
      is_verified: true,
      age: "20",
      image: "",

      hostel_name: "Medeyomi Flat",
      room_number: "20"
    },
    {
      full_name: "Lawal Habeebah",
      email: "damolabee5@gmail.com",
      matric_number: "200591072",
      class_name: "Computer Science 500L",
      gender: "Female",
      is_verified: false,
      age: "20",
      image: "",

      hostel_name: "Medeyomi Flat",
      room_number: "20"
    }
  ];
  return (
    <Layout page="Bookings">
      <div className="hidden md:block">
        <Table students={MockData} school="test" />
      </div>
      <div className="md:hidden">
        <Cards students={MockData} school="test" />
      </div>
    </Layout>
  );
};

export default Booking;
