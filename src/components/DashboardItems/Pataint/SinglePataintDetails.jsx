import React, { useEffect, useState } from 'react';
import {
  AiFillPlusCircle,
  AiFillPrinter,
  AiOutlineFileAdd,
  AiOutlineSearch,
} from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaRegFileAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { MdNotifications, MdOutlineArrowForwardIos } from 'react-icons/md';
import { RiArrowUpSLine } from 'react-icons/ri';
import AppointmentResult from './AppointmentResult';

const SinglePataintDetails = () => {
  const [patient, setPatient] = useState({});
  const [filter, setfilter] = useState('upcoming');
  const [file, setFiles] = useState({});
  const [pastAppointment, setPastAppointment] = useState({});
  const [upcommingAppointment, setUpcommingAppointment] = useState({});
  useEffect(() => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
      .then((res) => res.json())
      .then((data) => setPatient(data[0]));
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/Files')
      .then((res) => res.json())
      .then((data) => setFiles(data[0]));
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
      .then((res) => res.json())
      .then((data) => {
        setUpcommingAppointment(data[0]?.['Upcoming Appointments']);
        setPastAppointment(data[0]?.['Post Appointment']);
      });
  }, []);
  return (
    <div>
      {/* name & search */}
      <div className="flex items-center justify-between px-6 my-6">
        {/* profile name */}
        <div className="flex items-center space-x-2">
          <CgProfile size={30} className="text-[#0d53fc]" />
          <h5 className="text-2xl font-bold">{patient?.name}</h5>
        </div>
        {/* input notification */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full border-[1px] border-gray-400 px-3 py-1 relative bg-white">
            <input
              className="focus:outline-none active:outline-none ml-3"
              type="text"
              placeholder="Search"
            />
            <AiOutlineSearch size={20} className="absolute left-1 top-2" />
          </div>
          <AiFillPlusCircle size={35} className="text-[#0d53fc]" />
          <div className="relative">
            <MdNotifications
              size={35}
              className="text-gray-700 bg-white p-1 rounded-full"
            />
            <span className="h-2 w-2 bg-red-600 absolute right-0 top-1 rounded-full"></span>
          </div>
        </div>
      </div>
      {/* location & edit */}
      <div className="flex items-center justify-between px-6 py-4 border-y-2 border-gray-400 ">
        <div className="flex items-center space-x-3">
          <h5 className="text-xl font-semibold text-[#0d53fc]">Patient List</h5>
          <MdOutlineArrowForwardIos size={20} />
          <h5 className="text-xl font-semibold text-gray-500">
            {patient?.name}
          </h5>
        </div>
        <div className="flex items-center space-x-3">
          <AiFillPrinter
            size={30}
            className="bg-white rounded-md p-1 text-gray-500 cursor-pointer"
          />
          <div className="flex items-center space-x-2 bg-white rounded-md p-1 text-gray-500 px-2 font-bold cursor-pointer">
            <FiEdit size={15} />
            <h6>Edit Patient</h6>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="px-6 mt-6 grid grid-cols-3 gap-5 h-[calc(100vh-180px)] overflow-y-scroll">
        {/* profile appointments */}
        <div className="col-span-2 grid grid-cols-3 gap-2 h-min">
          {/* profile with avatar */}
          <div className="col-span-1 flex flex-col items-center bg-white rounded-sm py-6">
            <img
              className="h-24 w-24 rounded-full"
              src="https://m.media-amazon.com/images/S/amzn-author-media-prod/d3fg23o93lv82bla9o24123b9j._SX450_.jpg"
              alt=""
            />
            <h6 className="text-xl font-bold">{patient?.name}</h6>
            <h6 className="text-gray-500">abcd@xyz.com</h6>
            <div className="flex items-center w-full">
              <div className="text-center w-[49%]">
                <h3 className="text-xl font-bold">15</h3>
                <h6 className="text-gray-400">Past</h6>
              </div>
              <div className="border-l-2 border-gray-300 h-5/6"></div>
              <div className="text-center w-[49%]">
                <h3 className="text-xl font-bold">2</h3>
                <h6 className="text-gray-400">Upcoming</h6>
              </div>
            </div>
            <button className="w-5/6 py-1 rounded-md font-semibold border-[1px] border-gray-400 mt-3">
              Send Massage
            </button>
          </div>
          {/* farthur details */}
          <div className="col-span-2 bg-white rounded-sm py-6 flex flex-col justify-evenly">
            {/* Gender DoB Phone */}
            <div className="grid grid-cols-3 gap-1 pl-6">
              <div>
                <h6 className="text-gray-400 font-bold">Gender</h6>
                <h6>{patient?.Gender}</h6>
              </div>
              <div>
                <h6 className="text-gray-400 font-bold">Birthday</h6>
                <h6>{patient?.Birthday}</h6>
              </div>
              <div>
                <h6 className="text-gray-400 font-bold">Phone Number</h6>
                <h6>+990667867764</h6>
              </div>
            </div>
            {/* address city zip */}
            <div className="grid grid-cols-3 gap-1 pl-6">
              <div>
                <h6 className="text-gray-400 font-bold">Street Address</h6>
                <h6>baytukl aman Faridpur</h6>
              </div>
              <div>
                <h6 className="text-gray-400 font-bold">City</h6>
                <h6>Faridpur</h6>
              </div>
              <div>
                <h6 className="text-gray-400 font-bold">Zip</h6>
                <h6>1264</h6>
              </div>
            </div>
            {/* status reg date */}
            <div className="grid grid-cols-3 gap-1 pl-6">
              <div>
                <h6 className="text-gray-400 font-bold">Member Status</h6>
                <h6>Active</h6>
              </div>
              <div>
                <h6 className="text-gray-400 font-bold">Registered date</h6>
                <h6>12 april 2021</h6>
              </div>
            </div>
          </div>
          {/* appointments */}
          <div className="col-span-3 bg-white rounded-sm py-6 px-5">
            {/* filter */}
            <div className="flex space-x-1 py-1 items-center bg-[#f2f5f9] w-max rounded-md px-2">
              <p
                className={`px-4 py-1 hover:bg-white hover:text-[#0d53fc] rounded-lg font-bold ${
                  filter === 'upcoming' && 'bg-white text-[#0d53fc]'
                }`}
                onClick={() => setfilter('upcoming')}
              >
                Upcoming Appointments
              </p>
              <p
                className={`px-4 py-1 hover:bg-white hover:text-[#0d53fc] rounded-lg font-bold ${
                  filter === 'past' && 'bg-white text-[#0d53fc]'
                }`}
                onClick={() => setfilter('past')}
              >
                Past Appointments
              </p>
              <p
                className={`px-4 py-1 hover:bg-white hover:text-[#0d53fc] rounded-lg font-bold ${
                  filter === 'medical' && 'bg-white text-[#0d53fc]'
                }`}
                onClick={() => setfilter('medical')}
              >
                Medical Records
              </p>
            </div>
            {/* results & prev */}
            <div className="bg-[#f2f5f9] mt-4 py-4 px-3">
              {/* prev appointment */}
              <div className="flex items-center justify-between py-3 px-2 border-b-2 border-gray-400">
                <h6 className="font-bold">Root canale treatment</h6>
                <div className="flex items-center space-x-2 text-gray-400 bg-white px-3 py-1 rounded-md">
                  <RiArrowUpSLine size={18} />
                  <h6>Show previous treatment</h6>
                </div>
              </div>
              {/* result */}
              <AppointmentResult
                upcoming={upcommingAppointment}
                past={pastAppointment}
              />
            </div>
          </div>
        </div>
        {/* notes files */}
        <div className="col-span-1 space-y-3">
          {/* notes */}
          <div className="bg-white rounded-sm py-2 space-y-2">
            <div className="flex items-center justify-between px-5">
              <h6 className="font-bold">Notes</h6>
              <h6 className="font-semibold text-[#0d53fc]">See all</h6>
            </div>
            <div className="mx-2 py-4 px-3 bg-[#f2f5f9]">
              <p>-The patient is Lorem ipsum dolor sit amet.</p>
              <p>-Lorem ipsum dolor sit amet.</p>
              <p>-Lorem ipsum dolor sit.</p>
              <div className="flex justify-end mt-10">
                <button className="px-3 py-1 text-white font-semibold bg-[#0d53fc] rounded-md mr-5">
                  Save note
                </button>
              </div>
            </div>
            <p className="ml-6">Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center justify-between px-6">
              <span className="flex items-center">
                <CgProfile size={20} className="text-[#0d53fc]" />
                <h6 className="text-gray-400">{patient?.name}</h6>
              </span>
              <h6 className="text-gray-400">20 Nov '19</h6>
            </div>
          </div>
          {/* files */}
          <div className="bg-white rounded-sm py-2 space-y-1 px-6">
            <div className="flex items-center justify-between">
              <h6 className="font-bold">Files/Documents</h6>
              <span className="flex items-center space-x-2 text-[#0d53fc] font-semibold">
                <AiOutlineFileAdd size={20} />
                <p>Add file</p>
              </span>
            </div>
            <div className="">
              <div className="flex items-center justify-between py-2 px-3 shadow-md rounded-lg">
                <span className="flex items-center space-x-2">
                  <FaRegFileAlt />
                  <h6>Checkup result.pdf</h6>
                </span>
                <p className="text-gray-400">123kb</p>
              </div>
              <div className="flex items-center justify-between py-2 px-3 shadow-md rounded-lg">
                <span className="flex items-center space-x-2">
                  <FaRegFileAlt />
                  <h6>Dental X-ray result.pdf</h6>
                </span>
                <p className="text-gray-400">123kb</p>
              </div>
              <div className="flex items-center justify-between py-2 px-3 shadow-md rounded-lg">
                <span className="flex items-center space-x-2">
                  <FaRegFileAlt />
                  <h6>Medical prascriptions.pdf</h6>
                </span>
                <p className="text-gray-400">123kb</p>
              </div>
              <div className="flex items-center justify-between py-2 px-3 shadow-md rounded-lg">
                <span className="flex items-center space-x-2">
                  <FaRegFileAlt />
                  <h6>Dental result.pdf</h6>
                </span>
                <p className="text-gray-400">123kb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePataintDetails;
