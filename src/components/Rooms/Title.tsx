
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import ModalDialog from 'components/Dialog';
import React from 'react'

const Title = () => {
  // type,
  //     image,
  //     video,
  //     room_number,
  //     number_acceptable,
  //     hostel_name,
  //     gender,
  //     price
    const [open, setOpen] = React.useState(false)
    const [state, setState] = React.useState({
      type: "",
      image: "",
      imageFile: "",
      room_number: "",
      number_acceptable: "",
      hostel_name: "",
      gender: "",
      price: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({...state, [e.target.id]: e.target.value})
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({...state, [e.target.id]: e.target.value})
    }
    const handleImage = (e: any) => {
      setState({
        ...state,
        imageFile: URL.createObjectURL(e.target.files[0]),
        image: e.target.files[0],
      });
    };
    const AddNewRoom = () => {
      alert(`${state.hostel_name} added successfully`)
      console.log(state)
      setOpen(false)
    }
    return (
        <div className="pb-5 border-b border-green-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Students</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <label htmlFor="search_candidate" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10 mr-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                name="search_students "
                id="search_students"
                className="block w-full pl-10 border-green-300 rounded-none focus:ring-gray-500 focus:border-green-500 rounded-l-md sm:hidden"
                placeholder="Search"
                // onChange={handleSearch}
              />
              <input
                type="search"
                name="search_students"
                id="search_students"
                className="hidden w-full pl-10 border-green-300 rounded-none focus:ring-gray-500 focus:border-green-500 rounded-l-md sm:block sm:text-sm"
                placeholder="Search students"
                // onChange={handleSearch}
              />
            </div>
            <div className="flex items-center h-full">
              <ModalDialog
                setOpen={setOpen}
                open={open}
                Title="Add a new room"
                Button={()=>(
            <button
              type="button"
              onClick={()=>setOpen(true)}
              className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium border border-green-600 rounded-r-md bg-green-600 hover:bg-green-100 hover:text-green-700 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-green-500"
              >
            Add New
            </button>
                )}
                // Body={()=>(
                  
                // )}
                handleSubmit={AddNewRoom}
              >
                <>
                  <div>
                <label
                  htmlFor="image"
                  className="flex justify-center px-1 pt-1 pb-1 mt-1 border-2 border-gray-300 border-dashed rounded-md md:px-6 md:pt-5 md:pb-6"
                >
                  {state.imageFile ? (
                    <img
                      src={state.imageFile}
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
                          <span>Upload Room's Image</span>
                          <input
                            onChange={handleImage}
                            id="image"
                            name="image"
                            type="file"
                            className="sr-only"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </label>
              </div>
              {
                [
                  {placeholder:"Enter Hostel name", name:"Hostel Name", type: "text", option: [], select: false, id: "hostel_name", change: handleChange},
                  {placeholder:"Enter Room Number", name:"Room Number", type: "text", option: [], select: false, id: "room_number", change: handleChange},
                  {placeholder:"", name:"Hostel Type", type: "", option: ["Please Select Hostel Type", "General", "Private"], select: true, id: "type", change: handleSelect},
                  {placeholder:"Enter Room Price", name:"Price", type: "number", option: [], select: false, id: "price", change: handleChange},
                  {placeholder:"", name:"Gender", type: "", option: ["Please Select Gender", "Male", "Female"], select: true, id: "gender", change: handleSelect},
                  {placeholder:"Enter Number in room", name:"Number In Room", type: "number", option: [], select: false, id: "number_acceptable", change: handleChange},
                ].map((fm, i)=> (
                  <>
                  <div className="mb-2 w-full flex items-center flex-col" key={i}>
        <div className=" mb-3 w-full">
          {fm.name}
        </div>
        {
          !fm.select ?
          <input onChange={handleChange} type={fm.type} className=" lg:h-11 w-full h-11 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder={fm.placeholder} id={fm.id} />
          :
          <select onChange={handleSelect} className=" lg:h-11 w-full h-11 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" id={fm.id}>
            {
              fm.option.map(opt=>(
                <option>{opt}</option>
              ))
            }
          </select>
        }
      </div>
                  </>
                ))
              }
                  </>
              </ModalDialog>
              </div>
          </div>
        </div>
      </div>
    );
}

export default Title;
