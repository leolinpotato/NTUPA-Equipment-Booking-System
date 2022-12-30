import './App.css';
import Title from "./components/title";
import SideBar from "./container/sideBar";
import MainPage from './container/mainPage';
import LendPage from './container/lendPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Title />
        <SideBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/lend" element={<LendPage />} />
        </Routes>

    </Router>
  );
}

export default App;
