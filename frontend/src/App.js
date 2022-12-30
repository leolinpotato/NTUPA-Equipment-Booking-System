import logo from './logo.svg';
import './App.css';
import Title from "./components/title"
import SideBar from "./container/sideBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Title />
        <SideBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>

    </Router>
  );
}

export default App;
