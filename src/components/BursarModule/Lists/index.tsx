import React from 'react';
import Layout from './../Layout';
import Table from './Table';
import Cards from './Cards';

const BursarList = (props) => {
  console.log(props.history)
     const MockData = [
    {
      full_name: "Jubril Musa",
      email: "jewbreel1@gmail.com",
      matric_number: "200591072",
      class_name: "Computer Science 100L",
      gender: "Male",
      verified: true,
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
      verified: false,
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
      verified: true,
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
      verified: false,
      age: "20",
      image: "",

      hostel_name: "Medeyomi Flat",
      room_number: "20"
    }
  ];
  const mock = props.history.location.pathname === "/bursar/verified" ? MockData.filter(check=>!check.verified) : props.history.location.pathname === "/bursar/not-verified" ?  MockData.filter(check=>check.verified) : MockData
  const page = props.history.location.pathname === "/bursar/verified" ? "Verified" : props.history.location.pathname === "/bursar/not-verified" ?  "Not Verified" : "All"

    return (
        <Layout page={page}>
            <div className="hidden md:block mt-8">
        <Table students={mock} school="test" />
      </div>
      <div className="md:hidden mt-5">
        <Cards students={mock} school="test" />
      </div>
        </Layout>
    );
}

export default BursarList;
