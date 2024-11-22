import {Route, Routes} from "react-router-dom";
import Passes from "./pages/Passes";
import Postings from "./pages/Postings";
import HomePage from './pages/HomePage';
import '@mantine/core/styles.css';
import { NavbarMinimal } from "./components/NavbarMinimal"

// This need to change

function App() {
  return (
    <>
      <NavbarMinimal />
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = '/passes' element= {<Passes />} />
        <Route path = '/postings' element= {<Postings />} />
      </Routes>
    </>
  )
}

export default App
