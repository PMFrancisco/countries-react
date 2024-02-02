import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Homepage } from "./pages/Homepage";
import { NavBar } from "./partials/NavBar";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
