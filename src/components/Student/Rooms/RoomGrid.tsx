import React from 'react';
import { MailIcon, PhoneIcon, TrashIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/solid";
import { PencilAltIcon, CheckIcon, CloudUploadIcon, RefreshIcon } from '@heroicons/react/outline';
import ModalDialog from 'components/Dialog';
import { BOOK_ROOM } from 'api/apiUrl';
import { postRequest } from 'api/apiCall';
import { useMutation } from 'react-query';

const RoomGrid = ({rooms, showType}) => {
  const bookedStatus = rooms?.filter(room=>room.bookedStatus)
  console.log(bookedStatus?.length)
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState("")
  // room_number, room_id, hostel_name, proof_of_payment_school_fee, proof_of_payment_hostel_fee
  const [state, setState] = React.useState({
    room_number: "",
    room_id: "",
    hostel_name: "",
    proof_of_payment_school_fee: "",
    proof_of_payment_hostel_fee: "",
    proof_of_payment_school_fee_file: "",
    proof_of_payment_hostel_fee_file: ""
  })
  const handleSchoolFeeImage = (e: any) => {
    setState({
      ...state,
      proof_of_payment_school_fee_file: URL.createObjectURL(e.target.files[0]),
      proof_of_payment_school_fee: e.target.files[0],
    });
  };
  const [schoolFee, setSchoolFee] = React.useState({
    uploading: false,
    uploaded: false,
    url: ""
  })
  const UploadSchoolFee = async(e: any) => {
  const data = new FormData()
  data.append('file', state.proof_of_payment_school_fee)
  data.append('upload_preset', 'jewbreel')
  setSchoolFee({...schoolFee, uploading:true})
  const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
  {
    method:'POST',
    body:data
  }
  )
  const file = await res.json()
  setSchoolFee({...schoolFee, uploading:false, uploaded:true, url:file?.secure_url})
  // setSchoolFee({...imageURL, uploaded:true})
  // setSchoolFee({...imageURL, url:file?.secure_url})
  console.log(file, schoolFee.url)
  }
  const handleHostelFeeImage = (e: any) => {
    setState({
      ...state,
      proof_of_payment_hostel_fee_file: URL.createObjectURL(e.target.files[0]),
      proof_of_payment_hostel_fee: e.target.files[0],
    });
  };
  const [hostelFee, setHostelFee] = React.useState({
    uploading: false,
    uploaded: false,
    url: ""
  })
  const UploadHostelFee = async(e: any) => {
  const data = new FormData()
  data.append('file', state.proof_of_payment_hostel_fee)
  data.append('upload_preset', 'jewbreel')
  setHostelFee({...hostelFee, uploading:true})
  const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
  {
    method:'POST',
    body:data
  }
  )
  const file = await res.json()
  setHostelFee({...hostelFee, uploading:false, uploaded:true, url:file?.secure_url})
  // setHostelFee({...imageURL, uploaded:true})
  // setHostelFee({...imageURL, url:file?.secure_url})
  console.log(file, hostelFee.url)
  }
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      alert("Room Added Successfully")
      setOpen(false)
      // props.history.push("/login", "/login")
    },
  });
  const [roomData, setRoom] = React.useState({
    room_id: null,
    room_number: null,
    hostel_name: null,
    price: null
  })
  const BookRoom = () => {
    mutate({
      url: BOOK_ROOM,
      data: {
        room_id: roomData.room_id,
                      room_number: roomData.room_number,
                      hostel_name: roomData.hostel_name,
                      proof_of_payment_school_fee: schoolFee.url,
                       proof_of_payment_hostel_fee: hostelFee.url,
                       price: roomData.price
      },
    });
  }
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rooms?.map((room,i) => (
          <li
            key={i}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-lg transform"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-auto h-auto mx-auto bg-green-600"
                src={room.image}
                alt=""
              />
              <h3 className="mt-3 text-gray-900 text-sm font-medium">
                {room.hostel_name} room number {room.room_number}
              </h3>
              {
                showType && 
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                {room.type}
              </h3>
              }
              <h3 className="mt-1 text-gray-900 text-sm font-medium flex w-full text-center justify-center">
                <span>
                Number in room: {room.number_in_room}
                </span>
                {/* <UsersIcon
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    /> */}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium flex w-full text-center justify-center">
                <span>
                Room Capacity: {room.number_acceptable}
                </span>
                {/* <UsersIcon
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    /> */}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                #{room.price}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="mt-1">
                    {
                    room.availability ?
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  Available
                  </span>
                  :
                  <span className="px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                    Not Available
                  </span>
                    }
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                {/* <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${room.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-bl-lg hover:text-green-500"
                  >
                    <PencilAltIcon
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Edit</span>
                  </a>
                </div> */}
                <div className="-ml-px w-0 flex-1 flex transition-all duration-500 rounded-b-l-lg">
                <ModalDialog
                open={open}
                handleSubmit={BookRoom}
                setOpen={setOpen}
                Title={title}
                Button={()=>(
                  <>
                  {
                    room.bookedStatus ?
                  <button
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-600 bg-white font-medium border border-transparent rounded-br-lg hover:text-white hover:bg-red-500  transition-all duration-500 rounded-b-l-lg cursor-pointer" 
                  disabled={bookedStatus.length}
                  >
                    <CheckIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Booked</span>
                  </button>
                  :
                  <button
                  disabled={bookedStatus.length}
                  onClick={()=>{
                    setOpen(true)
                    setTitle(`Book ${room.hostel_name} room number ${room.room_number}`)
                    setRoom({
                      ...roomData,
                      room_id: room._id,
                      room_number: room.room_number,
                      hostel_name: room.hostel_name,
                      price: room.price
                    })
                  }}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-600 bg-white font-medium border border-transparent rounded-br-lg hover:text-white hover:bg-green-500  transition-all duration-500 rounded-b-l-lg cursor-pointer"
                  >
                    <ShoppingCartIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                      />
                    <span className="ml-3">Book</span>
                  </button>
                  }
                  </>
                )}
                >
                  <>
                  <div>
                <label
                  htmlFor="proof_of_payment_school_fee"
                  className="flex justify-center px-1 pt-1 pb-1 mt-1 border-2 border-gray-300 border-dashed rounded-md md:px-6 md:pt-5 md:pb-6"
                >
                  {state.proof_of_payment_school_fee_file ? (
                    <img
                      src={state.proof_of_payment_school_fee_file}
                      className="object-cover object-center space-y-1"
                    />
                  ) : (
                    <div className="space-y-1 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <div className="relative font-medium bg-white rounded-md cursor-pointer text-rose-600 hover:text-rose-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rose-500">
                          <span>Upload Proof Of Payment (School Fee)</span>
                          <input
                            onChange={handleSchoolFeeImage}
                            id="proof_of_payment_school_fee"
                            name="proof_of_payment_school_fee"
                            type="file"
                            className="sr-only"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </label>
                <>
                {
                  state.proof_of_payment_school_fee &&
                  <>
                    <div className="flex w-full justify-end mt-3">
            <button className="border-2 border-green-600  bg-green-50 text-green-600 transform transition-all flex rounded-lg px-6 py-2 hover:scale-105 hover:text-green-50 hover:bg-green-600 mr-2" onClick={UploadSchoolFee} disabled={schoolFee.uploaded || schoolFee.uploading}>
                      {
                        schoolFee.uploading ? 
                        <>
                    Uploading
                    <span className=" ml-2 h-full flex items-center">
                        <RefreshIcon className='w-5 h-5 animate-spin' />
                    </span>
                        </>
                        :
                        schoolFee.uploaded ?
                        <>
                        Done
                    <span className=" ml-2 h-full flex items-center">
                        <CheckIcon className='w-5 h-5' />
                    </span>
                        </>
                        :
                        <>
                        Upload
                    <span className=" ml-2 h-full flex items-center">
                        <CloudUploadIcon className='w-5 h-5' />
                    </span>
                        </>
                      }
                </button>
            </div>
                  </>
                }
                </>
              </div>
              <div>
                <label
                  htmlFor="proof_of_payment_hostel_fee"
                  className="flex justify-center px-1 pt-1 pb-1 mt-1 border-2 border-gray-300 border-dashed rounded-md md:px-6 md:pt-5 md:pb-6"
                >
                  {state.proof_of_payment_hostel_fee_file ? (
                    <img
                      src={state.proof_of_payment_hostel_fee_file}
                      className="object-cover object-center space-y-1"
                    />
                  ) : (
                    <div className="space-y-1 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <div className="relative font-medium bg-white rounded-md cursor-pointer text-rose-600 hover:text-rose-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rose-500">
                          <span>Upload Proof Of Payment (Hostel)</span>
                          <input
                            onChange={handleHostelFeeImage}
                            id="proof_of_payment_hostel_fee"
                            name="proof_of_payment_hostel_fee"
                            type="file"
                            className="sr-only"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </label>
                <>
                {
                  state.proof_of_payment_hostel_fee &&
                  <>
                    <div className="flex w-full justify-end mt-3">
            <button className="border-2 border-green-600  bg-green-50 text-green-600 transform transition-all flex rounded-lg px-6 py-2 hover:scale-105 hover:text-green-50 hover:bg-green-600 mr-2" onClick={UploadHostelFee} disabled={hostelFee.uploaded || hostelFee.uploading}>
                      {
                        hostelFee.uploading ? 
                        <>
                    Uploading
                    <span className=" ml-2 h-full flex items-center">
                        <RefreshIcon className='w-5 h-5 animate-spin' />
                    </span>
                        </>
                        :
                        hostelFee.uploaded ?
                        <>
                        Done
                    <span className=" ml-2 h-full flex items-center">
                        <CheckIcon className='w-5 h-5' />
                    </span>
                        </>
                        :
                        <>
                        Upload
                    <span className=" ml-2 h-full flex items-center">
                        <CloudUploadIcon className='w-5 h-5' />
                    </span>
                        </>
                      }
                </button>
            </div>
                  </>
                }
                </>
              </div>
                  </>
                </ModalDialog>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
}

export default RoomGrid;
