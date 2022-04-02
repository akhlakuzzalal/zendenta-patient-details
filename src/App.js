import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import PataintList from './components/DashboardItems/Pataint/PataintList';
import SinglePataintDetails from './components/DashboardItems/Pataint/SinglePataintDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="allPataint" element={<PataintList />} />
          <Route path="pataintDetails" element={<SinglePataintDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
