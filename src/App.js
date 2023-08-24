import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Home from "./component/Home";
import Addcontact from './component/Addcontact';
import Editcontact from './component/Editcontact';
import Chartsmap from './component/Chartsmap';
import CovidGraph from './component/CovidGraph';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
    <div className='App'>
        <ToastContainer />
      <Header />
      <div className='flex'>
      <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/add" element={<Addcontact/>} /> 
        <Route  path="/edit/:id" element={<Editcontact />} />
        <Route  path="/map" element={<Chartsmap />}/>
        </Routes>
      </div>
    </div>
  </Router>
  <div className='w-[100%] h-[70vh]'>
    <CovidGraph />
  </div>
  </>
  );
}

export default App;
