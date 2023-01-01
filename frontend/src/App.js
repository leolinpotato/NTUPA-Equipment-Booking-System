import './App.css';
import Title from "./components/title";
import SideBar from "./components/sideBar";
import MainPage from './container/mainPage';
import LendPage from './container/lendPage';
import BorrowReturnPage from './container/borrowReturnPage';
import EquipmentListPage from './container/equipmentListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Title />
        <SideBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/lend" element={<LendPage />} />
            <Route path="/Borrow/Return" element={<BorrowReturnPage />} />
            <Route path="/Equipment List" element={<EquipmentListPage />} />
        </Routes>

    </Router>
  );
}

export default App;
