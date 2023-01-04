import './App.css';
import Title from "./components/title";
import SideBar from "./components/sideBar";
import MainPage from './container/mainPage';
import BorrowPage from './container/borrowPage';
import ReturnPage from './container/returnPage';
import BorrowReturnPage from './container/borrowReturnPage';
import EquipmentListPage from './container/equipmentListPage';
import SearchEquipmentPage from './container/searchEquipmentPage';
import AddRemoveEquipmentPage from './container/addRemoveEquipmentPage';
import ActivitiesRecordPage from './container/activitiesRecordPage';
import EquipmentPage from './container/equipmentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Title />
        <SideBar />
        <div className="container">
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/borrow" element={<BorrowPage />} />
              <Route path="/return" element={<ReturnPage />} />
              <Route path="/borrowReturn" element={<BorrowReturnPage />} />
              <Route path="/equipmentList" element={<EquipmentListPage />} />
              <Route path="/searchEquipment" element={<SearchEquipmentPage />} />
              <Route path="/addRemoveEquipment" element={<AddRemoveEquipmentPage />} />
              <Route path="/activitiesRecord" element={<ActivitiesRecordPage />} />
              <Route path="/equipment/:id" element={<EquipmentPage />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
