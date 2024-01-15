import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Main from "./layout/Main";
import NoPage from "./pages/NoPage";
import Home from "./components/Dashboard/Home";
import Create from "./components/Dashboard/Create";
import New from "./components/Dashboard/New";
import Progress from "./components/Dashboard/Progress";
import Completed from "./components/Dashboard/Completed";
import Canceled from "./components/Dashboard/Canceled";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/> }>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/new" element={<New />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/canceled" element={<Canceled />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
