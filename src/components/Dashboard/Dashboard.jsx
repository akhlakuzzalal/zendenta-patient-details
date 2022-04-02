import { Link, Outlet } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div id="dashboard" className="grid grid-cols-5">
        <div id="dash-menu" className="col-span-1">
          <div className="left-menu text-start">
            <ul className="deshboard-menu">
              <li>
                <Link to="myorder">
                  <span className="dash-icon" title="Dashboard"></span>{' '}
                  <span className="desh-text">Overview</span>
                </Link>
              </li>
              <li>
                <Link to="review">
                  <span className="dash-icon" title="Dashboard"></span>{' '}
                  <span className="desh-text">Calender</span>
                </Link>
              </li>
              <li>
                <Link to="review">
                  <span className="dash-icon" title="Dashboard"></span>{' '}
                  <span className="desh-text">Pataint List</span>
                </Link>
              </li>
              <li>
                <Link to="review">
                  <span className="dash-icon" title="Dashboard"></span>{' '}
                  <span className="desh-text">Massages</span>
                </Link>
              </li>
              <li>
                <Link to="review">
                  <span className="dash-icon" title="Dashboard"></span>{' '}
                  <span className="desh-text">Payment Information</span>
                </Link>
              </li>
              <li>
                <Link to="review">
                  <span className="dash-icon" title="Dashboard"></span>{' '}
                  <span className="desh-text">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="dash-item" className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
