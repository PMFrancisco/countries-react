import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Homepage } from "./pages/Homepage";
import { NavBar } from "./partials/NavBar";
import { Countries } from "./pages/Countries";
import { CountryDetail } from "./pages/CountryDetail";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:cca2" element={<CountryDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
