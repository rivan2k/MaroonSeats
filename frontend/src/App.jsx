import {Route, Routes} from "react-router-dom";
import Passes from "./pages/Passes";
import HomePage from './pages/HomePage';
import EventPage from "./pages/EventPage";
import LogIn from "./pages/LogIn";
import PostPurchase from "./pages/PostPurchase";
import ManagerView from "./pages/ManagerView";
import ManagerAdd from "./pages/ManagerAdd";
import '@mantine/core/styles.css';
import { NavbarMinimal } from "./components/NavbarMinimal"


function App() {
  return (
    <>
      <NavbarMinimal />
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = '/passes' element= {<Passes />} />
        <Route path = "/event/:id" element={<EventPage />} />
        <Route path = "/login" element={<LogIn />} />
        <Route path = "/thanks" element={<PostPurchase/>} />
        <Route path = "/manager_view" element={<ManagerView/>} />
        <Route path = "/add_event" element={<ManagerAdd/>} />
        
      </Routes>
    </>
  )
}

export default App
