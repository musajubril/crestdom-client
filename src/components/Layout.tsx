/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UserIcon,
  XIcon,
  BookmarkAltIcon,
  LogoutIcon,
  FolderOpenIcon,
  OfficeBuildingIcon,
  CogIcon,
  FolderAddIcon,
  FolderRemoveIcon,
  ClipboardListIcon
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { motion } from "framer-motion";
const navigation = [
  { name: "Dashboard", href: "/admin", icon: CogIcon },
  { name: "Bookings", href: "/admin/bookings", icon: ClipboardListIcon },
  { name: "Rooms", href: "/admin/rooms", icon: HomeIcon },
  { name: "Bursar", href: "/admin/bursar", icon: UserIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children, page }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logOut = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("crescent_token");
    alert("log out successful");
    window.location.href = "/login";
  };
  // const user:{fullName: any, image: any, email: any} = jwtDecode(localStorage?.getItem("crescent_token"))
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-green-600">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center justify-center w-full px-4">
                  <img
                    className="w-auto h-40"
                    src={require("../images/crescent.png")}
                    alt="Workflow"
                  />
                </div>
                <div className="p-6 bg-transparent">
        {/* <div className="">
          <div className="">
            <div className="flex-shrink-0">
              <img className="object-contain object-center w-40 h-40 mx-auto transition-all transform rounded-full hover:scale-110 hover:-translate-y-3" src={"user?.image"} alt="" />
            </div>
            <div className="mt-4 text-center ">
              <p className="text-xl font-bold text-white ">{"user?.fullName"}</p>
              <p className="text-sm font-medium text-white">{"user?.email"}</p>
            </div>
          </div>
        </div> */}
      </div>
                <nav className="px-2 mt-5 space-y-1 overflow-hidden">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.name === page
                          ? "bg-white text-green-900"
                          : "text-white hover:bg-green-600 hover:text-white",
                        "group flex items-center px-2 py-2 text-base font-medium  hover:scale-105 hover:translate-x-5 transition-all transform -mr-6 rounded-full"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.name === page
                            ? "text-green-900"
                            : "text-white group-hover:text-white",
                          "mr-4 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href=""
                    onClick={logOut}
                    className={classNames(
                      "text-white hover:bg-green-600 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium  hover:scale-105 hover:translate-x-5 transition-all transform rounded-md"
                    )}
                  >
                    <LogoutIcon
                      className={classNames(
                        "text-white group-hover:text-white",
                        "mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    Log Out
                  </a>
                </nav>
              </div>
              <div className="flex flex-shrink-0 p-4 bg-green-600">
                <a href="#" className="flex-shrink-0 block group">
                  <div className="flex items-center">
                    {/* <div>
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div> */}
                    {/* <div className="ml-3">
                      <p className="text-base font-medium text-white">Tom Cook</p>
                      <p className="text-sm font-medium text-white group-hover:text-white">View profile</p>
                    </div> */}
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 h-0 bg-green-600">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center px-4 w-full justify-center">
                <img
                  className="w-auto h-40"
                  src={require("../images/crescent.png")}
                                    alt="Workflow"
                />
              </div>
              <div className="py-6 bg-transparent">
        {/* <div className="">
          <div className="">
            <div className="flex-shrink-0">
              <img className="object-contain object-center w-40 h-40 mx-auto transition-all transform rounded-full hover:scale-110 hover:-translate-y-3" src={"user?.image"} alt="" />
            </div>
            <div className="mt-4 text-center ">
              <p className="text-xl font-bold text-white ">{"user?.fullName"}</p>
              <p className="text-sm font-medium text-white">{"user?.email"}</p>
            </div>
          </div>
        </div> */}
      </div>
              <nav className="flex-1 px-2 mt-5 space-y-1 overflow-hidden bg-green-600">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.name === page
                        ? "bg-white text-green-900"
                        : "text-white hover:bg-white hover:text-green-900",
                      "group flex items-center px-2 -mr-6 rounded-full py-2 text-sm font-medium rounded-md overflow-hidden  hover:scale-105 hover:translate-x-5 transition-all transform "
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.name === page
                          ? "text-green-900"
                          : "text-white group-hover:bg-white group-hover:text-green-900",
                        "mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
                <a
                  href=""
                  onClick={logOut}
                  className={classNames(
                    "text-white hover:bg-green-600 hover:text-white",
                    "group flex items-center px-2 py-2 text-sm font-medium  hover:scale-105 hover:translate-x-5 transition-all transform rounded-md"
                  )}
                >
                  <LogoutIcon
                    className={classNames(
                      "text-white group-hover:text-white",
                      "mr-3 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  Log Out
                </a>
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 bg-green-600">
              <a href="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  {/* <div>
                    <img
                      className="inline-block rounded-full h-9 w-9"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div> */}
                  {/* <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p className="text-xs font-medium text-white group-hover:text-white">View profile</p>
                  </div> */}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="flex flex-row justify-between">
        <div className="pt-1 ml-9 md:hidden sm:ml-3 sm:pt-3 text-green-600 flex items-center">
            <p className="text-center text-5xl font-extrabold">
            Cuab-Hostel
            </p>
            </div>
          <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="w-6 h-6 text-green-600" aria-hidden="true" />
            </button>
          </div>
        </div>
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
            </div> */}
            <motion.div initial={{x: 5000}} transition={{duration: 1}} animate={{x: 0}} exit={{x: -5000, transition: {ease: "easeInOut", duration: 1}}} className="px-4 mx-auto max-w-9xl sm:px-6 md:px-8">
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
