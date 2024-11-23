import {Route, Routes} from "react-router-dom";
import Passes from "./pages/Passes";
import Postings from "./pages/Postings";
import HomePage from './pages/HomePage';
import EventPage from "./pages/EventPage";
import LogIn from "./pages/LogIn";
import PostPurchase from "./pages/PostPurchase";
import '@mantine/core/styles.css';
import { NavbarMinimal } from "./components/NavbarMinimal"

function App() {
  return (
    <>
      <NavbarMinimal />
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = '/passes' element= {<Passes />} />
        <Route path = '/postings' element= {<Postings />} />
        <Route path = "/event/:id" element={<EventPage />} />
        <Route path = "/login" element={<LogIn />} />
        <Route path = "/thanks" element={<PostPurchase/>} />
      </Routes>
    </>
  )
}

export default App
