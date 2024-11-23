import {Route, Routes} from "react-router-dom";
import Passes from "./pages/Passes";
import Postings from "./pages/Postings";
import HomePage from './pages/HomePage';
import EventPage from "./pages/EventPage";
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
        <Route path = '/event' element= {<EventPage />} />
      </Routes>
    </>
  )
}

export default App
