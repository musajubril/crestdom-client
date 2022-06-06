
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import React from 'react'

const Title = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="pb-5 border-b border-green-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Students</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <label htmlFor="search_candidate" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">
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
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 border border-green-300 rounded-r-md bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-green-500"
            >
            Add New
              {/* <SortAscendingIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /> */}
              {/* <span className="ml-2">Sort</span> */}
              {/* <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
            </button>
            {/* <SlideOver title="Add Students" Component={Component} open={open} setOpen={setOpen} /> */}
          </div>
        </div>
      </div>
    );
}

export default Title;
