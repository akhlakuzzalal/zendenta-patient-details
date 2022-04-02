import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Calender from './components/DashboardItems/Calender';
import Massages from './components/DashboardItems/Massages';
import OverView from './components/DashboardItems/OverView';
import SinglePataintDetails from './components/DashboardItems/Pataint/SinglePataintDetails';
import PaymentInformation from './components/DashboardItems/PaymentInformation';
import Settings from './components/DashboardItems/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="pataintDetails" element={<SinglePataintDetails />} />
          <Route path="overview" element={<OverView />} />
          <Route path="calender" element={<Calender />} />
          <Route path="massages" element={<Massages />} />
          <Route path="payment" element={<PaymentInformation />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
