import logo from "./logo.svg";
import { Home } from "./components/Home.jsx";
import { Task2 } from "./components/Task2.jsx";
import { Task3 } from "./components/Task3.jsx";
import { Task4 } from "./components/Task4.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
      </Routes>
    </div>
  );
}

export default App;
