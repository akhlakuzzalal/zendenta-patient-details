import React from 'react';
import { CgProfile } from 'react-icons/cg';

const AppointmentResult = ({ upcoming, past }) => {
  return (
    <>
      <div className="item pl-3 ml-4 py-2">
        <div className="flex items-center justify-around w-full space-y-2 h-min bg-white px-4 py-2 rounded-md">
          <div>
            <h4 className="text-2xl font-semibold">{upcoming?.Date}</h4>
            <h6 className="text-gray-400">{upcoming?.Time}</h6>
          </div>
          <div className="border-r-2 border-gray-400 h-10"></div>
          <div>
            <h6 className="text-gray-400">Treatment</h6>
            <h5 className="text-xl font-bold">{upcoming?.Treatment}</h5>
          </div>
          <div className="border-r-2 border-gray-400 h-10"></div>
          <div className="flex items-center space-x-4">
            <div>
              <h6 className="text-gray-400">Dentist</h6>
              <h5 className="text-base font-bold">{upcoming?.Dentist}</h5>
            </div>
            <div>
              <h6 className="text-gray-400">Nurse</h6>
              <h5 className="text-base font-bold">{upcoming?.Nurse}</h5>
            </div>
            <div className="flex items-center space-x-2 text-[#0d53fc] font-semibold">
              <CgProfile size={20} />
              <h6>Notes</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="item pl-3 ml-4 py-2">
        <div className="flex items-center justify-around w-full space-y-2 h-min bg-white px-4 py-2 rounded-md">
          <div>
            <h4 className="text-2xl font-semibold">{past?.Date}</h4>
            <h6 className="text-gray-400">{past?.Time}</h6>
          </div>
          <div className="border-r-2 border-gray-400 h-10"></div>
          <div>
            <h6 className="text-gray-400">Treatment</h6>
            <h5 className="text-xl font-bold">{past?.Treatment}</h5>
          </div>
          <div className="border-r-2 border-gray-400 h-10"></div>
          <div className="flex items-center space-x-4">
            <div>
              <h6 className="text-gray-400">Dentist</h6>
              <h5 className="text-base font-bold">{past?.Dentist}</h5>
            </div>
            <div>
              <h6 className="text-gray-400">Nurse</h6>
              <h5 className="text-base font-bold">{past?.Nurse}</h5>
            </div>
            <div className="flex items-center space-x-2 text-[#0d53fc] font-semibold">
              <CgProfile size={20} />
              <h6>Notes</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentResult;
