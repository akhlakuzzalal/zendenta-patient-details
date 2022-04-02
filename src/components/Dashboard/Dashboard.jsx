import { useEffect, useState } from 'react';
import {
  AiOutlineCalendar,
  AiOutlineExclamationCircle,
  AiOutlineMenuFold,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoSettings } from 'react-icons/go';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import SinglePataintDetails from '../DashboardItems/Pataint/SinglePataintDetails';
import './dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname === '' || location.pathname === '/';
  const [doctor, setDoctor] = useState({});
  const [menu, setMenu] = useState('');
  useEffect(() => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
      .then((res) => res.json())
      .then((data) => setDoctor(data[0]));
  }, []);
  return (
    <div id="dashboard" className="grid grid-cols-6">
      <div id="dash-menu" className="col-span-1 h-[100vh] pl-6 py-5">
        {/* menu items */}
        <div className="flex flex-col items-start justify-between h-full">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <img className="h-12 w-40" src={logo} alt="" />
              <AiOutlineMenuFold size={25} />
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/dashboard/overview"
                  onClick={() => setMenu('')}
                  className="flex items-center space-x-2 focus:text-white focus:bg-[#0d53fc]  hover:text-white hover:bg-[#0d53fc] px-3 py-2 rounded-md "
                >
                  <AiOutlineQuestionCircle size={20} />
                  <h6 className="font-bold">Overview</h6>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/calender"
                  onClick={() => setMenu('')}
                  className="flex items-center space-x-2 focus:text-white focus:bg-[#0d53fc] hover:text-white hover:bg-[#0d53fc] px-3 py-2 rounded-md "
                >
                  <AiOutlineCalendar size={20} />
                  <h6 className="font-bold">Calender</h6>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/pataintDetails"
                  onClick={() => setMenu('list')}
                  className={`flex items-center space-x-2 focus:text-white focus:bg-[#0d53fc] hover:text-white hover:bg-[#0d53fc] px-3 py-2 rounded-md ${
                    menu === 'list' && 'bg-[#0d53fc] text-white'
                  }`}
                >
                  <CgProfile size={20} />
                  <h6 className="font-bold">Patient List</h6>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/massages"
                  onClick={() => setMenu('')}
                  className="flex items-center space-x-2 focus:text-white focus:bg-[#0d53fc] hover:text-white hover:bg-[#0d53fc] px-3 py-2 rounded-md "
                >
                  <BiMessageRoundedDetail size={20} />
                  <h6 className="font-bold">Massages</h6>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/payment"
                  onClick={() => setMenu('')}
                  className="flex items-center space-x-2 focus:text-white focus:bg-[#0d53fc] hover:text-white hover:bg-[#0d53fc] px-3 py-2 rounded-md "
                >
                  <RiMoneyDollarCircleLine size={20} />
                  <h6 className="font-bold">Payment Information</h6>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/settings"
                  onClick={() => setMenu('')}
                  className="flex items-center space-x-2 focus:text-white focus:bg-[#0d53fc] hover:text-white hover:bg-[#0d53fc] px-3 py-2 rounded-md "
                >
                  <GoSettings size={20} />
                  <h6 className="font-bold">Settings</h6>
                </Link>
              </li>
            </ul>
          </div>
          {/* menu bottom */}
          <div className="w-full">
            <span className="flex items-center space-x-2 pb-5 border-b-[1px] border-gray-400">
              <AiOutlineExclamationCircle size={20} />
              <h6>Help</h6>
            </span>
            <div className="flex items-center justify-between w-full mt-7">
              <div className="flex items-center space-x-2">
                <img
                  className="h-11 w-11 rounded-full"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <span>
                  <h6 className="font-bold">{doctor?.name}</h6>
                  <p>{doctor?.specification}</p>
                </span>
              </div>
              <BsChevronDown size={20} className="mr-6" />
            </div>
          </div>
        </div>
      </div>
      <div id="dash-item" className="col-span-5">
        {isDetailsPage ? <SinglePataintDetails /> : <Outlet />}
      </div>
    </div>
  );
};

export default Dashboard;
